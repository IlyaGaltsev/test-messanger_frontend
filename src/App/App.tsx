import { Navigate, Route, Routes } from 'react-router-dom'

import * as routes from '@/utils/routes'
import Chat from '@/pages/Chat'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import Register from '@/pages/Register'

const App = () => {
  const isAuth = false

  if (!isAuth) {
    return (
      <Routes>
        <Route path={routes.INITIAL_ROUTE} element={<Navigate to={routes.LOGIN_ROUTE}/>}/>
        <Route path={routes.LOGIN_ROUTE} element={<Login />} />
        <Route path={routes.REGISTER_ROUTE} element={<Register />} />
        <Route path={routes.ANY_ROUTE} element={<Navigate to={routes.LOGIN_ROUTE}/>} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path={routes.INITIAL_ROUTE} element={<Navigate to={routes.CHAT_ROUTE}/>}/>
      <Route path={routes.CHAT_ROUTE} element={<Chat />} />
      <Route path={routes.PROFILE_ROUTE} element={<Profile />} />
      <Route path={routes.ANY_ROUTE} element={<Navigate to={routes.CHAT_ROUTE}/>} />
    </Routes>
  )
}

export default App
