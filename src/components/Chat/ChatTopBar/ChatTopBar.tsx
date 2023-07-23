import { IoLogOut } from 'react-icons/io5'
import { TChatTopBar } from '@/types'
import UserInfo from '../UserInfo'

import { defaultIconStyle } from '@/styled/icons.styled'
import * as S from './ChatTopBar.styled'

const ChatTopBar = ({ data, onLogout }: TChatTopBar) => {
 
  return (
    <S.Wrapper>
      <UserInfo {...data} />
      <IoLogOut onClick={onLogout} {...defaultIconStyle}/>
    </S.Wrapper>
  )
}

export default ChatTopBar
