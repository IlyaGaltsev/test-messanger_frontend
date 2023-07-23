import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { setAuth } from '@/store/slice/authSlice'
import type { TLogin } from '@/types'

import { errorsHandlerWithValidate } from '@/utils/globalMethods/errorsHandler'
import { setToken } from '@/utils/globalMethods/tokenMethods'
import { optionsLogin } from '@/utils/customInputsOptions'
import { REGISTER_ROUTE } from '@/utils/routes'
import $axios from '@/utils/setupAxios'

import CustomInput from '@/components/CustomInput'

import { styleInput } from '@/styled/customInput.styled'
import * as S from '@/styled/Global.styled'

const Login = () => {
  const dispatch = useDispatch()
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<TLogin>()

  const onSubmit = handleSubmit(data => {
    login(data)
  })

  const login = async ({ email, password }: TLogin) => {
    await $axios
      .post(`/auth/login`, {
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
      <S.BaseTitle>Вход</S.BaseTitle>
      <S.BaseSubTitle>для продолжения заполните поля</S.BaseSubTitle>
      <CustomInput
        placeholder="Введите электронную почту"
        params={{ ...register('email', optionsLogin.email) }}
        error={errors.email?.message}
        style={styleInput}
      />
      <CustomInput
        placeholder="Введите пароль"
        params={{ ...register('password', optionsLogin.password) }}
        error={errors.password?.message}
        type="password"
        style={styleInput}
      />
      <S.BaseAccentButton>Войти</S.BaseAccentButton>
      <S.BaseLink to={REGISTER_ROUTE}>у меня нет аккаунта</S.BaseLink>
    </S.AuthFormWrapper>
  )
}

export default Login
