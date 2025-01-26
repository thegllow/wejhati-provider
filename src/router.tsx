import { Navigate, Route, Routes } from "react-router"
import LanguageWrapper from "./lib/i18n/language-wrapper"

const Router = () => {
  return (
    <Routes>
      <Route path=":locale" element={<LanguageWrapper />}>
        <Route path="auth" element={<div />} />

        {/* 404 */}
        <Route
          path="*"
          element={<div className="text-amber-400 text-9xl">404</div>}
        />
      </Route>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/ar" replace />} />
    </Routes>
  )
}

export default Router
