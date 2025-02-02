import { objectToSearchParams } from "./obj-to-searchParams"

type generateTableFiltersReturnType = {
  searchParams: URLSearchParams
  objSearchParams: Record<string, string>
}

const decodeFilters = (searchParam: string | null) => {
  try {
    return searchParam ? JSON.parse(decodeURIComponent(searchParam)) : {}
  } catch {
    return {}
  }
}
export const generateTableFilters = (searchParam: string | null): generateTableFiltersReturnType => {
  const filters = decodeFilters(searchParam)
  const searchParams = objectToSearchParams(filters)
  const objSearchParams: Record<string, any> = filters
  return {
    searchParams,
    objSearchParams,
  }
}
