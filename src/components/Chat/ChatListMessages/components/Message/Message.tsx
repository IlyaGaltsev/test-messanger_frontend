import { getNormalizeDate } from '@/utils/globalMethods/getNormalizeDate'
import { errorsHandler } from '@/utils/globalMethods/errorsHandler'
import $axios from '@/utils/setupAxios'

import { TMessageComponent } from '@/types'
import { useState } from 'react'

import * as S from './Message.styled'

const Message = ({ createdAt, id, message, user, isCurrentUser }: TMessageComponent) => {
  const [isShowOptions, setShowOptions] = useState(false)
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null)

  const baseProps = {
    iscurrentuser: isCurrentUser ? 1 : 0
  }

  const handleClickDelete = async () => {
    await $axios
      .delete(`/api/message/delete/${id}`)
      .then(() => window.location.reload())
      .catch(error => errorsHandler(error))
  }

  /**
   * Функции для работы долгого зажатия сообщения и появлении возможности его удаления
   */
  const startPress = () => {
    const timer = setTimeout(() => {
      setShowOptions(true)
    }, 1000)

    setPressTimer(timer)
  }

  const endPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer)
      setPressTimer(null)
    }
  }

  return (
    <S.MessageWrapper {...baseProps}>
      <S.MessageBody
        {...baseProps}
        onMouseDown={startPress}
        onMouseUp={endPress}
        onMouseLeave={endPress}
      >
        <S.MessageTitle {...baseProps}>{user.name}</S.MessageTitle>
        <S.MessageText {...baseProps}>{message}</S.MessageText>
      </S.MessageBody>
      {isShowOptions ? (
        <S.UnderMessageTitleDelete onClick={handleClickDelete}>Удалить</S.UnderMessageTitleDelete>
      ) : null}
      <S.UnderMessageTitle>{getNormalizeDate(createdAt)}</S.UnderMessageTitle>
    </S.MessageWrapper>
  )
}

export default Message
