import { breakpoints } from '@/styled/breakpoints.styled'
import { FONT_PRIMARY_COLOR, SUCCESS_COLOR } from '@/styled/colors.styled'
import { TAvatarStyleProps } from '@/styled/types'
import { AvatarSize } from '@/utils/enums'
import { styled } from 'styled-components'

export const Wrapper = styled.div<TAvatarStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${props => props.size === AvatarSize.default 
    ?`&:after {
        content: ' ';
        background: ${SUCCESS_COLOR};
        position: absolute;
        width: 12px;
        height: 12px;
        bottom: 6px;
        right: 6px;
        border-radius: 50%;
        border: 2px solid ${FONT_PRIMARY_COLOR};
      }`
    : null}
`

export const ImageWrapper = styled.div<TAvatarStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  width: ${props => props.size === AvatarSize.large ? '124px' : props.size === AvatarSize.default ? '76px' : '52px'};
  height: ${props => props.size === AvatarSize.large ? '124px' : props.size === AvatarSize.default ? '76px' : '52px'};
  overflow: hidden;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  
  @media (max-width: ${breakpoints.mobile}) {
    width: ${props => props.size === AvatarSize.large ? '76px' : props.size === AvatarSize.default ? '52px' : '32px'};
    height: ${props => props.size === AvatarSize.large ? '76px' : props.size === AvatarSize.default ? '52px' : '32px'};
  }
`

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`
