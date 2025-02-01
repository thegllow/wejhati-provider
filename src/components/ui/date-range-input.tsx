import { DatePickerInput, DatePickerInputProps, DatesRangeValue, DateValue } from "@mantine/dates"
import dayjs from "dayjs"
import { Calendar } from "lucide-react"
import { useQueryState } from "nuqs"
import { useTranslation } from "react-i18next"
type Props = {
  queryKey?: string
} & Omit<DatePickerInputProps<'range'>, "onChange" | "value" | "type">

const DateRangeInput = ({ queryKey, ...props }: Props) => {
  // Use Nuqs to sync state with URL
  const [range, setRange] = useQueryState<DatesRangeValue>(queryKey || "date-ange", {
    defaultValue: [null, null], // Default empty range  
    parse: (value) => {
      if (!value) return [null, null] as const
      const [start, end] = value.split("_")
      return [start ? dayjs(start).toDate() : null, end ? dayjs(end).toDate() : null] as const
    },
    serialize: (value) => {
      if (!value || !value[0] || !value[1]) return ""
      return `${dayjs(value[0]).format("YYYY-MM-DD")}_${dayjs(value[1]).format("YYYY-MM-DD")}`
    },

  })
  const { t } = useTranslation()
  return (
    <DatePickerInput
      className="grow shrink-0"
      type="range"
      maw={260}
      w={'100%'}
      size="md"
      valueFormat="MMM D, YYYY"
      placeholder={t("general.date-range-input-placeholder")}
      rightSection={<Calendar className="size-5" />}
      value={range}
      onChange={setRange}
      {...props}
    />
  )
}

export default DateRangeInput
