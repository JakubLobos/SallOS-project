import styled from "styled-components"

interface StyledProgressBarProps {
    progress: number,
}

export const StyledProgressBar = styled.div<StyledProgressBarProps>`
    width: 600px;
    height: 10px;
    background-color: transparent;

    &::after {
        width: ${props => props.progress + "%"};
        height: 10px;
        background-color: #fff;
        content: '';
        display: block;
        transition: 1s linear;
    }

    @media (max-width: 690px) {
        & {
            width: 90%;
        }
    }
`