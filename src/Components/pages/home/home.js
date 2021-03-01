import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const backgroundImages = {
	radio: "src/images/home/radio-tn.jpg",
	shop: "src/images/home/shop-tn.jpg",
	music: "src/images/home/music-tn.jpg",
	about: "src/images/home/about-tn.jpg",
	news: "src/images/home/news-tn.jpg",
};

function Home() {
	let location = useLocation();
	const pages = ["radio", "shop", "music", "about", "news"];
	let radioScrollTrigger, shopScrollTrigger, musicScrollTrigger, aboutScrollTrigger, newsScrollTrigger;
	useEffect(() => {
		const backgroundSquare = document.querySelector(".home-menu-background");
		pages.forEach((page) => {
			switch (page) {
				case "radio":
					radioScrollTrigger = ScrollTrigger.create({
						trigger: `#home-menu-item-${page}`,
						start: "top center",
						end: "bottom center",
						onEnter: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onEnterBack: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onLeave: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
						onLeaveBack: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
					});
					break;
				case "shop":
					shopScrollTrigger = ScrollTrigger.create({
						trigger: `#home-menu-item-${page}`,
						start: "top center",
						end: "bottom center",
						onEnter: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onEnterBack: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onLeave: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
						onLeaveBack: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
					});
					break;
				case "music":
					musicScrollTrigger = ScrollTrigger.create({
						trigger: `#home-menu-item-${page}`,
						start: "top center",
						end: "bottom center",
						onEnter: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onEnterBack: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onLeave: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
						onLeaveBack: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
					});
					break;
				case "about":
					aboutScrollTrigger = ScrollTrigger.create({
						trigger: `#home-menu-item-${page}`,
						start: "top center",
						end: "bottom center",
						onEnter: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onEnterBack: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onLeave: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
						onLeaveBack: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
					});
					break;
				case "news":
					newsScrollTrigger = ScrollTrigger.create({
						trigger: `#home-menu-item-${page}`,
						start: "top center",
						end: "bottom center",
						onEnter: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onEnterBack: () => {
							backgroundSquare.style.backgroundImage = `url("${backgroundImages[page]}")`;
							document.querySelector(`#home-menu-item-${page}`).classList.add("active");
						},
						onLeave: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
						onLeaveBack: () => {
							if (document.querySelector(`#home-menu-item-${page}`) != undefined || document.querySelector(`#home-menu-item-${page}`) != null) {
								document.querySelector(`#home-menu-item-${page}`).classList.remove("active");
							}
						},
					});
					break;
				default:
					break;
			}
		});
		return () => {
			radioScrollTrigger.kill();
			shopScrollTrigger.kill();
			musicScrollTrigger.kill();
			aboutScrollTrigger.kill();
			newsScrollTrigger.kill();
		};
	}, []);

	const onPageLeave = () => {
		window.scroll(0, 0);
	};

	return (
		<div className="body-container">
			<div className="home-menu">
				<div className="pre-menu-item"></div>
				<Link to="/radio" className="home-menu-item" id="home-menu-item-radio" onClick={onPageLeave}>
					<h1 className="cursor-hover">Radio</h1>
				</Link>
				<Link to="/shop" className="home-menu-item" id="home-menu-item-shop" onClick={onPageLeave}>
					<h1 className="cursor-hover">Shop</h1>
				</Link>
				<Link to="/music" className="home-menu-item" id="home-menu-item-music" onClick={onPageLeave}>
					<h1 className="cursor-hover">Music</h1>
				</Link>
				<Link to="/about" className="home-menu-item" id="home-menu-item-about" onClick={onPageLeave}>
					<h1 className="cursor-hover">About</h1>
				</Link>
				<Link to="/news" className="home-menu-item" id="home-menu-item-news" onClick={onPageLeave}>
					<h1 className="cursor-hover">News</h1>
				</Link>
				<div className="pre-menu-item"></div>
			</div>
			<div className="home-menu-background"></div>
		</div>
	);
}
export default Home;
