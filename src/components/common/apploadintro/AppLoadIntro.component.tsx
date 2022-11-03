import { FC, useEffect, useState } from "react"
import HeadingProgressBar from "../headingprogressbar/HeadingProgressBar.style"
import StyledAppIntro from "./AppLoadIntro.style"

interface AppLoadIntroProps {
    setIsIntroVisible: any,
    isIntroVisible: boolean,
}

const AppLoadIntro:FC<AppLoadIntroProps> = ({setIsIntroVisible, isIntroVisible}) => {
    useEffect(() => {
        setTimeout(() => {
            setIsIntroVisible(false)
        }, 1000)
    })
    return (
        <StyledAppIntro isVisible={isIntroVisible}>
            <HeadingProgressBar fontsize={240}>SallOS</HeadingProgressBar>
        </StyledAppIntro>
    )
}

export default AppLoadIntro;