export type ErrorResponse<T> = {
  message: string
  errors?: {
    [key in keyof T]?: string[]
  }
}

export type SuccessResponse<T> = {
  status: true
  message: string
  data: {
    items: T
    item: T
  }
  guard: string
  errors: null
  response_code: number
}

export type TableSuccessResponse<T> = {
  // status: true
  // message: string
  data: {
    // helpers: null
    items: {
      data: T[]
      // links: Links
      meta: Meta
    }
  }

  // guard: string
  // errors: null
  // response_code: number
}

export interface Links {
  first: string
  last: string
  prev: null
  next: null
}

export interface Meta {
  current_page: number
  // from: number
  last_page: number
  // links: Link[]
  // path: string
  // per_page: number
  // to: number
  // total: number
}

export interface Link {
  url: null | string
  label: string
  active: boolean
}
