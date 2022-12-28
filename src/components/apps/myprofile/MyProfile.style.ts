import styled from "styled-components";

const StyledMyPofile = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    padding: 10px;
    border-radius: 10px;
    overflow: scroll;
    
    & h3, p {
        color: #fff;
        font-size: 20px;
    }

    & .alert {
        margin: 10px;
    }

    & .delete_account_desc {
        color: red;
    }

    & .delete_account_btn {
        width: 110px;
        height: 40px;
        font-size: 15px;
        background-color: ${props => props.theme.utilsColor};
        border: 1px solid #fff;
        color: #fff;
        margin: 20px auto 20px 10%;
    }
`

export default StyledMyPofile;