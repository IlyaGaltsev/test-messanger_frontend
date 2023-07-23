import { PRIMARY_COLOR, FONT_PRIMARY_COLOR, ERROR_COLOR } from '@/styled/colors.styled'
import { FONT_SECOUNDARY_COLOR, ACCENT_COLOR } from '@/styled/colors.styled'
import { styled } from 'styled-components'

export type TMessageProps = {
  iscurrentuser: number
}

export const MessageWrapper = styled.div<TMessageProps>`
  align-self: ${props => (props.iscurrentuser ? 'flex-end' : 'flex-start')};
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;

  align-items: ${props => (props.iscurrentuser ? 'flex-end' : 'flex-start')};
`

export const MessageBody = styled.div<TMessageProps>`
  cursor: pointer;
  max-width: 60%;
  position: relative;
  border-radius: 10px;
  background: ${props => (props.iscurrentuser ? ACCENT_COLOR : PRIMARY_COLOR)};
  margin-left: ${props => (props.iscurrentuser ? '0' : '12px')};
  margin-right: ${props => (props.iscurrentuser ? '12px' : '0')};
  padding: 12px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${props => (props.iscurrentuser ? 'auto' : '-10px')};
    right: ${props => (props.iscurrentuser ? '-10px' : 'auto')};
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid ${props => (props.iscurrentuser ? ACCENT_COLOR : PRIMARY_COLOR)};
  }
`

export const MessageTitle = styled.p<TMessageProps>`
  color: ${ACCENT_COLOR};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 4px;
  display: ${props => (props.iscurrentuser ? 'none' : 'block')};
`

export const MessageText = styled.p<TMessageProps>`
  color: ${FONT_PRIMARY_COLOR};
  word-wrap: break-word;
`

export const UnderMessageTitle = styled.p`
  margin-top: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: ${FONT_SECOUNDARY_COLOR};
  margin-left: 6px;
`

export const UnderMessageTitleDelete = styled(UnderMessageTitle)`
  color: ${ERROR_COLOR};
  cursor: pointer;
`
