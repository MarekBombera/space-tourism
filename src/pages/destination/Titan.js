import React, { useEffect } from "react";
import titan_img from "../../assets/images/destination/image-titan.webp";

const Titan = ({ setPlanetImg }) => {
	useEffect(() => {
		setPlanetImg({ src: titan_img, alt: "Titan" });
	}, [setPlanetImg]);

	return (
		<section className="titan">
			<div className="destination__heading">
				<h1 className="heading">titan</h1>
			</div>
			<div className="destination__body">
				<p className="body">
					The only moon known to have a dense atmosphere other than Earth, Titan
					is a home away from home (just a few hundred degrees colder!). As a
					bonus, you get striking views of the Rings of Saturn.
				</p>
			</div>
			<div className="destination__otherInfo">
				<div className="destination__distance">
					<p className="subheading">avg. distance</p>
					<h1 className="heading">1.6 bil. km</h1>
				</div>
				<div className="destination__travelTime">
					<p className="subheading">est. travel time</p>
					<h1 className="heading">7 years</h1>
				</div>
			</div>
		</section>
	);
};

export default Titan;
