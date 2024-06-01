import {
  Home,
  InternalServerError,
  Login,
  NotFound,
  Profile,
  Register,
} from '@/pages'
import { useRoutes } from 'react-router-dom'

export function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/404',
      element: <NotFound />,
    },
    {
      path: '/500',
      element: <InternalServerError />,
    },
  ])

  return <main>{routes}</main>
}
