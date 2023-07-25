import defaultAvatar from '@/assets/images/default-avatar.svg'
import { TAvatar } from '@/types'
import { AvatarSize } from '@/utils/enums'

import * as S from './Avatar.styled'

/**
 * пока подгрузка изображений с сервера не работает,
 * можно передавать ссылку из сети на изображение
 */

const Avatar = ({ avatarPath, size = AvatarSize.default }: TAvatar) => {
  const getAvatar = () => {
    if (avatarPath.includes('http')) {
      return avatarPath
    }

    return defaultAvatar
  }
  return (
    <S.Wrapper size={size}>
      <S.Image src={getAvatar()} />
    </S.Wrapper>
  )
}

export default Avatar
