import { FC } from "react"
import { useSession } from "../../../../../../../utilities/globalzustandstates/SessionState";
import UserIcon from "../../../../usericon/UserIcon.component";
import StyledControlSection from "./ControlSection.style";
import TurnOffIcon from "../../../../../../../img/static/StartButton.png"
import { useAppsData } from "../../../../../../../utilities/globalzustandstates/applications.data";

const ControlSection:FC = () => {

    const { sessionUser } = useSession()
    const { appsData, updateAppData } = useAppsData();

    return (
        <StyledControlSection>
            <UserIcon />
            <div className="user_data_wrapper">
                <h3>{sessionUser.name}</h3>
                <button className="profile_button"
                    onClick={() => {
                        updateAppData({
                            ...appsData[8],
                            isOpen: true,
                        }, 8);
                    }}>My profile 	&#10148;</button>
            </div>
            <button className="logout_button"
                onClick={() => window.location.reload()}>
                <img className="logout_button_img" alt="logout button icon" src={TurnOffIcon} />
            </button>
        </StyledControlSection>
    )
}

export default ControlSection;