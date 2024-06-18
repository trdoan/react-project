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

export const useGoogleProfile = (accessToken?: string) => {
  const [profile, setProfile] = useState<GoogleProfile>()

  useEffect(() => {
    if (!accessToken) return

    fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((googleProfile) => {
        setProfile(googleProfile)
      })
  }, [accessToken])

  return profile
}
