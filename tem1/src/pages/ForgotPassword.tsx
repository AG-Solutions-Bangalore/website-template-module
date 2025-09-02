import ForgotPasswordComponent from '@/components/auth/forgot-password'
import { useEffect } from 'react'

const ForgotPassword = () => {
  useEffect(() => {
    document.title = 'Forgot Password | Awake Agency'
  }, [])

  return <ForgotPasswordComponent />
}

export default ForgotPassword