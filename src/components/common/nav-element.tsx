import { useAppStore } from "@/store"
import { ActionIcon, Button, Group, Text, Tooltip, useDirection } from "@mantine/core"
import { useTranslation } from "react-i18next"

import { NavItemType } from "@/config/site"
import { NavLink, usePathname } from "@/lib/i18n/navigation"

import CollapseNavItem from "./collapse-nav-item"

type Props = NavItemType

const NavElement = (item: Props) => {
  const pathname = usePathname()
  // toggle navbar
  const closed = useAppStore((state) => state.navIsOpened)
  const { dir } = useDirection()
  const { t } = useTranslation()
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
  return closed ? (
    <Tooltip
      label={t(`nav.items.${item.label as "home"}`)}
      position={dir === "rtl" ? "left" : "right"}
      key={item.label}>
      <ActionIcon
        variant={pathname === item.link ? "white" : "subtle"}
        color={pathname === item.link ? "primary" : "#D6D5D4"}
        component={NavLink}
        to={item.link}
        size={"xl"}>
        <item.icon width={24} />
      </ActionIcon>
    </Tooltip>
  ) : (
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
}

export default NavElement
