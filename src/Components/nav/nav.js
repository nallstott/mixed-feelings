import React, { useState, useLayoutEffect } from "react";
import { Link, BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import RadioPlayerNav from "../../Components/radio-player-nav/radioPlayerNav";

function Nav() {
	const onPageLeave = () => {
		window.scroll(0, 0);
	};

	useLayoutEffect(() => {
		gsap.from(".logo", {
			y: 30,
			opacity: 0,
			duration: 1,
			ease: "circ.out",
		});
		gsap.from(".radio-player-nav", {
			y: 30,
			opacity: 0,
			duration: 1,
			ease: "circ.out",
			delay: 0.3,
		});

		const navLinks = document.querySelectorAll(".nav-link");
		let iterator = 0.3;
		navLinks.forEach((link) => {
			gsap.from(link, {
				y: 30,
				opacity: 0,
				duration: 1,
				ease: "circ.out",
				delay: iterator,
			});
			iterator = iterator + 0.2;
		});
	}, [window.onload]);

	return (
		<nav>
			<Link to="/" onClick={onPageLeave}>
				<img src="src/images/brand/MF-logo-main.png" className="cursor-hover logo" />
			</Link>
			<RadioPlayerNav />
			<div className="nav-links">
				<Link to="/radio" className="nav-link cursor-hover" onClick={onPageLeave}>
					Radio
				</Link>
				<Link to="/shop" className="nav-link cursor-hover" onClick={onPageLeave}>
					Shop
				</Link>
				<Link to="/news" className="nav-link cursor-hover" onClick={onPageLeave}>
					News
				</Link>
				<Link to="/about" className="nav-link cursor-hover" onClick={onPageLeave}>
					About
				</Link>
				<Link to="/music" className="nav-link cursor-hover" onClick={onPageLeave}>
					Music
				</Link>
				<i className="fas fa-shopping-cart nav-link cursor-hover"></i>
			</div>
		</nav>
	);
}

export default Nav;
