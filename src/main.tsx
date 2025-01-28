import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router"
// i18next
import "./lib/i18n/index.ts"
import Providers from "./lib/mantine/providers.tsx"
import MyQueryClientProvider from "./lib/react-query/index.tsx"
import { NuqsAdapter } from "nuqs/adapters/react-router/v7"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <MyQueryClientProvider>
          <NuqsAdapter>
            <App />
          </NuqsAdapter>
        </MyQueryClientProvider>
      </Providers>
    </BrowserRouter>
  </StrictMode>
)
