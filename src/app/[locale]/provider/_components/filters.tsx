import { TRIP_TYPE } from "@/config"
import { Button, Divider, Group, Radio, Select, SimpleGrid, Stack } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form"
import { parseAsJson, useQueryState } from "nuqs"
import { useTranslation } from "react-i18next"
import { z } from "zod"

const schema = z
  .object({
    type: z.string(),
    departure: z.coerce.string(),
    arrival: z.coerce.string(),
  })
  .partial()

const dummyCities = [
  {
    value: "1",
    label: "city 1",
  },
  {
    value: "2",
    label: "city 2",
  },
  {
    value: "3",
    label: "city 3",
  },
]
const Filters = () => {
  const { t } = useTranslation()
  const [filters, setFilters] = useQueryState("tableFilters", parseAsJson(schema.parse))

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      type: "all",
      departure: "",
      arrival: "",
      ...filters,
    },
    validate: zodResolver(schema),
  })
  const onSubmit = form.onSubmit((data) => {
    setFilters(data, { shallow: false })
  })
  const clearFilters = () => {
    form.reset()
    setFilters(null)
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <Radio.Group label={t("general.trip-type")} key={form.key("type")} {...form.getInputProps("type")}>
          <Group mt="xs">
            {(["all", ...TRIP_TYPE] as const).map((type) => {
              return (
                <Radio variant="outline" key={type} value={type} label={t(`general.trip-types.${type}`)} />
              )
            })}
          </Group>
        </Radio.Group>
        <Divider />
        <Select
          data={dummyCities}
          label={t("general.departure")}
          comboboxProps={{ withinPortal: false }}
          key={form.key("departure")}
          {...form.getInputProps("departure")}
        />
        <Select
          data={dummyCities}
          label={t("general.arrival")}
          comboboxProps={{ withinPortal: false }}
          key={form.key("arrival")}
          {...form.getInputProps("arrival")}
        />
        <SimpleGrid cols={2}>
          <Button fullWidth type="button" variant="outline" color="gray" onClick={clearFilters}>
            {t("general.clear-filter")}
          </Button>
          <Button fullWidth type="submit">
            {t("general.Apply")}
          </Button>
        </SimpleGrid>
      </Stack>
    </form>
  )
}

export default Filters
