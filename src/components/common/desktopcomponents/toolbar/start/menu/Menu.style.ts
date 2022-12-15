import styled from "styled-components";
import DesktopBlurElement from "../../../desktopblurelement/DesktopBlurElement.style";

interface StyledMenuProps {
    isOpen: boolean,
}

const StyledMenu = styled(DesktopBlurElement)<StyledMenuProps>`
    width: 326px;
    height: 572px;
    padding: 10px;
    position: absolute;
    top: -577px;
    left: 10px;
    border-radius: 26px;
    animation: showUp .4s linear;
    display: ${props => props.isOpen ? "flex" : "none"};
    flex-direction: column;

    @keyframes showUp {
        100% {
            transform: translate(0, 0%);
            opacity: 1;
        }
        0% {
            transform: translate(0, 100%);
            opacity: 0;
            scale: .1; //using scale instead of widht/height for better performance
        }
    }

`

export default StyledMenu;