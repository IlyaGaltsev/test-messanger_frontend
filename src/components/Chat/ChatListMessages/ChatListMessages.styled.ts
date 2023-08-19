import { breakpoints } from '@/styled/breakpoints.styled'
import { styled } from 'styled-components'

export const MessagesListWrapper = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding: 20px 0;
  overflow-y: auto;
  height: calc(100vh - 64px - 64px);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0;
    height: calc(100dvh - 73px - 64px - 34px);
  }
`
