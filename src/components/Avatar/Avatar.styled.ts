import { FONT_PRIMARY_COLOR, SUCCESS_COLOR } from '@/styled/colors.styled'
import { TAvatarStyleProps } from '@/styled/types'
import { AvatarSize } from '@/utils/enums'
import { styled } from 'styled-components'

export const Wrapper = styled.div<TAvatarStyleProps>`
  display: flex;
  align-items: center;
  margin-right: ${props => (props.size === AvatarSize.large ? '0' : '24px')};
  margin-bottom: ${props => (props.size === AvatarSize.large ? '24px' : '0')};
  position: relative;
  width: ${props => props.size === AvatarSize.large ? '124px' : props.size === AvatarSize.default ? '76px' : '52px'};
  height: ${props => props.size === AvatarSize.large ? '124px' : props.size === AvatarSize.default ? '76px' : '52px'};

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
  align-items: center;
  position: relative;
  width: ${props => props.size === AvatarSize.large ? '124px' : props.size === AvatarSize.default ? '76px' : '52px'};
  height: ${props => props.size === AvatarSize.large ? '124px' : props.size === AvatarSize.default ? '76px' : '52px'};
overflow: hidden;
border-radius: 50%;


  
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`
