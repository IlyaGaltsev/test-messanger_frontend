import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { TChatSendForm } from '@/types'
import { IoSend } from 'react-icons/io5'

import * as S from './ChatSendForm.styled'

const ChatSendForm = ({ sendMessage }: TChatSendForm) => {
  const [value, setValue] = useState('')

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.target.value)
  }

  const handleSubmitForm: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    const trimValue = value.trim()

    if (!trimValue) {
      return
    }


    sendMessage(trimValue)
    setValue('')
  }

  return (
    <S.Wrapper onSubmit={handleSubmitForm}>
      <S.Input
        value={value}
        onChange={handleChangeInput}
        placeholder="Введите текст сообщения"
      />
      <S.AccentButton>
        <IoSend />
      </S.AccentButton>
    </S.Wrapper>
  )
}

export default ChatSendForm
