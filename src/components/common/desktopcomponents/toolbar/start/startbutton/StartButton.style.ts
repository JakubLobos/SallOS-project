import styled from "styled-components";

const StartButton = styled.button`
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: ${props => props.theme.utilsColor};
    border: none;
    margin: 0 10px 0 10px;
    cursor: pointer;
    transition: .4s;
    

    & img {
        opacity: .8;
        transition: 1s;
    }

    &:hover {
        scale: .95;
    }

    &:hover > img {
        opacity: 1;
        border-radius: 100px;
    }
`

export default StartButton;