import React, { useState } from "react";
import Hurley from "./Hurley";
import Shuttleworth from "./Shuttleworth";
import Glover from "./Glover";
import Ansari from "./Ansari";

import activeSlider from "../../utils/activeSlider";

import hurley_img from "../../assets/images/crew/image-douglas-hurley.webp";

const Crew = () => {
	const [crewMember, setCrewMember] = useState("hurley");
	const [crewMemberImg, setCrewMemberImg] = useState({ src: hurley_img });

	document.body.className = "crew-bg-img";

	const changeCrew = () => {
		switch (crewMember) {
			case "hurley":
				return <Hurley setCrewMemberImg={setCrewMemberImg} />;
			case "shuttleworth":
				return <Shuttleworth setCrewMemberImg={setCrewMemberImg} />;
			case "glover":
				return <Glover setCrewMemberImg={setCrewMemberImg} />;
			case "ansari":
				return <Ansari setCrewMemberImg={setCrewMemberImg} />;
			default:
				return <Hurley setCrewMemberImg={hurley_img} />;
		}
	};

	return (
		<>
			<section className="crew">
				<div className="crew__subheading">
					<p className="subheading page-number">02</p>
					<p className="subheading">meet your crew</p>
				</div>
				<div className="crew__main">
					<div className="crew__member-img">
						<img
							className={crewMemberImg.className ? crewMemberImg.className : ""}
							src={crewMemberImg.src}
							alt={crewMemberImg.alt ? crewMemberImg.alt : ""}
						/>
					</div>
					<div className="crew__content">
						<div
							className="crew__navigation"
							onClick={(e) => activeSlider(e, "crew")}
						>
							<span
								className="crew__navigation-slider crew__navigation-slider--active"
								onClick={() => setCrewMember("hurley")}
							></span>
							<span
								className="crew__navigation-slider"
								onClick={() => setCrewMember("shuttleworth")}
							></span>
							<span
								className="crew__navigation-slider"
								onClick={() => setCrewMember("glover")}
							></span>
							<span
								className="crew__navigation-slider"
								onClick={() => setCrewMember("ansari")}
							></span>
						</div>
						{changeCrew()}
					</div>
				</div>
			</section>
		</>
	);
};

export default Crew;
