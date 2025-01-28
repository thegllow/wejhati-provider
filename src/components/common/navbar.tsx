import { logo } from "@/assets"
import { AppShell, Button, Group, ScrollArea, Space, Stack, Text } from "@mantine/core"
import { useClipboard } from "@mantine/hooks"
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

  const clipboard = useClipboard({ timeout: 700 })

  return (
    <AppShell.Navbar withBorder={false} py="xl" px={"lg"}>
      <Stack gap={"xl"} justify="space-between" flex={1}>
        <Stack gap={"xl"}>
          <AppShell.Section>
            <Stack align="start">
              <img className="h-10" src={logo} alt="logo " />
              <Button
                onClick={() => clipboard.copy("Hello, world!")}
                size="sm"
                variant="light"
                color="white"
                fullWidth
                justify="start">
                {clipboard.copied ? t("general.copied") : `${t("general.id")}:FDAWFGWS`}
              </Button>
              <Space />
            </Stack>
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
                        <Text fw={600} key={item.label}>
                          {t(`nav.items.${item.label as "home"}`)}
                        </Text>
                      </Group>
                    </CollapseNavItem>
                  )
                }
                return (
                  <Button
                    justify="start"
                    variant={pathname === item.link ? "white" : "subtle"}
                    color={pathname === item.link ? "primary" : "#D6D5D4"}
                    component={NavLink}
                    to={item.link}
                    key={item.label}
                    size="sm"
                    leftSection={<item.icon width={24} />}>
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
