import styled from "styled-components";



const StyledControlSection = styled.section`
    width: 100%;
    height: auto;
    margin-top: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fff;

    .logout_button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 51px;
        height: 51px;
        background-color: transparent;
        border: none;
        border-radius: 50%;
        margin-left: auto;
        cursor: pointer;
        transition: .2s;

        &:hover {background-color: ${props => props.theme.utilsColor};}
    }

    .logout_button_img {
        width: 100%;
    }

    .profile_button {
        background-color: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        transition: .2s;

        &:hover {color: ${props => props.theme.utilsColor}}
    }
    
    .user_data_wrapper {
        margin-left: 7px;
    }
`

export default StyledControlSection;