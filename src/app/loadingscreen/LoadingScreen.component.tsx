import { FC, useEffect, useState } from "react";
import AppLoadIntro from "../../components/common/apploadintro/AppLoadIntro.component";
import HeadingProgressBar from "../../components/common/headingprogressbar/HeadingProgressBar.style";
import ProgressBar from "../../components/common/progressbar/ProgressBar.component";
import GlobalStyle from "../../components/styles/Global.style";
import { StyledLoadingScreen } from "./LoadingScreen.style";
import { useNavigate } from 'react-router-dom'
import { getAuthPage } from "../../components/service/Links.service";

const LoadingScreen: FC = () => {

	const [isIntroVisible, setIsIntroVisible] = useState(true)
	const [handleProgress, setHandleProgress] = useState(0)
	const navigate = useNavigate()

	useEffect(() => {
		if (!isIntroVisible) {
			const update = setInterval(() => {
				setHandleProgress(prev => prev + 10)
				console.log(handleProgress)
				window.clearInterval(update)
			}, 1000)

			if (handleProgress >= 100) {
				window.clearInterval(update)
				setTimeout(() => navigate(getAuthPage()), 2000);
			}
		};
	}, [handleProgress, isIntroVisible, navigate]);

	return (
		<>
			<GlobalStyle backgroundcolor="#1b1b1b" />
			<AppLoadIntro
				setIsIntroVisible={setIsIntroVisible} //callback
				isIntroVisible={isIntroVisible} />
			<StyledLoadingScreen>
				<HeadingProgressBar fontsize={220}>SallOS</HeadingProgressBar>
				<ProgressBar progress={handleProgress} />
			</StyledLoadingScreen>
		</>
	);
};

export default LoadingScreen;