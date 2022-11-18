import styled from "styled-components";

const StyledDesktopItems = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-bottom: 76px;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(60px, 64px));
    grid-template-columns: repeat(auto-fit, minmax(60px, 64px));
    grid-column-gap: 5px;
    grid-row-gap: 5px; 

`

export default StyledDesktopItems;