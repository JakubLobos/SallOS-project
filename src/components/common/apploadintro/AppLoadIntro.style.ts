import styled from "styled-components";

interface StyledAppIntroProps {
    isVisible: boolean,
}

const StyledAppIntro = styled.section<StyledAppIntroProps>`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.LoadingPageBackground};
    display: flex;
    opacity: ${props => props.isVisible ? "100%" : "0%"};
    align-items: center;
    justify-content: center;
    position: fixed;
    transition: .8s;
`
export default StyledAppIntro;