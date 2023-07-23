import { FONT_PRIMARY_COLOR, SUCCESS_COLOR } from '@/styled/colors.styled'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  position: relative;

  &:after {
    content: '';
    background: ${SUCCESS_COLOR};
    position: absolute;
    width: 12px;
    height: 12px;
    bottom: 6px;
    right: 6px;
    border-radius: 50%;
    border: 2px solid ${FONT_PRIMARY_COLOR};
  }
`

export const Image = styled.img`
  height: 76px;
  width: 76px;
  border-radius: 50%;
`
