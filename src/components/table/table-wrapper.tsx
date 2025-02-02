import { TableSuccessResponse } from "@/@types"
import { generateTableFilters } from "@/utils/generate-table-filters"
import { Table, TableThead } from "@mantine/core"
import { QueryKey, useQuery } from "@tanstack/react-query"
import { useOptimisticSearchParams } from "nuqs/adapters/react-router/v7"

import Error from "@/components/common/error"
import Loader from "@/components/common/loader"
import PaginationCom from "@/components/common/pagination"

type TableWrapperProps<T extends Record<string, any>> = {
  queryFun: (q: URLSearchParams) => Promise<TableSuccessResponse<T>["data"]>
  queryKey: QueryKey
  renderHead: (headKey: Partial<keyof T>[], data: T[]) => React.ReactNode
  renderRow: (data: T[]) => React.ReactNode
  headKey: Partial<keyof T>[]
  miw?: number
}
const TableWrapper = <T extends Record<string, any>>(props: TableWrapperProps<T>) => {
  // Note: this is read-only, but reactive to all URL changes
  const searchParams = useOptimisticSearchParams()
  const page = searchParams.get("page")
  const stringTableFilters = searchParams.get("tableFilters")

  const { searchParams: tableSearchParams } = generateTableFilters(stringTableFilters)
  tableSearchParams.append("page", page || "")

  const { data, status, error } = useQuery({
    queryKey: [...props.queryKey, tableSearchParams.toString()],
    queryFn: async () => await props.queryFun(tableSearchParams),
  })

  if (status === "pending") return <Loader />

  return (
    <>
      <Table.ScrollContainer minWidth={props.miw ?? 800}>
        <Table
          highlightOnHover
          highlightOnHoverColor="#f6f6f6"
          className="overflow-hidden rounded-md bg-white">
          <TableThead>
            <Table.Tr>{props.renderHead(props.headKey, data?.items.data || [])}</Table.Tr>
          </TableThead>
          <Table.Tbody>
            {status === "error" ? <Error error={error} /> : null}
            {status === "success" ? props.renderRow(data.items.data) : null}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <PaginationCom last_page={data?.items.meta.last_page} />
    </>
  )
}

export default TableWrapper
