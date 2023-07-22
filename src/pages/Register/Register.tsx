import { setAuth } from '@/store/slice/authSlice'
import * as S from '@/styled/Global.styled'
import { TRegister, TLogin } from '@/types'
import { errorsHandler } from '@/utils/globalMethods/errorsHandler'
import { LOGIN_ROUTE } from '@/utils/routes'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const Register = () => {
  const dispatch = useDispatch()

  const API_BASE_URL = 'http://localhost:5000'
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<TRegister>()

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

  const createAccount = async ({ name, email, password }: TRegister) => {
    await axios
      .post(`${API_BASE_URL}/auth/register`, {
        name: name,
        email: email,
        password: password
      })
      .then(() => {
        login({
          email,
          password
        })
      })
      .catch(error => errorsHandler(error.response.data.message))
  }

  const onSubmit = handleSubmit(data => createAccount(data))

  const styleInput = {
    marginBottom: 16
  }

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Title>Регистрация</S.Title>
      <S.SubTitle>для продолжения заполните поля</S.SubTitle>
      <S.Input
        placeholder="Введите имя"
        {...register('name')}
        {...styleInput}
      />
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
      <S.AccentButton>Создать аккаунт</S.AccentButton>
      <S.Link to={LOGIN_ROUTE}>у меня есть аккаунт</S.Link>
    </S.Wrapper>
  )
}

export default Register
