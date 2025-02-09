import { Navigate as ReactRouterNavigate, Route, Routes } from "react-router"

import ProviderDashboardLayout from "./app/[locale]/provider/layout"
import Home from "./app/[locale]/provider/page"
import LanguageWrapper from "./lib/i18n/language-wrapper"
import { Navigate  } from "./lib/i18n/navigation"


const Router = () => {
  return (
    <Routes>
      <Route path=":locale" element={<LanguageWrapper />}>
      <Route index element={<Navigate to={"/provider"} />} />
        {/* provider  */}
        <Route path="provider" element={<ProviderDashboardLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<div className="text-9xl text-amber-400">404</div>} />
      </Route>
      {/* Default redirect */}
      <Route path="/" element={<ReactRouterNavigate to="/ar" replace />} />
    </Routes>
  )
}

export default Router
