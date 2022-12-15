import { FC } from "react"
import { useSession } from "../../../../../../../utilities/globalzustandstates/SessionState";
import StyledControlSection from "./ControlSection.style";

const ControlSection:FC = () => {

    const {sessionUser} = useSession()

    return (
        <StyledControlSection>
            <p>authorized as</p>
            <h3>{sessionUser.name}</h3>
            <p>{sessionUser.email}</p>
            <button onClick={() => window.location.reload()}>Logout</button>
        </StyledControlSection>
    )
}

export default ControlSection;