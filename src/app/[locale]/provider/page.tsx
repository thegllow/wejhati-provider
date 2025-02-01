// import usePermissions from "@/hooks/use-permissions"

import { BarChart } from "@mantine/charts"
import { Divider, Group, Paper, Stack, Text } from "@mantine/core"
import { useTranslation } from "react-i18next"

import DateRangeInput from "@/components/ui/date-range-input"
import TableWrapper from "@/components/table/table-wrapper"

import BookingTable from "./_components/bookings-table"

const dummyData = [
  { x: "2023-04-01", y: 120 },
  { x: "2023-04-03", y: 185 },
  { x: "2023-04-04", y: 210 },
  { x: "2023-04-05", y: 185 },
  { x: "2023-04-06", y: 294 },
  { x: "2023-04-07", y: 156 },
  { x: "2023-04-08", y: 156 },
  { x: "2023-04-09", y: 245 },
  { x: "2023-04-10", y: 294 },
  { x: "2023-04-11", y: 156 },
  { x: "2023-04-12", y: 178 },
  { x: "2023-05-07", y: 156 },
  { x: "2023-05-08", y: 156 },
  { x: "2023-05-09", y: 245 },
  { x: "2023-05-10", y: 294 },
  { x: "2023-05-11", y: 156 },
  { x: "2023-05-12", y: 178 },
]

type Props = {}

const Home = (props: Props) => {
  const { t } = useTranslation()

  return (
    <Stack>
      <Paper component={Stack} gap={"lg"} p="lg" className="grow" radius="md">
        <Group justify="space-between" py="xs">
          <Text size="lg" fw={600}>
            {t("home.passengers-graph.title")}
          </Text>
          <Group grow justify="end" className="grow">
            <DateRangeInput />
          </Group>
        </Group>

        <Divider color="gray.1" />
        <BarChart
          withLegend
          h={290}
          data={dummyData}
          dataKey={"x"}
          series={[{ name: "y", label: t("home.passengers-graph.title"), color: "primary" }]}
          barProps={{ radius: [10, 10, 0, 0] }}
          tickLine="y"
          yAxisLabel={t("home.passengers-graph.y-axis-label")}
        />
        <Group justify="center" className="capitalize">
          <Text fw={500}>{t("general.date")}</Text>
        </Group>
      </Paper>
      {/*  */}
      <BookingTable />
    </Stack>
  )
}

export default Home
