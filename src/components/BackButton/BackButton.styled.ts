import { baseLinkEventStyle } from '@/styled/Global.styled'
import { styled } from 'styled-components'

type TLinkProps = {
  color: string
}

export const LinkWrapper = styled.button<TLinkProps>`
  cursor: pointer;
  background: transparent;
  align-self: flex-start;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  font-size: 16px;

  ${baseLinkEventStyle}
`
