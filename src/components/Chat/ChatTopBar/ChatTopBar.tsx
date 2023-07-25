import { IoLogOut, IoSettings } from 'react-icons/io5'
import { TChatTopBar } from '@/types'
import UserInfo from '../UserInfo'

import { defaultIconStyle } from '@/styled/icons.styled'
import * as S from './ChatTopBar.styled'

const ChatTopBar = ({ data, onSettings, onLogout }: TChatTopBar) => {
  return (
    <S.Wrapper>
      <UserInfo {...data} />
      <S.WrapperTools>
        <IoSettings onClick={onSettings} {...defaultIconStyle} />
        <IoLogOut onClick={onLogout} {...defaultIconStyle} />
      </S.WrapperTools>
    </S.Wrapper>
  )
}

export default ChatTopBar
