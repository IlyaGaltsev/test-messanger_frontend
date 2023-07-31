import { breakpoints } from '@/styled/breakpoints.styled'
import { styled } from 'styled-components'

export const MessagesListWrapper = styled.div`
  height: calc(100dvh - 270px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding: 20px 0;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0;
    height: calc(100dvh - 73px - 64px - 34px);
  }
`
