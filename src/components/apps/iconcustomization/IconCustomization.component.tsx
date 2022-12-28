import { FC, useState } from "react";
import { useDesktopSettings } from "../../../utilities/globalzustandstates/DesktopSettings";
import { usePopUpSettings } from "../../../utilities/globalzustandstates/popup";
import UserIcon from "../../common/desktopcomponents/usericon/UserIcon.component";
import StyledIconCustomization from "./IconCustomization.style";

const IconCustomization:FC = () => {

    const [color, setColor] = useState("");
    const { setDesktopSettings, desktopSettings } = useDesktopSettings();
    const { popUpSettings, setpopUpSettings } = usePopUpSettings();

    return (
        <StyledIconCustomization>
            <input className="colorpicker" onChange={(e) => setColor(e.target.value)} type="color"></input>
            <button className="colorpicker_submit" onClick={() => {
                setDesktopSettings({
                    ...desktopSettings,
                    userIconColor: color,
                })

                if(popUpSettings.isHidden === true && color != "") {
                    setpopUpSettings({
                        ...popUpSettings,
                        isHidden: false,
                        heading: "Changed user icon color!",
                        value: "Picked color: " + color + "!",
                    });
                    
                    setTimeout(() => {
                        setpopUpSettings({
                            ...popUpSettings,
                            isHidden: true,
                        });
                    }, popUpSettings.popUpTime)
                }
                else {
                    setpopUpSettings({
                        ...popUpSettings,
                        isHidden: false,
                        heading: "ERROR!",
                        value: "Please choose color first from palette!",
                    });
                    
                    setTimeout(() => {
                        setpopUpSettings({
                            ...popUpSettings,
                            isHidden: true,
                        });
                    }, popUpSettings.popUpTime)
                }
            }}>Change icon</button>
            <button className="colorpicker_submit" onClick={() => {
                setDesktopSettings({
                    ...desktopSettings,
                    userIconColor: "",
                });
            
                if(popUpSettings.isHidden === true && color != "") {
                    setpopUpSettings({
                        ...popUpSettings,
                        isHidden: false,
                        heading: "Restarted user icon color!",
                        value: "Now you using default color palette!",
                    });
                    
                    setTimeout(() => {
                        setpopUpSettings({
                            ...popUpSettings,
                            isHidden: true,
                        });
                    }, popUpSettings.popUpTime)
                }
            }}>restart</button>
            <div className="UserIconWrapper">
                <p>result:</p>
                <UserIcon />
            </div>
        </StyledIconCustomization>
    )
}

export default IconCustomization;