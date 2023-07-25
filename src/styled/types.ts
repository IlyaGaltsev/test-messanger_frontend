import { TAvatar } from "@/types"

type BaseTypeComponent = {
  margintop?: number
  marginbottom?: number
  marginright?: number
  marginleft?: number
}

export type TInput = BaseTypeComponent & {};
export type TLink = BaseTypeComponent & {};

export type TAvatarStyleProps = Pick<TAvatar,'size'>
