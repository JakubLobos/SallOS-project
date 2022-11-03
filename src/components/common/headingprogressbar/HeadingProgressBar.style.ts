import styled from "styled-components";

interface HeadingProgressBarProps {
    fontsize: number;
}

const HeadingProgressBar = styled.h2<HeadingProgressBarProps>`
    font-size: ${props => props.fontsize + "px"};
    color: #FFFFFF;
    text-align: center;
    font-family: 'Signika Negative', sans-serif;
    cursor: default;
    user-select: none;

    @media (max-width: 690px) {
        & {
            font-size: calc(${props => props.fontsize + "px"}/2);
        }
    }
`

export default HeadingProgressBar;