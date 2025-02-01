import React from "react"
import "@mantine/core/styles.css"
import "@mantine/notifications/styles.css"
import "@mantine/dates/styles.css"
import "@mantine/charts/styles.css"
import "@mantine/dropzone/styles.css"

import { DirectionProvider, MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { ModalsProvider } from "@mantine/modals"
import { theme } from "./theme"
import { DatesProvider } from "@mantine/dates"
import { useTranslation } from "react-i18next"

type Props = {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  const { i18n } = useTranslation()
  const locale = i18n.language
  return (
    <MantineProvider theme={theme}>
      <DirectionProvider detectDirection>
        <DatesProvider settings={{ locale, firstDayOfWeek: 0, weekendDays: [0], }}>
          <Notifications />
          <ModalsProvider>
            {children}
          </ModalsProvider>
        </DatesProvider>
      </DirectionProvider>
    </MantineProvider>
  )
}

export default Providers
