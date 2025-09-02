import { useEffect } from 'react'
import SignInComponent from '../components/auth/sign-in'

const SignIn = () => {
  useEffect(() => {
    document.title = 'Sign In | Awake Agency'
  }, [])

  return <SignInComponent />
}

export default SignIn