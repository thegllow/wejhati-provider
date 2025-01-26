import React from "react"
import { useTranslation } from "react-i18next"
import { Navigate, Outlet, useParams } from "react-router"

export default function LanguageWrapper() {
  const { locale } = useParams() // Get the locale from the route
  const { i18n } = useTranslation()

  React.useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale) // Update the language dynamically
    }
  }, [locale, i18n])

  // Redirect to a default locale if the locale is not supported

  if (!["en", "ar"].includes(locale || "")) {
    return <Navigate to="/en/404" replace />
  }

  return <Outlet />
}
