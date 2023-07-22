import { Navigate, Route, Routes } from 'react-router-dom'

import * as routes from '@/utils/routes'
import Chat from '@/pages/Chat'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import Register from '@/pages/Register'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '@/store/slice/authSlice'
import { useEffect } from 'react'

const App = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check for access_token in localStorage and update isAuth accordingly
    const access_token = localStorage.getItem('access_token');
    const isAuthenticated = !!access_token; // Set isAuth to true if access_token exists

    dispatch(setAuth(isAuthenticated));
  }, [dispatch]);

  
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
