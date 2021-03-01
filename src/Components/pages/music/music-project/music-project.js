import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

function MusicTrack(props) {
	const isPress = () => {
		if (props.press === true) {
			return "block";
		} else {
			return "none";
		}
	};

	return (
		<div className="music-track">
			<div className="title">{props.trackTitle}</div>
			<div className="album-art">
				<img src="src/images/Press Sticker.png" className="press-sticker" style={{ display: isPress() }} />
				<img src={props.albumArt} />
			</div>
			<div className="actions">
				<a href={props.spotify} className="spotify-link action-link" target="_blank">
					<img src="src/images/Spotify.png" className="cursor-hover" />
				</a>
				<a href={props.apple} className="apple-link action-link" target="_blank">
					<img src="src/images/Apple Music.png" className="cursor-hover" />
				</a>
				<a href="#" className="shop-link action-link">
					<img src="src/images/Add to cart.png" className="cursor-hover" />
				</a>
			</div>
			<div className="details">
				<div className="artist">{props.artist}</div>
				<p>
					Power House
					<br />
					Give Me A Release
				</p>
			</div>
		</div>
	);
}
export default MusicTrack;
