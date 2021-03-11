import React, { useState, useLayoutEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gsap } from "gsap";
// import { CustomEase } from "src/customEase/CustomEase.min.js";

// gsap.registerPlugin(CustomEase);

function Radio() {
	// const audioEl = useRef(null);
	// const [isPlaying, setIsPlaying] = useState(false);

	// let radio = document.querySelector(".radio-item audio");

	// const bpm = (sampleBPM) => {
	// 	return (sampleBPM / 60 / 10) * 4;
	// };

	// const radioGSAP = gsap.to(".album-art", {
	// 	scale: 0.955,
	// 	duration: bpm(129),
	// 	ease: CustomEase.create(
	// 		"custom",
	// 		"M0,0.042 C0.084,0.652 0.194,0.742 0.28,0.742 0.406,0.742 0.354,0.398 0.538,0.398 0.746,0.398 0.663,0.958 0.782,0.958 1.041,0.958 0.868,0 1,0 "
	// 	),
	// });

	// useLayoutEffect(() => {
	// 	if (isPlaying) {
	// 		audioEl.current.play();
	// 		radioGSAP.repeat(-1);
	// 		radioGSAP.play();
	// 	} else {
	// 		audioEl.current.pause();
	// 		radioGSAP.pause();
	// 		radioGSAP.repeat(0);
	// 	}
	// }, [isPlaying]);

	return (
		<div className="body-container">
			Radio
			{/* <div className="radio-item">
				<audio src="src/current-radio-mix.mp3" ref={audioEl} preload="auto" />
				<i
					className={isPlaying ? "fas fa-pause cursor-hover" : "fas fa-play cursor-hover"}
					onClick={() => {
						setIsPlaying(!isPlaying);
					}}
				></i>
				<img src="src/images/album art/EP001.jpg" className="album-art" />
			</div> */}
		</div>
	);
}
export default Radio;
