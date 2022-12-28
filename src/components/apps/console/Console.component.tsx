import { FC, useState } from "react";
import { useAppsData } from "../../../utilities/globalzustandstates/applications.data";
import { useSession } from "../../../utilities/globalzustandstates/SessionState";
import StyledConsole from "./Console.style";
import responseConsoleCommand from "./utils/Console.service";

const Console:FC = () => {

    interface CommandHistory {
        value: string,
        id?: number,
    }

    const { sessionUser } = useSession()
    const [handleValue, setHandleValue] = useState("")
    const {appsData, updateAppData} = useAppsData();
    const [handleConsoleColor, setHandleConsoleColor] = useState()
    const [commandHistory, setCommandHistory] = useState([
        {
            value: 'console ready to use!',
            prefix: '$user/' + sessionUser.name,
        },
        {
            value: 'type "get doc" to get info about using this tool!',
            prefix: '$user/' + sessionUser.name,
        },
    ]);
    

    return (
        <StyledConsole color={handleConsoleColor}>
            <output className="console_output" htmlFor="input0">
                <ol>
                    {
                        commandHistory.map(command => <li key={command.value + Math.random()*1000}>{command.prefix} &#10148; {command.value}</li>)
                        
                    }
                </ol>
            </output>
            <form
                noValidate
                action="#"
                className="console_form"
                onSubmit={(event) => {
                event.preventDefault()
                commandHistory.push({ value: handleValue, prefix: '$user/' + sessionUser.name,}) //using push, bc when i use setstate it doesnt appear when command exist
                responseConsoleCommand(handleValue, setCommandHistory, commandHistory, appsData, setHandleConsoleColor );
                setHandleValue("")
            }}>
                <p aria-label="decoration arrow">&#10148;</p>
                <input
                    type="text"
                    value={handleValue}
                    autoComplete="off"
                    onChange={(event) => setHandleValue(event.target.value)} autoFocus className="console_input" id="input0"></input>
            </form>
        </StyledConsole>
    )
}

export default Console;