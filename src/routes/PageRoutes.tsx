import { Navigate, Route, Routes } from 'react-router-dom'
import { PATHS } from './path'
import { PUBLIC_ROUTES } from './route-config'
import { Suspense } from 'react'

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PATHS.login} />} />
      {PUBLIC_ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.exact ? route.path : `${route.path}/*`}
          element={
            <Suspense fallback="Loading">
              <route.component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
