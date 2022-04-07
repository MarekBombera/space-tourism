import React, { useEffect } from "react";
import europa_img from "../../assets/images/destination/image-europa.webp";

const Europa = ({ setPlanetImg }) => {
	useEffect(() => {
		setPlanetImg({ src: europa_img, alt: "Europa" });
	}, [setPlanetImg]);

	return (
		<section className="europa">
			<div className="destination__heading">
				<h1 className="heading">europa</h1>
			</div>
			<div className="destination__body">
				<p className="body">
					The smallest of the four Galilean moons orbiting Jupiter, Europa is a
					winter lover’s dream. With an icy surface, it’s perfect for a bit of
					ice skating, curling, hockey, or simple relaxation in your snug
					wintery cabin.
				</p>
			</div>
			<div className="destination__otherInfo">
				<div className="destination__distance">
					<p className="subheading">avg. distance</p>
					<h1 className="heading">628 mil. km</h1>
				</div>
				<div className="destination__travelTime">
					<p className="subheading"> est. travel time</p>
					<h1 className="heading">3 years</h1>
				</div>
			</div>
		</section>
	);
};

export default Europa;
