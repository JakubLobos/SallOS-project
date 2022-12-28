import styled from "styled-components";

const StyledIconCustomization = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

    & .colorpicker {
        width: 100px;
        height: 100px;
    }

    & .colorpicker_submit {
        padding: 10px;
        margin: 10px;
        font-size: 20px;
    }

    & .UserIconWrapper img {
        width: 160px;
        height: 160px;
    }

    & .UserIconWrapper p {
        color: #fff;
        text-align: center;
        font-size: 30px;
    }
`

export default StyledIconCustomization;