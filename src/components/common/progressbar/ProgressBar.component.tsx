import { FC } from "react";
import { StyledProgressBar } from "./ProgressBar.style"

interface ProgressBarProps {
    progress: number,
}

const ProgressBar:FC<ProgressBarProps> = (props) => {
    return (
        <StyledProgressBar progress={props.progress} />
    )
}

export default ProgressBar;