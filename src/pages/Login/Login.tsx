import * as S from '@/styled/Global.styled'
import { REGISTER_ROUTE } from '@/utils/routes'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {toast} from 'react-toastify'

type FormData = {
  email: string
  password: string
}

const Login = () => {
  const API_BASE_URL = 'http://localhost:5000'
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit = handleSubmit(data => {
    axios
      .post(`${API_BASE_URL}/auth/login`, {
        email: data.email,
        password: data.password
      })
      .then(({data}) => {
        console.log(data.access_token)
        localStorage.setItem('access_token', data.access_token)
        // setData(response.data)
      })
      .catch(error => {
        console.log(error)
        toast.error(error.response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      })
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
