import { useTranslation } from "react-i18next"
import Router from "./router"
// core styles are required for all packages
import "@mantine/core/styles.css"

function App() {
  const { i18n } = useTranslation()
  const dir = i18n.dir()
  document.documentElement.dir = dir
  return <Router />
}

export default App
