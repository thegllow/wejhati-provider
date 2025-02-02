export function filterSearchParams(
  params: Readonly<URLSearchParams>,

  keysToOmit: string[],
): URLSearchParams {
  const filteredParams = new URLSearchParams()
  keysToOmit?.forEach((key) => {
    const value = params.get(key)
    if (value !== null) {
      filteredParams.delete(key)
    }
  })

  return filteredParams
}
