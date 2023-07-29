import type { CSSProperties } from 'react'
import * as S from './CustomInput.styled'

export type ICustomInput = {
  placeholder: string
  params: any
  error?: string
  type?: string
  style?: CSSProperties
  title?: string
}

const CustomInput = ({ placeholder, params, error, type, style, title }: ICustomInput) => {
  return (
    <S.CustomInputWrapper style={style}>
      {title ? <S.CustomInputTitle>{title}</S.CustomInputTitle> : null}
      <S.CustomInputElement
        {...params}
        placeholder={placeholder}
        type={type ? type : 'text'}
        error={error ? 1 : 0}
      />
      {error ? <S.CustomInputErrorMessage>{error}</S.CustomInputErrorMessage> : null}
    </S.CustomInputWrapper>
  )
}

export default CustomInput
