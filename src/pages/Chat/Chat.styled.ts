import { breakpoints } from '@/styled/breakpoints.styled'
import { BaseWrapper } from '@/styled/Global.styled'
import { styled } from 'styled-components'

export const CardChatWrapper = styled(BaseWrapper)`
  max-width: 600px;
  margin: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0;
  }
`
