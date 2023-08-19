import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '@/store/slices/authSlice'
import { useEffect } from 'react'

import { getToken } from '@/utils/globalMethods/tokenMethods'
import * as routes from '@/utils/routes'

import Settings from '@/pages/Settings'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

import MainLayout from '@/layouts/MainLayout'
import Main from '@/pages/Main'

const App = () => {
  const isAuth = useSelector((state: any) => state.auth.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    const accessToken = getToken()

    dispatch(setAuth(Boolean(accessToken)))

    if (isAuth) {
      dispatch({type: 'socket/setSocke'})
      dispatch({ type: 'user/fetchData' })
    }
  }, [dispatch])

  if (!isAuth) {
    return (
      <Routes>
        {/* <Route path={routes.INITIAL_ROUTE} element={<Navigate to={routes.LOGIN_ROUTE} />} /> */}
        <Route
          path={routes.LOGIN_ROUTE}
          element={<Login />}
        />
        <Route
          path={routes.REGISTER_ROUTE}
          element={<Register />}
        />

        {/* 404 page */}
        {/* <Route path={routes.ANY_ROUTE} element={<Navigate to={routes.LOGIN_ROUTE} />} /> */}

        {/* <Route path={routes.ANY_ROUTE} element={
            <BaseTitle>404 ТАКОЙ СТРАНИЦЫ НЕСУЩЕСТВУЕТ{' '}
              <BaseLink to={routes.LOGIN_ROUTE}>перейти на страницу входа</BaseLink>
            </BaseTitle>
          } 
        /> */}
      </Routes>
    )
  }
  return (
    <MainLayout>
      <Routes>
        {/* <Route path={routes.INITIAL_ROUTE} element={<Navigate to={routes.CHAT_ROUTE} />} /> */}
        <Route
          path={routes.CHAT_ROUTE}
          element={<Main />}
        />
        <Route
          path={routes.SETTINGS_ROUTE}
          element={<Settings />}
        />

        {/* 404 page */}
        {/* <Route path={routes.ANY_ROUTE} element={<Navigate to={routes.CHAT_ROUTE} />} /> */}

        {/* <Route path={routes.ANY_ROUTE} element={
            <BaseTitle>404 ТАКОЙ СТРАНИЦЫ НЕСУЩЕСТВУЕТ{' '}
              <BaseLink to={routes.CHAT_ROUTE}>перейти на главную страницу</BaseLink>
            </BaseTitle>
          } 
        /> */}
      </Routes>
    </MainLayout>
  )
}

export default App
