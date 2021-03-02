import "./scss/style.scss";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";

import Nav from "./Components/nav/nav";
import PasswordPage from "./Components/pages/password/password";

const baseURL = "http://localhost:8080/";

// import pages for router
import Home from "./Components/pages/home/home";
import Radio from "./Components/pages/radio/radio";
import Shop from "./Components/pages/shop/shop";
import News from "./Components/pages/news/news";
import About from "./Components/pages/about/about";
import Music from "./Components/pages/music/music";

function App() {
	let location = useLocation();

	useEffect(() => {
		//adjust nav bar for homepage
		if (location.pathname === "/") {
			document.querySelector(".nav-links").style.display = "none";
			document.querySelector(".radio-player-nav").style.display = "none";
			document.querySelector("nav").style.backgroundColor = "rgba(1,1,1,0)";
		} else {
			document.querySelector(".nav-links").style.display = "flex";
			document.querySelector(".radio-player-nav").style.display = "block";
			document.querySelector("nav").style.backgroundColor = "rgba(1,1,1,1)";
		}
	}, [location]);

	useEffect(() => {
		let mouseCursor = document.querySelector("#cursor");
		function cursor(e) {
			mouseCursor.style.top = e.pageY + "px";
			mouseCursor.style.left = e.pageX + "px";
			if (e.target.classList.contains("cursor-hover")) {
				mouseCursor.querySelector("img").src = "src/images/Cursor-alt.png";
			} else {
				mouseCursor.querySelector("img").src = "src/images/Cursor.png";
			}
		}
		window.addEventListener("mousemove", cursor);
	});

	return (
		<div>
			<Nav />
			<div className="cursor" id="cursor">
				<img src="src/images/Cursor.png" />
			</div>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/radio" exact component={Radio} />
				<Route path="/shop" exact component={Shop} />
				<Route path="/news" exact component={News} />
				<Route path="/about" exact component={About} />
				<Route path="/music" exact component={Music} />
			</Switch>
		</div>
	);
}

render(
	<Router>
		<PasswordPage />
		<App />
	</Router>,
	document.getElementById("root")
);
