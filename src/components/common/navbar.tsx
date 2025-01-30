import { logo } from "@/assets"
import { useAppStore } from "@/store"
import { cn } from "@/utils/cn"
import { ActionIcon, AppShell, Button, Group, ScrollArea, Stack, UnstyledButton } from "@mantine/core"
import { useClipboard } from "@mantine/hooks"
import { ChevronLeft } from "lucide-react"
import { useTranslation } from "react-i18next"

import { NavItemType } from "@/config/site"

import NavElement from "./nav-element"

type Props = {
  navItems: NavItemType[]
}
const Navbar = ({ navItems }: Props) => {
  const { t } = useTranslation()

  const clipboard = useClipboard({ timeout: 700 })

  // toggle navbar
  const [closed, toggle] = useAppStore((state) => [state.navIsOpened, state.toggleNav])

  return (
    <AppShell.Navbar className="duration-300" withBorder={false} py="xl" px={closed ? "sm" : "lg"}>
      <Stack gap={"xl"} justify="space-between relative" flex={1}>
        <Stack gap={"xl"}>
          <AppShell.Section>
            <Stack align="start">
              <img className="h-10" src={logo} alt="logo " />
              <Button
                hidden={closed}
                onClick={() => clipboard.copy("Hello, world!")}
                size="sm"
                variant="light"
                color="white"
                fullWidth
                justify="start">
                {clipboard.copied ? t("general.copied") : `${t("general.id")}:FDAWFGWS`}
              </Button>
            </Stack>
          </AppShell.Section>

          <UnstyledButton
            className="absolute top-1/9 !right-0 z-[-1] flex size-9 translate-x-[60%] cursor-pointer items-center justify-end rounded-full bg-[#FFF9F0] !p-1 [box-shadow:_14px_8px_14px_0px_#13161C19]"
            onClick={() => toggle()}>
            <ChevronLeft
              color="var(--mantine-color-secondary-7)"
              strokeWidth={3}
              className={cn("size-5 duration-200", closed ? "rotate-180" : "")}
            />
          </UnstyledButton>
          <ScrollArea style={{ height: "calc(100vh - 200px)" }}>
            <Stack gap={"md"} flex={1} align={closed ? "center" : "start"}>
              {navItems.map((item) => (
                <NavElement key={item.label + item.link} {...item} />
              ))}
            </Stack>
          </ScrollArea>
        </Stack>
      </Stack>
    </AppShell.Navbar>
  )
}

export default Navbar
