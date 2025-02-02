const objectToSearchParams = (obj: Record<string, any>) => {
  const params = new URLSearchParams()
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "object") {
      params.set(key, encodeURIComponent(JSON.stringify(value)))
    } else {
      params.set(key, String(value))
    }
  })
  return params
}
