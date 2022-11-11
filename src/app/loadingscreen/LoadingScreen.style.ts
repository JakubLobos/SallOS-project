import styled from "styled-components";

export const StyledLoadingScreen = styled.section`
    min-width: 100%;
    width: fit-content;
    height: 100vh;
    min-height: 500px;
    background-color: ${props => props.theme.LoadingPageBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`