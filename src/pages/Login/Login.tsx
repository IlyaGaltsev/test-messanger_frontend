import * as S from '@/styled/Global.styled'
import { REGISTER_ROUTE } from '@/utils/routes'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setAuth } from '@/store/slice/authSlice'
import type { TLogin } from '@/types'
import { errorsHandler } from '@/utils/globalMethods/errorsHandler'

const Login = () => {
  const dispatch = useDispatch()

  const API_BASE_URL = 'http://localhost:5000'
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<TLogin>()

  const login = async ({ email, password }: TLogin) => {
    await axios
      .post(`${API_BASE_URL}/auth/login`, {
        email: email,
        password: password
      })
      .then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        dispatch(setAuth(true))
      })
      .catch(error => errorsHandler(error.response.data.message))
  }

  const onSubmit = handleSubmit(data => {
    login(data)
  })

  const styleInput = {
    marginBottom: 16
  }

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Title>Вход</S.Title>
      <S.SubTitle>для продолжения заполните поля</S.SubTitle>
      <S.Input
        placeholder="Введите email"
        {...register('email')}
        {...styleInput}
      />
      <S.Input
        placeholder="Введите пароль"
        {...register('password')}
        {...styleInput}
      />
      <S.AccentButton>Войти</S.AccentButton>
      <S.Link to={REGISTER_ROUTE}>у меня нет аккаунта</S.Link>
    </S.Wrapper>
  )
}

export default Login
