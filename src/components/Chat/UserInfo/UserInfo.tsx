import Avatar from '@/components/Avatar'
import type { TUser } from '@/types'
import * as S from './UserInfo.styled'

const UserInfo = ({ name, email, createdAt, updatedAt, avatarPath, address }: TUser) => {
  return (
    <S.Wrapper>
      <Avatar
        avatarPath={avatarPath}
        style={{ marginRight: 12 }}
      />

      <S.WrapperTypography>
        <S.Title>{name}</S.Title>
        <S.SubTitle>{email}</S.SubTitle>
      </S.WrapperTypography>
    </S.Wrapper>
  )
}

export default UserInfo
