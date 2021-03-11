import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gsap } from "gsap";

import ContactForm from "../../contact-form/contact-form";

function About() {
	return (
		<div className="body-container">
			<ContactForm />
		</div>
	);
}
export default About;
