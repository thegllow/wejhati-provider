import { logo } from "@/assets"
import { AppShell, Button, Group, ScrollArea, Stack, Text } from "@mantine/core"
import { useTranslation } from "react-i18next"

import { NavItemType } from "@/config/site"
import { NavLink, usePathname } from "@/lib/i18n/navigation"

import CollapseNavItem from "./collapse-nav-item"

type Props = {
  navItems: NavItemType[]
}
const Navbar = ({ navItems }: Props) => {
  const { t } = useTranslation()
  const pathname = usePathname()

  return (
    <AppShell.Navbar withBorder={false} py="xl" px={'lg'}>
      <Stack gap={"xl"} justify="space-between" flex={1}>
        <Stack gap={"xl"}>
          <AppShell.Section >
            <img className="h-14" src={logo} alt="logo " />
          </AppShell.Section>
          <ScrollArea style={{ height: "calc(100vh - 200px)" }}>
            <Stack gap={"md"} flex={1}>
              {navItems.map((item) => {
                // if(item.label === 'permissions' && User.)
                if (Array.isArray(item.link)) {
                  return (
                    <CollapseNavItem key={item.label + item.link} links={item.link}>
                      <Group gap={"xs"} key={item.label} wrap="nowrap" justify="start">
                        <item.icon width={24} />
                        <Text fw={600} key={item.label}>{t(`nav.items.${item.label}`)}</Text>
                      </Group>
                    </CollapseNavItem>
                  )
                }
                return (
                  <Button
                    justify="start"
                    variant={pathname === item.link ? "white" : "subtle"}
                    color={pathname === item.link ? 'primary' : "#D6D5D4"}
                    component={NavLink}
                    to={item.link}
                    key={item.label}
                    leftSection={<item.icon width={24} />}
                  >
                    {t(`nav.items.${item.label as "home"}`)}
                  </Button>
                )
              })}
            </Stack>
          </ScrollArea>
        </Stack>
      </Stack>
    </AppShell.Navbar>
  )
}

export default Navbar
