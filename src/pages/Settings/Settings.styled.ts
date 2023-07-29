import { BaseAccentButton, BaseTitle } from '@/styled/Global.styled'
import { styled } from 'styled-components'
import { CardChatWrapper } from '../Chat/Chat.styled'

export const SettingsWrapper = styled(CardChatWrapper)`
  flex-direction: column;
  align-items: center;
`

export const Title = styled(BaseTitle)`
  margin-bottom: 24px;
`

export const UserOptions = styled.form`
  display: flex;
  flex-direction: column;
`

export const ButtonSave = styled(BaseAccentButton)`
  align-self: center;
  padding: 8px 16px;
`
