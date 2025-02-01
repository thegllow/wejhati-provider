import { Link } from "@/lib/i18n/navigation"
import { logout } from "@/utils/logout"
import { ActionIcon, Menu } from "@mantine/core"
import { LogOut, Pen, UserCircle } from "lucide-react"
import { useTranslation } from "react-i18next"

const UserButton = () => {
  const { t } = useTranslation()

  return (
    <>
      <Menu shadow="lg" position="bottom" withArrow>
        <Menu.Target>
          <ActionIcon variant="white">
            <UserCircle size={24} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown w={180} >
          <Menu.Item component={Link} to={'/provider/edit'} leftSection={<Pen size={18} color="var(--mantine-color-primary-7)" />}>
            {t("header.user-button.edit")}
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item onClick={logout} leftSection={<LogOut size={18} color="var(--mantine-color-primary-7)" />}>
            {t("header.user-button.logout")}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

export default UserButton
