import defaultAvatar from '@/assets/images/default-avatar.svg'
import { TAvatar } from '@/types'

import * as S from './Avatar.styled'

const Avatar = ({ avatarPath }: TAvatar) => {
  return (
    <S.Wrapper>
      <S.Image src={defaultAvatar} />
    </S.Wrapper>
  )
}

export default Avatar
