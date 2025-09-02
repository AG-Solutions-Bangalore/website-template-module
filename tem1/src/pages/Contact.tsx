import { useEffect } from 'react'
import ContactForm from '../components/contact-form'
import Faq from '../components/home/faq'

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact | Awake Agency'
  }, [])

  return (
    <>
      <ContactForm />
      <Faq />
    </>
  )
}

export default Contact