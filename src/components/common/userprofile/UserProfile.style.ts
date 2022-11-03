import styled from "styled-components";

const StyledUserProfile = styled.a`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-size: 25px;
    font-family: 'Signika Negative', sans-serif;
    text-decoration: none;
    cursor: pointer;

    &:hover > img {
        transition: .3s;
        transform: scale(1.03);
    }

    & h2 {
        margin-top: 5px;
        font-weight: 10;
    }
    & h3 {
        font-weight: 1;
        font-size: 20px;
    }
`

export default StyledUserProfile;