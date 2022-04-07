import React, { useEffect } from "react";
import mars_img from "../../assets/images/destination/image-mars.webp";

const Mars = ({ setPlanetImg }) => {
	useEffect(() => {
		setPlanetImg({ src: mars_img, alt: "Mars" });
	}, [setPlanetImg]);

	return (
		<section className="mars">
			<div className="destination__heading">
				<h1 className="heading">mars</h1>
			</div>
			<div className="destination__body">
				<p className="body">
					Don’t forget to pack your hiking boots. You’ll need them to tackle
					Olympus Mons, the tallest planetary mountain in our solar system. It’s
					two and a half times the size of Everest!
				</p>
			</div>
			<div className="destination__otherInfo">
				<div className="destination__distance">
					<p className="subheading">avg. distance</p>
					<h1 className="heading">225 mil. km</h1>
				</div>
				<div className="destination__travelTime">
					<p className="subheading">est. travel time</p>
					<h1 className="heading">9 months</h1>
				</div>
			</div>
		</section>
	);
};

export default Mars;
