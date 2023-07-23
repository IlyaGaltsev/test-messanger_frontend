import { FONT_SECOUNDARY_COLOR } from '@/styled/colors.styled'
import { BaseAccentButton, BaseInput } from '@/styled/Global.styled'
import { styled } from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid ${FONT_SECOUNDARY_COLOR};
`

export const Input = styled(BaseInput)`
  width: 100%;
  margin-right: 20px;
`

export const AccentButton = styled(BaseAccentButton)`
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`
