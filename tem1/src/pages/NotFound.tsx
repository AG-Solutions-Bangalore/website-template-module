import { useEffect } from 'react'
import NotFoundComponent from '../components/not-found'

const NotFound = () => {
  useEffect(() => {
    document.title = '404 Page | Awake Agency'
  }, [])

  return <NotFoundComponent />
}

export default NotFound