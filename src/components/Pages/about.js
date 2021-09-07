import React from "react";
import profilePicture from "../../../static/assets/images/bio/AllMenDie.png";

export default function () {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: "url(" + profilePicture + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="right-column">
				This is where my bio is gonna go Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Suspendisse dignissim tristique
				velit id hendrerit. In finibus condimentum bibendum. Nam
				sollicitudin ante eget tempus imperdiet. Aenean feugiat interdum
				turpis vel dictum. Vestibulum ornare ante odio, vel vehicula
				enim accumsan vel.
			</div>
		</div>
	);
}
