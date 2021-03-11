import emailjs from "emailjs-com";
import React, { useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

function ContactForm() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_gky2s4m", "template_gp695qk", e.target, "user_GWGj6OT9Hqz2uFEH3Xe88").then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		gsap.to(".thank-you", {
			opacity: 1,
			duration: 1,
			delay: 0.5,
		});

		setTimeout(() => {
			location.reload();
		}, 3000);
	}

	return (
		<div className="contact-form">
			<div className="thank-you">
				<img src="src/images/MF_LOGOS-11.png" />
				<p>Thank you for your submission. You will be redirected shortly...</p>
			</div>
			<form id="contact-form-1" onSubmit={sendEmail}>
				<input placeholder="name" id="name" type="text" name="user_name" required />
				<input placeholder="email" id="email" type="email" name="user_email" required />
				<label>
					<p className="contact-label">Subject:</p>
					<select id="subject" name="subject" placeholder="subject" name="subject" required>
						<option value="Reach out">Reach out</option>
						<option value="Make music">Make Music</option>
						<option value="Fuck off">Fuck off</option>
					</select>
				</label>
				<textarea placeholder="Your message" id="message" rows="1" name="message" required />
				<button type="submit" value="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
export default ContactForm;
