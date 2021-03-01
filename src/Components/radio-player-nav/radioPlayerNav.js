import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gsap } from "gsap";

function RadioPlayerNav(props) {
	const audioEl = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const playingTitle = document.querySelector(".radio-player-nav .title p");

	const toPX = (value) => {
		return (parseFloat(value) / 100) * (/vh/gi.test(value) ? window.innerHeight : window.innerWidth);
	};

	const radioPlayerGSAP = gsap.to(".radio-player-nav .title p", {
		x: toPX("-5vw"),
		duration: 4,
		ease: "none",
		yoyo: true,
		repeat: -1,
		delay: 1,
		repeatDelay: 1,
		paused: true,
	});

	useLayoutEffect(() => {
		if (isPlaying) {
			audioEl.current.play();
			radioPlayerGSAP.play();
			// radioPlayerGSAP.reversed(4, false);
		} else {
			audioEl.current.pause();
		}
	}, [isPlaying]);

	return (
		<div className="radio-player-nav">
			<div className="radio-player-controls">
				<audio src="src/current-radio-mix.mp3" ref={audioEl} preload="auto"></audio>
				<i
					className={isPlaying ? "fas fa-pause cursor-hover" : "fas fa-play cursor-hover"}
					onClick={() => {
						setIsPlaying(!isPlaying);
					}}
				></i>
				<div className="title">
					<p>MIXED FEELINGS M0001</p>
				</div>
				<a href="src/current-radio-mix.mp3" download="Mixed Feelings M0001">
					<i className="fas fa-download cursor-hover"></i>
				</a>
			</div>
		</div>
	);
}

export default RadioPlayerNav;
