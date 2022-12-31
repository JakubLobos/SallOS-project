import styled from "styled-components";
import DesktopBlurElement from "../desktopblurelement/DesktopBlurElement.style";

interface WindowWrapperProps {
    ypos?: number;
    xpos?: number;
    focused: boolean;
    isMinimized: boolean,
}

const WindowWrapper = styled(DesktopBlurElement)<WindowWrapperProps>`
    
    min-height: 510px;
    min-width: 480px;
    padding: 0 10px 10px 10px;
    display: ${props => props.isMinimized ? "none" : "flex"};
    align-items: center;
    z-index: ${props => props.focused ? "100" : "1"};
    justify-content: center;
    flex-direction: column;
    resize: both;
    overflow-x: hidden;
    position: absolute;
    border-radius: 28px;


    &::-webkit-resizer {
        border-left: 50px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 100px solid #E40066;
    }

    & img {
        width: 23px;
    }

    & .content_wrapper {
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