import { AppShell, Group, Select, Title } from "@mantine/core"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"

import { usePathname } from "@/lib/i18n/navigation"

import UserNotifications from "./user-notifications"

const Header = () => {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const navigate = useNavigate()
  const pathname = usePathname()
  const handleChangeLanguage = (value: string | null) => {
    if (!value) return

    i18n.changeLanguage(value, () => {
      navigate(`/${value}${pathname}`)
    })
  }

  return (
    <AppShell.Header withBorder={false}>
      <Group justify="space-between" h="100%" px="md" wrap="nowrap">
        <Title order={3}>this is a title</Title>
        <Group wrap="nowrap" align="center">
          <Select
            size="sm"
            defaultValue={lang}
            allowDeselect={false}
            onChange={handleChangeLanguage}
            className="max-w-20"
            data={[
              {
                value: "ar",
                label: "AR",
              },
              {
                value: "en",
                label: "EN",
              },
            ]}
          />
          <UserNotifications />
        </Group>
      </Group>
    </AppShell.Header>
  )
}

export default Header
