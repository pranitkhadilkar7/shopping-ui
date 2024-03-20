import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { PATHS } from './path'

type Props = {
  children: JSX.Element
}

export function RequireAuth({ children }: Props) {
  const { loggedIn } = useAuth()
  if (loggedIn) return children
  return <Navigate to={PATHS.login} />
}
