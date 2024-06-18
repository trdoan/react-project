import { useGoogleLogin } from '@react-oauth/google'
import { withGoogleProvider } from './withGoogleProvider'

function GoogleLoginBtn() {
  const login = useGoogleLogin({
    onSuccess: (response) => {
      // TODO: replace your behavior
      console.log({ response })
    },
    onError: () => {},
  })

  const handleLogin = () => {
    login()
  }

  return (
    <button
      type='button'
      onClick={handleLogin}
      className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex gap-2 items-center'
    >
      <img
        src='/google.png'
        alt='logo-google'
        width={30}
      />
      <span>Login with Google </span>
    </button>
  )
}

export default withGoogleProvider(GoogleLoginBtn)
