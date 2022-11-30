import styled from "styled-components";

const StyledWallpapers = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: scroll;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 30px;
     
    grid-template-columns: repeat(auto-fit, 300px);
    grid-template-rows: repeat(auto-fit, 330px);
    grid-gap: 20px;
`

export default StyledWallpapers;