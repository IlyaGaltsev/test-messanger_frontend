import { useGetUserProfileQuery } from '@/store/api/userProfileApi'
import { TChatListMessages, TMessage } from '@/types'
import Message from './components/Message'

import { BaseTitle } from '@/styled/Global.styled'
import * as S from './ChatListMessages.styled'


const ChatListMessages = ({ data }: TChatListMessages) => {
  const { data: currentUser } = useGetUserProfileQuery()

  const checkIsCurrentUser = (id: number) => {
    return currentUser.id === id
  }

  if (!data) return <BaseTitle>Сообщений нет</BaseTitle>

  return (
    <S.MessagesListWrapper>
      {data.map((message: TMessage) => (
        <Message
          key={message.id}
          {...message}
          isCurrentUser={checkIsCurrentUser(message.user.id)}
        />
      ))}
    </S.MessagesListWrapper>
  )
}

export default ChatListMessages
