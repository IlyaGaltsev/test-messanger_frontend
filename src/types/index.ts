import { MouseEventHandler } from 'react'

export type TLogin = {
  email: string
  password: string
}

export type TRegister = TLogin & {
  name: string
}

// ! пароль нужно убрать из выдаваемого на сервере
export type TUser = {
  id: 1
  createdAt: string
  updatedAt: string
  email: string
  password: string
  name: string
  avatarPath: string
  address: string
}

export type TAvatar = Pick<TUser, 'avatarPath'>

export type TChatTopBar = {
  data: TUser
  onLogout: MouseEventHandler<SVGElement>
}

export type TChatSendForm = {
  sendMessage: Function
}

export type TMessage = {
  createdAt: string
  id: number
  message: string
  updatedAt: string
  user: TUser
}

export type TChatListMessages = {
  data: TMessage[]
}

export type TMessageComponent = TMessage & {
  isCurrentUser: boolean
}