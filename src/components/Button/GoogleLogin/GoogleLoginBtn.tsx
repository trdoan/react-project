/* eslint-disable jsx-a11y/control-has-associated-label */
import { useGoogleLogin } from '@react-oauth/google'

type Props = {}

function GoogleLoginBtn(props: Props) {
  const login = useGoogleLogin({
    onSuccess: (response) => {
      console.log(response)
    },
    onError: (error) => {
      console.log(error)
    },
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
