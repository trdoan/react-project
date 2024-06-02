/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  googleLogout,
  TokenResponse,
  useGoogleLogin,
} from '@react-oauth/google'
import { useEffect, useState } from 'react'

type GoogleProfile = {
  email: string
  family_name: string
  given_name: string
  id: string
  locale: string
  name: string
  picture: string
  verified_email: boolean
}

function GoogleLoginBtn() {
  const [user, setUser] = useState<TokenResponse | undefined>()
  const [profile, setProfile] = useState<GoogleProfile | undefined>()

  const login = useGoogleLogin({
    onSuccess: (response) => {
      setUser(response)
    },
    onError: () => {},
  })

  const handleLogin = () => {
    login()
  }

  useEffect(() => {
    if (user) {
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        },
      )
        .then((response) => response.json())
        .then((data) => {
          setProfile(data)
        })
    }
  }, [user])

  const logOut = () => {
    googleLogout()
    setProfile(undefined)
  }

  if (profile) {
    return (
      <div className='bg-white rounded-lg shadow-md p-4'>
        <img
          src={profile.picture}
          alt={profile.name}
          className='w-12 h-12 rounded-full mb-2'
        />
        <p className='text-lg font-semibold'>{profile.name}</p>
        <p className='text-gray-500'>{profile.email}</p>

        <button
          type='button'
          onClick={logOut}
          className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4'
        >
          Logout
        </button>
      </div>
    )
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

export default GoogleLoginBtn
