import { useLayoutEffect } from "react"
import { SuccessResponse } from "@/@types"
import { User } from "@/@types/user"
import { LOCALSTORAGE_SESSION_KEY } from "@/config"
import WejhatiAPI from "@/services"
import { useAppStore } from "@/store"
import { isAuthenticated } from "@/utils/is-authenticated"
import { AppShell, useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { useLocalStorage, useToggle } from "@mantine/hooks"
import { useQuery } from "@tanstack/react-query"
import { Outlet } from "react-router"

import { providerNavbarItems } from "@/config/site"
import { useNavigate, usePathname } from "@/lib/i18n/navigation"
import Header from "@/components/common/header"
import Navbar from "@/components/common/navbar"

export default function ProviderDashboardLayout() {
  // const pathName = usePathname()
  // const navigate = useNavigate()
  // useLayoutEffect(() => {
  //   if (!isAuthenticated()) navigate("/auth/login")
  // }, [pathName])

  const [user, updateUser] = useLocalStorage<User>({
    key: LOCALSTORAGE_SESSION_KEY,
    defaultValue: undefined,
  })

  useQuery({
    enabled: !!user,
    queryFn: async () => {
      const response = await WejhatiAPI.get<SuccessResponse<User["item"]>>(`/admins/${user.item.id}`)
      updateUser((pre) => {
        return {
          token: pre.token,
          item: response.data.data.item,
        }
      })
    },
    queryKey: ["update-admin-query"],
    staleTime: Infinity,
  })

  // toggle sidebar
  const value = useAppStore((state) => state.navIsOpened)

  return (
    <AppShell
      className="bg-[#f9f8f6]"
      styles={{
        navbar: {
          background: "#5F6F52",
        },
      }}
      layout={"alt"}
      header={{ height: 58 }}
      navbar={{
        width: value ? 90 : 270,
        breakpoint: 0,
      }}
      padding="xl">
      <Header />
      <Navbar navItems={providerNavbarItems} />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
