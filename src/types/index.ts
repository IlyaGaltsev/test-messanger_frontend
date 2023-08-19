import { AvatarSize } from '@/utils/enums'
import { CSSProperties, MouseEventHandler } from 'react'

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

export type TAvatar = Pick<TUser, 'avatarPath'> & {
  size?: AvatarSize
  style?: CSSProperties
}

export type TChatTopBar = {
  data: TUser
  onSettings: MouseEventHandler<SVGElement>
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
  room_id: number
}

export type TChatListMessages = {
  data: TMessage[]
}

export type TMessageComponent = TMessage & {
  isCurrentUser: boolean
}

export type TBackButton = {
  to?: string
}
