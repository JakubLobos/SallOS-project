import styled from "styled-components";

interface StyledConsoleProps {
    color?: string;
}

const StyledConsole = styled.div<StyledConsoleProps>`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #000;
    color: green; //prevent black when user insert wrong color id in console command
    color: ${props => props.color};
    flex-direction: column;
    padding: 10px;

    & .console_output  ol li{
        list-style: none;
        padding: 2px 0 2px 0
    }
    
    & .console_output {
        overflow: scroll;
        word-break: break-all;
    }

    & .console_form {
        width: 100%;
        margin-top: auto;
        border-top: 1px solid #fff;
        padding-top: 5px;
        display: flex;
        align-items: center;
    }

    & .console_input {
        margin-left: 3px;
        width: 100%;
        height: 26px;
        font-size: 24px;
        background-color: transparent;
        border: none;
        color: #fff;
        outline: transparent;
    }

`

export default StyledConsole;