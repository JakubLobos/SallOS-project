import styled from "styled-components";
import DesktopBlurElement from "../desktopblurelement/DesktopBlurElement.style";

interface WindowWrapperProps {
    ypos?: number;
    xpos?: number;
}

const WindowWrapper = styled(DesktopBlurElement)<WindowWrapperProps>`
    
    min-height: 480px;
    min-width: 480px;
    padding: 0 10px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    resize: both;
    overflow: auto;
    position: absolute;
    z-index: 3;
    top: ${props => props.ypos}px;
    left: ${props => props.xpos}px;


    &::-webkit-resizer {
        border-left: 50px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 100px solid #E40066;
    }

    & img {
        width: 23px;
    }

    & .IframeWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 450px;
        height: 100%;
        position: relative;
    }
`;

export default WindowWrapper;