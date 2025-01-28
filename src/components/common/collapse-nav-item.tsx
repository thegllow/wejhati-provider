import { NavLink, usePathname } from "@/lib/i18n/navigation"
import { cn } from "@/utils/cn"
import { Button, Collapse, Group, Stack, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ChevronUp } from "lucide-react"
import React from "react"
import { useTranslation } from "react-i18next"

type Props = {
  children: React.ReactNode
  links: { label: string; link: string }[]
}

const CollapseNavItem = ({ links, children }: Props) => {
  const { t } = useTranslation()
  const pathname = usePathname()

  const pathnames = links.map((e) => e.link)
  const [opened, { toggle }] = useDisclosure(false)
  return (
    <>
      <Button
        onClick={toggle}
        justify="space-between"
        rightSection={
          <ChevronUp
            size={20}
            className={cn("duration-300", opened ? "" : "rotate-180")}
          />
        }
        variant={pathnames.includes(pathname) ? "white" : "subtle"}
        color={pathnames.includes(pathname) ? 'primary' : "#D6D5D4"}
      >
        {children}
      </Button>
      <Collapse in={opened}>
        <Stack gap={"xs"}>
          {links.map((item) => {
            return (
              <Button
                fullWidth
                justify="start"

                variant={pathname === item.link ? "white" : "subtle"}
                color={pathname === item.link ? 'primary' : "#D6D5D4"}
                component={NavLink}
                to={item.link}
                key={item.label}>
                <Group
                  gap={"xs"}
                  key={item.label}
                  wrap="nowrap"
                  justify="start">
                  <Text fz={"sm"} fw={600} key={item.label}>
                    {t(`nav.items.${item.label as "home"}`)}
                  </Text>
                </Group>
              </Button>
            )
          })}
        </Stack>
      </Collapse>
    </>
  )
}

export default CollapseNavItem
