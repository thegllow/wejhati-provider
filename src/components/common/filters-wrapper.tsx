import { Button, Popover } from "@mantine/core"
import { SlidersHorizontal } from "lucide-react"
import { useTranslation } from "react-i18next"

const FiltersWrapper = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation()

  return (
    <Popover position="bottom" shadow="lg">
      <Popover.Target>
        <Button
          variant="white"
          className="!border !border-gray-300"
          color="primary"
          // size="sm"
          leftSection={<SlidersHorizontal size={20} />}>
          {t("general.filter")}
        </Button>
      </Popover.Target>
      <Popover.Dropdown w={390} p="lg" className="!border-gray-300">
        {children}
      </Popover.Dropdown>
    </Popover>
  )
}

export default FiltersWrapper
