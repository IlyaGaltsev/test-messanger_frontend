import { useGetUserProfileQuery } from '@/store/api/userProfileApi'
import { setAuth } from '@/store/slice/authSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { errorsHandler } from '@/utils/globalMethods/errorsHandler'
import $axios from '@/utils/setupAxios'
import { TMessage } from '@/types'

import ChatListMessages from '@/components/Chat/ChatListMessages'
import ChatSendForm from '@/components/Chat/ChatSendForm'
import ChatTopBar from '@/components/Chat/ChatTopBar'
import Loader from '@/components/Loader'

import { BaseTitle } from '@/styled/Global.styled'
import * as S from './Chat.styled'

const Chat = () => {
  const dispatch = useDispatch()
  const [messages, setMessages] = useState<TMessage[] | []>([])
  const {
    data: userProfile,
    isError: isErrorUserProfile,
    isLoading: isLoadingUserProfile
  } = useGetUserProfileQuery()

  const logout = () => {
    localStorage.removeItem('access_token')
    dispatch(setAuth(false))
  }

  const sendMessage = async (message: string) => {
    await $axios
      .post('/api/message/create', {
        userId: userProfile.id,
        message: message
      })
      .then(() => window.location.reload())
      .catch(error => errorsHandler(error.response.data.message))
  }

  useEffect(() => {
    const getMessages = async () => {
      await $axios
        .get('/api/message/all')
        .then(data => setMessages(data.data))
        .catch(error => errorsHandler(error.response.data.message))
    }

    getMessages()
  }, [])

  if (isLoadingUserProfile) {
    return <Loader />
  }

  if (isErrorUserProfile) {
    return <BaseTitle>ОШИБКА, попробуйте позже</BaseTitle>
  }

  if (!userProfile) {
    return <BaseTitle>Данных нет</BaseTitle>
  }

  return (
    <S.CardChatWrapper>
      <ChatTopBar
        data={userProfile}
        onLogout={logout}
      />
      <ChatListMessages data={messages} />
      <ChatSendForm sendMessage={sendMessage} />
    </S.CardChatWrapper>
  )
}

export default Chat
