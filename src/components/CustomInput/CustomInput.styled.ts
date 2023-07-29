import {
  ERROR_COLOR,
  FONT_PRIMARY_COLOR,
  INPUT_ERROR_COLOR,
  PRIMARY_COLOR
} from '@/styled/colors.styled'
import { BaseInput, BaseSubTitle } from '@/styled/Global.styled'
import { styled } from 'styled-components'

type TCustomInputProps = {
  error: number
}
export const CustomInputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const CustomInputElement = styled(BaseInput)<TCustomInputProps>`
  width: 100%;

  background: ${props => (props.error ? INPUT_ERROR_COLOR : PRIMARY_COLOR)};

  &::placeholder {
    color: ${props => (props.error ? PRIMARY_COLOR : 'auto')};
  }
`

export const CustomInputErrorMessage = styled(BaseSubTitle)`
  margin: 8px 0 0;
  font-size: 14px;
  color: ${ERROR_COLOR};
`
export const CustomInputTitle = styled(BaseSubTitle)`
  color: ${FONT_PRIMARY_COLOR};
  margin: 0;
  max-width: 300px;
  width: 100%;
`
