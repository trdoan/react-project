/* eslint-disable jsx-a11y/control-has-associated-label */
import { useGoogleLogin } from '@react-oauth/google'

function GoogleLoginBtn() {
  const login = useGoogleLogin({
    onSuccess: () => {},
    onError: () => {},
  })

  const handleLogin = () => {
    login()
  }

  return (
    <button
      type='button'
      onClick={handleLogin}
    >
      <img
        src='/google.png'
        alt=''
        width={30}
      />
    </button>
  )
}

export default GoogleLoginBtn
