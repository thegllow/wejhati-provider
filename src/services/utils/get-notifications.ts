import WejhatiAPI from ".."

export const getNotifications = async ({ page }: { page: string | null }) => {
  const response = await WejhatiAPI.get<any>("/notifications", {
    params: {
      page,
    },
  })
  return response.data.data.items
}
