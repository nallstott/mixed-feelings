import React, { useState, useEffect, useLayoutEffect } from "react";
import Cookies from "js-cookie";
import gsap from "gsap/gsap-core";

function PasswordPage(props) {
	const disableScroll = () => {
		let scrollTop, scrollLeft;
		// Get the current page scroll position
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
			// if any scroll is attempted,
			// set this to the previous value
			(window.onscroll = function () {
				window.scrollTo(scrollLeft, scrollTop);
			});
	};

	const enableScroll = () => {
		window.onscroll = function () {};
	};

	const handleInput = () => {
		const pwInput = document.querySelector("#password-input").value;
		if (pwInput === "too many feelings") {
			console.log(pwPage);
			Cookies.set("auth", "true", { expires: 3 });
			console.log(Cookies.get("auth"));
			enableScroll();
			gsap.to(pwPageContent, {
				opacity: 0,
				duration: 1,
				ease: "circ.out",
			});
			setTimeout(() => {
				location.reload();
			}, 1500);
		}
	};

	let pwPage;
	let pwPageContent;

	useLayoutEffect(() => {
		pwPage = document.querySelector(".password-page");
		pwPageContent = pwPage.querySelector(".content");
		disableScroll();
		if (Cookies.get("auth") === "true" || props.protected === false) {
			pwPage.style.display = "none";
			enableScroll();
		}
	});

	return (
		<div className="password-page">
			<div className="content">
				<img src="src/images/MF_LOGOS-11.png" />
				<input id="password-input" type="text" onInput={handleInput}></input>
			</div>
		</div>
	);
}

export default PasswordPage;
