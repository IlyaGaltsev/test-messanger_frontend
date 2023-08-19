import Message from '../ChatListMessages/components/Message'
import { TMessage } from '@/types'

import './MessagesList.css'

export type TMessagesList = {
  messages: TMessage[]
  currentUserId: number
}

const MessagesList = ({ messages, currentUserId }: TMessagesList) => {
  const checkIsCurrentUser = (id: number) => {
    return currentUserId === id
  }

  if (!messages.length) {
    return (
      <div className="messages-list__wrapper">
        <center>Напишите первое сообщение</center>
      </div>
    )
  }

  return (
    <div className="messages-list__wrapper">
      {messages.map(message => (
        <Message
          key={message.id}
          {...message}
          isCurrentUser={checkIsCurrentUser(message.user.id)}
        />
      ))}
    </div>
  )
}

export default MessagesList
