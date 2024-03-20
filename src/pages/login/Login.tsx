import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../routes/path'

export default function Login() {
  const navigate = useNavigate()
  return (
    <>
      <h1>Welcome to Login Page!!</h1>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault()
          navigate(PATHS.signup)
        }}
      >
        Signup
      </a>
    </>
  )
}
