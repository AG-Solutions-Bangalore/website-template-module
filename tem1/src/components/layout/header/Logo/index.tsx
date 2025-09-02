import { Link } from 'react-router-dom'

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <img
        src="/images/logo/logo.svg"
        alt="logo"
        width={117}
        height={34}
        className='dark:hidden w-auto h-auto'
      />
      <img
        src="/images/logo/DarkModeLogo.svg"
        alt="logo"
        width={160}
        height={50}
        className='dark:block hidden w-auto h-auto'
      />
    </Link>
  )
}

export default Logo