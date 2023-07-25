import { setAuth } from '@/store/slice/authSlice'
import { TRegister, TLogin } from '@/types'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { errorsHandler, errorsHandlerWithValidate } from '@/utils/globalMethods/eventHandlers'
import { optionsRegister } from '@/utils/customInputsOptions'
import { setToken } from '@/utils/globalMethods/tokenMethods'
import { LOGIN_ROUTE } from '@/utils/routes'
import $axios from '@/utils/setupAxios'

import CustomInput from '@/components/CustomInput'

import { styleInput } from '@/styled/customInput.styled'
import * as S from '@/styled/Global.styled'

const Register = () => {
  const dispatch = useDispatch()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<TRegister>()

  const onSubmit = handleSubmit(data => createAccount(data))

  const createAccount = async ({ name, email, password }: TRegister) => {
    await $axios.post(`/auth/register`, {
        name,
        email,
        password
      })
      .then(() => login({
          email,
          password
        })
      )
      .catch(error => errorsHandler(error.response.data.message))
  }

  const login = async ({ email, password }: TLogin) => {
    await $axios.post(`/auth/login`, {
        email,
        password
      })
      .then(({ data }) => {
        setToken(data.access_token)
        dispatch(setAuth(true))
      })
      .catch(error => errorsHandlerWithValidate(error, setError))
  }

  return (
    <S.AuthFormWrapper onSubmit={onSubmit}>
      <S.BaseTitle>Регистрация</S.BaseTitle>
      <S.BaseSubTitle>для продолжения заполните поля</S.BaseSubTitle>

      <CustomInput
        placeholder="Введите имя"
        params={{ ...register('name', optionsRegister.name) }}
        error={errors.password?.message}
        style={styleInput}
      />
      <CustomInput
        placeholder="Введите электронную почту"
        params={{ ...register('email', optionsRegister.email) }}
        error={errors.email?.message}
        style={styleInput}
      />
      <CustomInput
        placeholder="Введите пароль"
        params={{ ...register('password', optionsRegister.password) }}
        error={errors.password?.message}
        type="password"
        style={styleInput}
      />

      <S.BaseAccentButton>Создать аккаунт</S.BaseAccentButton>
      <S.BaseLink to={LOGIN_ROUTE}>у меня есть аккаунт</S.BaseLink>
    </S.AuthFormWrapper>
  )
}

export default Register
