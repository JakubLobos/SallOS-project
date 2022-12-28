import styled from "styled-components"

interface StyledPopUpProps {
    isHidden: boolean,
}

const StyledPopUp = styled.div<StyledPopUpProps>`
    display: ${props => props.isHidden ? "none" : "flex"};
    align-items: center;
    justify-content: center;
    width: 300px;
    height: auto;
    min-height: 50px;
    padding: 20px;
    position: absolute;
    left: 50%;
    right: 50%;
    top: 1%;
    background-color: ${props => props.theme.utilsColor};
    transform: translate(-50%, 0);
    flex-direction: column;
    animation: appearingPopUp .7s forwards;
    color: #fff;
    box-shadow: 2px 3px 3px #1b1b1b4b;
    border-radius: 20px;
    text-align: center;
    transition: .2s;
    cursor: default;
    
    &:hover {opacity: .3 !important;}

    @keyframes appearingPopUp {
        0% {
            transform: scaleX(30%) translate(-50%, -100%);
            border-radius: 100%;
            color: ${props => props.theme.utilsColor};
        }
        50% {
            transform: scaleX(30%) translate(-50%, 0);
            color: ${props => props.theme.utilsColor};
            border-radius: 100%;
        }
        100% {
            transform: scaleX(1) translate(-50%, 0);
            border-radius: 20px;
            color: #fff;
        }
    }
`

export default StyledPopUp