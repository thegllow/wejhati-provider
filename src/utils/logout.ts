import { LOCALSTORAGE_SESSION_KEY, USER_URL } from "@/config"

export const logout = async () => {
  localStorage.removeItem(LOCALSTORAGE_SESSION_KEY)
  window.location.href = USER_URL + "/auth/login"
}
