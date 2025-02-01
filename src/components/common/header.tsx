import { AppShell, Button, Group, Input, Select, Title } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { Plus } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"

import { usePathname } from "@/lib/i18n/navigation"

import UserNotifications from "./user-notifications"
import { useOptimisticSearchParams } from "nuqs/adapters/react-router/v7"

const Header = () => {
  const { i18n, t } = useTranslation()
  const lang = i18n.language
  const navigate = useNavigate()
  const pathname = usePathname()

  // Note: this is read-only, but reactive to all URL changes
  const searchParams = useOptimisticSearchParams()
  console.log("🚀 ~ Header ~ searchParams:", searchParams)
  const handleChangeLanguage = (value: string | null) => {
    if (!value) return

    i18n.changeLanguage(value, () => {
      navigate(`/${value}${pathname}?${searchParams.toString()}`)
    })
  }

  return (
    <AppShell.Header withBorder={false} p="lg">
      <Group justify="space-between" h="100%" px="md" wrap="nowrap">
        <Title order={3}>this is a title</Title>
        <Group wrap="nowrap" align="center">
          <Button variant="outline" leftSection={<Plus />}>
            {t('header.add-reservation')}
          </Button>
          <Input
            placeholder={t("general.search")}
            classNames={{ input: "placeholder:!text-[var(--mantine-color-primary-7)]" }}
            leftSection={<IconSearch color="var(--mantine-color-primary-7)" />}
          />
          <Select
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
