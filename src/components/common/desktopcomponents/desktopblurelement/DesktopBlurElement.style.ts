import styled from "styled-components";


const DesktopBlurElement = styled.div`
    background-color: ${props => props.theme.mainBlurColor};
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    filter: brightness(113%);
`

export default DesktopBlurElement;