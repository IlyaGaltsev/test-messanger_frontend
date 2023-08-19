import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { TChatSendForm } from '@/types'
import { IoSend } from 'react-icons/io5'

import styles from './ChatSendForm.module.css'

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
    <form
      className={styles.wrapper}
      onSubmit={handleSubmitForm}
    >
      <input
        value={value}
        onChange={handleChangeInput}
        placeholder="Введите текст сообщения"
      />
      <button className="accent-button">
        <IoSend />
      </button>
    </form>
  )
}

export default ChatSendForm
