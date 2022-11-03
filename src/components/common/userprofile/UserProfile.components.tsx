import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useSession } from "../../../utilities/globalzustandstates/SessionState";
import UserImg from "../../../img/static/user.png"
import { getDesktopPage } from "../../service/Links.service";
import StyledUserProfile from "./UserProfile.style";

interface UserProfileProps {
    username: string,
    name: string,
    user: object,
}

const UserProfile: FC<UserProfileProps> = (props) => {
    const { sessionUser, setSessionUser } = useSession();
    const navigate = useNavigate()
    return (
        <form onClick={() => {
            if (Object.keys(sessionUser).length === 0){ // check if object is empty
                setSessionUser(props.user);
                console.log("choosed user, authorized!")
                navigate(getDesktopPage())
            } else {
                window.alert('User is already choosed, please refresh your page!')
            }
            //system wylogowywania musi polegać na ustawieniu stanu sessionUser na pusty obiekt!
        }}>
            <StyledUserProfile >
                <img width={300} alt="user img profile" src={UserImg} />
                <h2>{props.username}</h2>
                <h3>{props.name}</h3>
            </StyledUserProfile>
        </form>
    )
}

export default UserProfile;