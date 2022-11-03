import styled from "styled-components";
import HeadingProgressBar from "../../../components/common/headingprogressbar/HeadingProgressBar.style";

export const UsersWrapper = styled.div`
    width: 100%;
    max-width: 2000px;
    display: grid;
    height: 100%;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 400px);
    grid-template-rows: repeat(auto-fit, minmax(400px, 500px));
    grid-template-rows: fit-content;
    grid-column-gap: 10px;
    grid-row-gap: 50px;
`

export const Heading = styled(HeadingProgressBar)`
    background-color: #fff;
    height: 100%;
    color: #2263AE;
    display: flex;
    align-items: center;
    justify-content: center;
`