import { FC } from "react";
import UserProfile from "../../../../img/static/user.png";
import { useDesktopSettings } from "../../../../utilities/globalzustandstates/DesktopSettings";
import StyledUserIcon from "./UserIcon.style";

const UserIcon: FC = () => {

    const { desktopSettings } = useDesktopSettings();

    return (
        <StyledUserIcon
            bgcolor={desktopSettings.userIconColor}
            alt="user icon" src={UserProfile} />
    )
}

export default UserIcon;