import { BaseSubTitle, BaseTitle } from '@/styled/Global.styled'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  height: 76px;
  width: 76px;
  margin-right: 24px;
`

export const Title = styled(BaseTitle)`
  margin-bottom: 4px;
  font-weight: 500;
`

export const SubTitle = styled(BaseSubTitle)`
  margin-bottom: 0;
  font-weight: 300;
`

export const WrapperTypography = styled.div`
  display: flex;
  flex-direction: column;
`
