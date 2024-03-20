import { useCallback, useState } from 'react'

export function useAuth() {
  const [loggedIn, setLogin] = useState<boolean>(false)

  const logout = useCallback(() => {
    setLogin(false)
  }, [])

  const login = useCallback(() => {
    setLogin(true)
  }, [])

  return { loggedIn, login, logout }
}
