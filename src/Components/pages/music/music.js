import React, { useState } from "react";
import MusicTrack from "./music-project/music-project";

function Music() {
	return (
		<div className="body-container">
			<MusicTrack
				trackTitle="MF001"
				albumArt="src/images/album art/EP001.jpg"
				artist="Johnny Sum"
				spotify="https://open.spotify.com/album/0yciaYqkrbB2Rewjrk0OwM?si=XIzHPio6TDueROQkcGpy_g"
				apple="https://music.apple.com/us/browse"
			/>
			<MusicTrack
				trackTitle="MF002"
				albumArt="src/images/album art/EP003.png"
				artist="Sweater"
				press={true}
				spotify="https://open.spotify.com/album/0yciaYqkrbB2Rewjrk0OwM?si=XIzHPio6TDueROQkcGpy_g"
				apple="https://music.apple.com/us/browse"
			/>
			<MusicTrack
				trackTitle="MF003"
				albumArt="src/images/album art/Red Albbum.png"
				artist="Johnny Sum"
				spotify="https://open.spotify.com/album/0yciaYqkrbB2Rewjrk0OwM?si=XIzHPio6TDueROQkcGpy_g"
				apple="https://music.apple.com/us/browse"
			/>
		</div>
	);
}
export default Music;
