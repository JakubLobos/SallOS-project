import styled from "styled-components"

const StyledStartButton = styled.a`
    width: 338px;
    height: 338px;
    border: none;
    background-color: ${props => props.theme.StartPageBackground};
    filter: contrast(94%);
    border-radius: 338px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::before {
        position: absolute;
        width: 0%;
        height: 0%;
        background-color: #dbe9db6e;
        content: '';
        display: block;
        transition: .5s;
        opacity: 0%;
        border-radius: 338px;
    }

    &::after {
        position: absolute;
        width: 0%;
        height: 0%;
        background-color: green;
        content: '';
        display: block;
        transition: 1s;
        opacity: 0%;
        border-radius: 338px;
    }

    &:hover::before, &:hover::after {
        width: 100%;
        height: 100%;
        opacity: 20%;
    }

    &:hover > img {
        transform: scale(1.1);
        transition: .4s;
    }


`

export default StyledStartButton