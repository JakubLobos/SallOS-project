import styled from "styled-components";

interface DesktopBlurElementProps {
    width?: string;
    height?: string;
}

const DesktopBlurElement = styled.div<DesktopBlurElementProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.theme.mainBlurColor};
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    filter: brightness(113%);
`

export default DesktopBlurElement;