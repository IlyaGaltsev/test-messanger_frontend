import { defaultIconStyle } from '@/styled/icons.styled'
import { TBackButton } from '@/types'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import './BackButton.styled'
import * as S from './BackButton.styled'

const BackButton = ({ to }: TBackButton) => {
  const navigate = useNavigate()

  const handleClickButtonBack = () => {
    if (to) {
      navigate(to)
    }

    navigate(-1)
  }

  return (
    <S.LinkWrapper
      color={defaultIconStyle.color}
      onClick={handleClickButtonBack}
    >
      <IoIosArrowBack
        {...defaultIconStyle}
        style={{ marginRight: 8 }}
      />
      Назад
    </S.LinkWrapper>
  )
}

export default BackButton
