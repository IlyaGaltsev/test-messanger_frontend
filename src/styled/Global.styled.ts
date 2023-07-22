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
  html, body {
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

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Monseratt", "Helvetica Neue", sans-serif;

  }
`

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  padding: 28px 24px;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  background: ${SECOUNDARY_COLOR};
`

export const Title = styled.h2`
  color: ${FONT_PRIMARY_COLOR};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const SubTitle = styled.p`
  color: ${FONT_PRIMARY_COLOR};
  font-weight: 400;
  margin-bottom: 20px;
`

export const Input = styled.input<TInput>`
  color: ${FONT_PRIMARY_COLOR};
  font-weight: 400;
  background: ${PRIMARY_COLOR};
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : 0)};
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : 0)};
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : 0)};
  margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : 0)};
`

export const AccentButton = styled.button`
  background: ${ACCENT_COLOR};
  color: ${FONT_PRIMARY_COLOR};
  font-size: 16px;
  height: 46px;
  border-radius: 10px;
`

export const Link = styled(ReactRouterDomLink)`
  color: ${ACCENT_COLOR};
  font-size: 16px;
  margin-top: 20px;
  align-self: center;
`
