import * as S from '@/styled/Global.styled'
import { LOGIN_ROUTE } from '@/utils/routes'

const Register = () => {
  const styleInput = {
    marginBottom: 16
  }
  return (
    <S.Wrapper>
      <S.Title>Регистрация</S.Title>
      <S.SubTitle>для продолжения заполните поля</S.SubTitle>
      <S.Input
        placeholder="Введите имя"
        {...styleInput}
      />
      <S.Input
        placeholder="Введите email"
        {...styleInput}
      />
      <S.Input
        placeholder="Введите пароль"
        {...styleInput}
      />
      <S.AccentButton>Создать аккаунт</S.AccentButton>
      <S.Link to={LOGIN_ROUTE}>у меня есть аккаунт</S.Link>
    </S.Wrapper>
  )
}

export default Register
