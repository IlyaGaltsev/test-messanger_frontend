import { FONT_SECOUNDARY_COLOR } from '@/styled/colors.styled'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${FONT_SECOUNDARY_COLOR};
`

export const WrapperTools = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
