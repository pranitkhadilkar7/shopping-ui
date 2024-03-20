import { LazyExoticComponent, lazy } from 'react'
import { PATHS } from './path'

const Login = lazy(() => import('../pages/login/Login'))
const Signup = lazy(() => import('../pages/signup/Signup'))

type PageRoute = {
  path: string
  component: LazyExoticComponent<() => JSX.Element>
  exact: boolean
}

export const PUBLIC_ROUTES: PageRoute[] = [
  { path: PATHS.login, component: Login, exact: true },
  { path: PATHS.signup, component: Signup, exact: true },
]
