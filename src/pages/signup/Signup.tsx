import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../routes/path'

export default function Signup() {
  const navigate = useNavigate()
  return (
    <>
      <h1>Welcome to Signup page</h1>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault()
          navigate(PATHS.login)
        }}
      >
        Login
      </a>
    </>
  )
}
