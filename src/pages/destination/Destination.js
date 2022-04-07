import React, { useState } from "react";
import Moon from "./Moon";
import Mars from "./Mars";
import Europa from "./Europa";
import Titan from "./Titan";

import activeSlider from "../../utils/activeSlider";

import moon_img from "../../assets/images/destination/image-moon.webp";

const Destination = () => {
	const [planet, setPlanet] = useState("moon");
	const [planetImg, setPlanetImg] = useState({ src: moon_img });

	document.body.className = "destination-bg-img";

	const changePlanet = () => {
		switch (planet) {
			case "moon":
				return <Moon setPlanetImg={setPlanetImg} />;
			case "mars":
				return <Mars setPlanetImg={setPlanetImg} />;
			case "europa":
				return <Europa setPlanetImg={setPlanetImg} />;
			case "titan":
				return <Titan setPlanetImg={setPlanetImg} />;

			default:
				return <Moon setPlanetImg={moon_img} />;
		}
	};

	return (
		<>
			<section className="destination">
				<div className="destination__subheading">
					<p className="subheading page-number">01</p>
					<p className="subheading">pick your destination</p>
				</div>
				<div className="destination__main">
					<div className="destination__planet-img">
						<img src={planetImg.src} alt={planetImg.alt ? planetImg.alt : ""} />
					</div>
					<div className="destination__content">
						<div
							className="destination__navigation"
							onClick={(e) => activeSlider(e, "destination")}
						>
							<span
								onClick={() => setPlanet("moon")}
								className="destination__navigation-slider destination__navigation-slider--active subheading"
							>
								moon
							</span>
							<span
								onClick={() => setPlanet("mars")}
								className="destination__navigation-slider subheading"
							>
								mars
							</span>
							<span
								onClick={() => setPlanet("europa")}
								className="destination__navigation-slider subheading"
							>
								europa
							</span>
							<span
								onClick={() => setPlanet("titan")}
								className="destination__navigation-slider subheading"
							>
								titan
							</span>
						</div>
						{changePlanet()}
					</div>
				</div>
			</section>
		</>
	);
};

export default Destination;
