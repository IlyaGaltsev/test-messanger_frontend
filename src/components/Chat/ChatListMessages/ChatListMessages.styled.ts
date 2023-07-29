import { breakpoints } from '@/styled/breakpoints.styled'
import { styled } from 'styled-components'

export const MessagesListWrapper = styled.div`
  height: calc(100vh - 270px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  @media (max-width: ${breakpoints.tablet}) {
    height: calc(100vh - 440px); // позже пофиксь, это чтобы контент не уходил за toolbar браузера
  }
`
