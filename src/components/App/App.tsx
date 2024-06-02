import {
  Home,
  InternalServerError,
  Login,
  NotFound,
  Profile,
  Register,
} from '@/pages'
import { useNavigate, useRoutes } from 'react-router-dom'
import { ErrorBoundary } from '../ErrorBoundary'

export function App() {
  const navigate = useNavigate()
  const onError = () => {
    navigate('/500')
  }

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

  return <ErrorBoundary onError={onError}>{routes}</ErrorBoundary>
}
