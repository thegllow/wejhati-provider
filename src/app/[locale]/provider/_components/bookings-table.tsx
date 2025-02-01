import { TableSuccessResponse } from "@/@types"
import { Badge, Table, TableTh, TableTr } from "@mantine/core"

import TableWrapper from "@/components/table/table-wrapper"

type Props = {}
const tableData = [
  {
    bookingNo: "BK001",
    busNo: "SA101",
    noOfSeats: 25,
    noOfPassengers: 14,
    tripType: "One way",
    departure: "Riyadh",
    arrival: "Damascus",
    date: "Nov 14, 2024",
    tripTime: "3:00 PM",
    bookingValue: "120.00 SAR",
  },
  {
    bookingNo: "BK002",
    busNo: "SA202",
    noOfSeats: 25,
    noOfPassengers: 12,
    tripType: "One way",
    departure: "Jeddah",
    arrival: "Dubai",
    date: "Nov 14, 2024",
    tripTime: "4:00 PM",
    bookingValue: "140.00 SAR",
  },
  {
    bookingNo: "BK003",
    busNo: "SA303",
    noOfSeats: 20,
    noOfPassengers: 10,
    tripType: "One way",
    departure: "Riyadh",
    arrival: "Kuwait",
    date: "Nov 14, 2024",
    tripTime: "4:15 PM",
    bookingValue: "150.00 SAR",
  },
  {
    bookingNo: "BK004",
    busNo: "SA404",
    noOfSeats: 22,
    noOfPassengers: 12,
    tripType: "Round",
    departure: "Damascus",
    arrival: "Al Khobar",
    date: "Nov 15, 2024",
    tripTime: "5:00 PM",
    bookingValue: "130.00 SAR",
  },
  {
    bookingNo: "BK005",
    busNo: "SA505",
    noOfSeats: 22,
    noOfPassengers: 12,
    tripType: "Round",
    departure: "Riyadh",
    arrival: "Bahrain",
    date: "Nov 15, 2024",
    tripTime: "5:15 PM",
    bookingValue: "300.00 SAR",
  },
  {
    bookingNo: "BK006",
    busNo: "SA606",
    noOfSeats: 25,
    noOfPassengers: 14,
    tripType: "One way",
    departure: "Dubai",
    arrival: "Jeddah",
    date: "Nov 16, 2024",
    tripTime: "5:30 PM",
    bookingValue: "110.00 SAR",
  },
]

const queryFn = async (
  q: URLSearchParams,
): Promise<TableSuccessResponse<(typeof tableData)[number]>["data"]> => {
  await new Promise((res) => setTimeout(res, 2000))
  return {
    items: {
      data: tableData,
      meta: {
        current_page: 1,
        last_page: 4,
      },
    },
  }
}

const BookingTable = (props: Props) => {
  return (
    <TableWrapper
      queryFun={queryFn}
      queryKey={["test"]}
      miw={1200}
      headKey={[
        "bookingNo",
        "busNo",
        "noOfSeats",
        "noOfPassengers",
        "tripType",
        "departure",
        "arrival",
        "date",
        "tripTime",
        "bookingValue",
      ]}
      renderHead={(headerKey, data) => {
        return [...headerKey, "action"].map((k) => <TableTh key={k}>{k}</TableTh>)
      }}
      renderRow={(data) => {
        return data.map((element) => {
          return (
            <TableTr key={element.bookingNo}>
              <Table.Td>{element.bookingNo}</Table.Td>
              <Table.Td>{element.busNo}</Table.Td>
              <Table.Td>{element.noOfSeats}</Table.Td>
              <Table.Td>{element.noOfPassengers}</Table.Td>
              <Table.Td>{element.tripType}</Table.Td>
              <Table.Td>{element.departure}</Table.Td>
              <Table.Td>{element.arrival}</Table.Td>
              <Table.Td>{element.date}</Table.Td>
              <Table.Td>{element.tripTime}</Table.Td>
              <Table.Td>{element.bookingValue}</Table.Td>
              <Table.Td>
                <Badge>more</Badge>
              </Table.Td>
            </TableTr>
          )
        })
      }}
    />
  )
}

export default BookingTable
