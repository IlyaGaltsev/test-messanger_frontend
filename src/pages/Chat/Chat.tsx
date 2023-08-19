import { setAuth } from '@/store/slices/authSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { errorsHandler } from '@/utils/globalMethods/eventHandlers'
import $axios, { API_BASE_URL } from '@/utils/setupAxios'
import { TMessage } from '@/types'

import ChatListMessages from '@/components/Chat/ChatListMessages'
import ChatSendForm from '@/components/Chat/ChatSendForm'
import ChatTopBar from '@/components/Chat/ChatTopBar'
import Loader from '@/components/Loader'

import { BaseTitle } from '@/styled/Global.styled'
import * as S from './Chat.styled'
import { useNavigate } from 'react-router-dom'
import { SETTINGS_ROUTE } from '@/utils/routes'
import { io } from 'socket.io-client'

const socket = io(API_BASE_URL ?? '')

const Chat = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [messages, setMessages] = useState<TMessage[] | []>([])
  const {
    data: userProfile,
    isError: isErrorUserProfile,
    isLoading: isLoadingUserProfile
  } = useSelector((state: any) => state.user)

  

  const onSettings = () => {
    navigate(SETTINGS_ROUTE)
  }

  const logout = () => {
    localStorage.removeItem('access_token')
    dispatch(setAuth(false))
  }

  const sendMessage = (message: string) => {
    socket.emit('createMessage', { userId: userProfile.id, message: message }, () => {})
  }

  useEffect(() => {
    socket.emit('allMessage', {}, (messagesAll: any) => {
      setMessages(messagesAll)
    })
  }, [])

  socket.on('messages', data => {
    setMessages(prev => (prev = data))
  })

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
        onSettings={onSettings}
        onLogout={logout}
      />
      <ChatListMessages data={messages} />
      <ChatSendForm sendMessage={sendMessage} />
    </S.CardChatWrapper>
  )
}

export default Chat
