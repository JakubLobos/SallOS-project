import styled from "styled-components";
import DesktopBlurElement from "../../../../components/common/desktopcomponents/desktopblurelement/DesktopBlurElement.style";

interface SAppPropertiesMenuProps {
    posx: number,
    posy: number,
    isHidden: boolean,
}

const StyledAppPropertiesMenu = styled(DesktopBlurElement)<SAppPropertiesMenuProps>`
    position: absolute;
    left: ${props => props.posx}px;
    top: ${props => props.posy}px;
    display: ${props => props.isHidden ? "none" : "flex"};
    width: 90px;
    height: auto;
    min-height: 110px;
    padding: 10px 0 10px 0;
    border-radius: 10px;
    flex-direction: column;
    border: 1px solid #0000004b;
    animation: appearPropMenu .3s forwards;

    & button {
        cursor: pointer;
        background-color: #ffffff4b;
        border: none;
        padding: 5px;
        margin: 5px 0 5px 0;
        &:hover {background-color: #ffffff7b;}
    }

    @keyframes appearPropMenu {
        0% {
            transform: scaleY(0%);
            opacity: 0;
        }
        100% {
            transform: scaleY(100%);
            opacity: 1;
        }
    }
`

export default StyledAppPropertiesMenu;