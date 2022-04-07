import React, { useEffect } from "react";
import moon_img from "../../assets/images/destination/image-moon.webp";

const Moon = ({ setPlanetImg }) => {
	useEffect(() => {
		setPlanetImg({ src: moon_img, alt: "Moon" });
	}, [setPlanetImg]);

	return (
		<section className="moon">
			<div className="destination__heading">
				<h1 className="heading">moon</h1>
			</div>
			<div className="destination__body">
				<p className="body">
					See our planet as you’ve never seen it before. A perfect relaxing trip
					away to help regain perspective and come back refreshed. While you’re
					there, take in some history by visiting the Luna 2 and Apollo 11
					landing sites.
				</p>
			</div>
			<div className="destination__otherInfo">
				<div className="destination__distance">
					<p className="subheading">avg. distance</p>
					<h1 className="heading">384,400 km</h1>
				</div>
				<div className="destination__travelTime">
					<p className="subheading">est. travel time</p>
					<h1 className="heading">3 days</h1>
				</div>
			</div>
		</section>
	);
};

export default Moon;
