import { useEffect } from 'react'
import SignUpComponent from '../components/auth/sign-up'

const SignUp = () => {
  useEffect(() => {
    document.title = 'Sign Up | Awake Agency'
  }, [])

  return <SignUpComponent />
}

export default SignUp