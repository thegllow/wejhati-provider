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

type Props = {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <MantineProvider theme={theme}>
      <DirectionProvider detectDirection>
        <Notifications />
        <ModalsProvider>{children}</ModalsProvider>
      </DirectionProvider>
    </MantineProvider>
  )
}

export default Providers
