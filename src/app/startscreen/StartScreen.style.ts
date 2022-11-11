import styled from "styled-components"

const StyledStartPage = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.StartPageBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 690px ) {
        &::after {
            width: fit-content;
            min-height: 100px;
            content: 'detected you are using a small screen! To enable the application to run, rotate the device to increase its width, or open the application on a computer (recommend minimum 690px width) ';
            display: flex;
            align-items: center;
            font-size: 20px;
            color: red;
            padding: 5px;
            position: absolute;
            bottom: 0px;
        }
    }
`

export default StyledStartPage;