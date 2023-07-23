import { Link as ReactRouterDomLink } from 'react-router-dom'
import { createGlobalStyle, styled } from 'styled-components'
import {
  BACKGROUND_COLOR,
  SECOUNDARY_COLOR,
  FONT_PRIMARY_COLOR,
  PRIMARY_COLOR,
  ACCENT_COLOR
} from './colors.styled'
import type { TInput } from './types'

export const GlobalStyle = createGlobalStyle`
  html, body, #root{
    background-color: ${BACKGROUND_COLOR};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html,
  body,
  div,
  span,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  ol,
  ul,
  li,
  nav {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  a:hover {
    text-decoration: none;
  }
  
  img {
    border-style: none;
  }
  
  form {
    margin: 0;
    padding: 0;
  }
  
  button {
    display: inline-block;
  }

  button,
  input {
    outline: 0;
    border: 0;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0);
  }

  html {
    scrollbar-width: thin;
  }

  html::-webkit-scrollbar {
    width: 8px;
  }

  html::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0);
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Monseratt", "Helvetica Neue", sans-serif;
  }
`

export const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  padding: 28px 24px;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  background: ${SECOUNDARY_COLOR};
`

export const BaseTitle = styled.h2`
  color: ${FONT_PRIMARY_COLOR};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const BaseSubTitle = styled.p`
  color: ${FONT_PRIMARY_COLOR};
  font-weight: 400;
  margin-bottom: 20px;
`

export const BaseInput = styled.input<TInput>`
  color: ${FONT_PRIMARY_COLOR};
  font-weight: 400;
  background: ${PRIMARY_COLOR};
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? `${marginbottom}px` : 0)};
  margin-top: ${({ margintop }) => (margintop ? `${margintop}px` : 0)};
  margin-left: ${({ marginleft }) => (marginleft ? `${marginleft}px` : 0)};
  margin-right: ${({ marginright }) => (marginright ? `${marginright}px` : 0)};
`

export const BaseAccentButton = styled.button`
  background: ${ACCENT_COLOR};
  color: ${FONT_PRIMARY_COLOR};
  font-size: 16px;
  height: 46px;
  border-radius: 10px;
`

export const BaseLink = styled(ReactRouterDomLink)`
  color: ${ACCENT_COLOR};
  font-size: 16px;
  margin-top: 20px;
  align-self: center;
`

export const AuthFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  padding: 28px 24px;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  background: ${SECOUNDARY_COLOR};
`
