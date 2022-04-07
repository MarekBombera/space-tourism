import React, { useEffect } from "react";
import hurley_img from "../../assets/images/crew/image-douglas-hurley.webp";

const Hurley = ({ setCrewMemberImg }) => {
	useEffect(() => {
		setCrewMemberImg({
			src: hurley_img,
			className: "hurley",
			alt: "Douglas Hurley",
		});
	}, [setCrewMemberImg]);

	return (
		<section className="hurley">
			<div className="crew__heading">
				<h2 className="heading">commander</h2>
				<h1 className="heading">douglas hurley</h1>
			</div>
			<div className="crew__body">
				<p className="body">
					Douglas Gerald Hurley is an American engineer, former Marine Corps
					pilot and former NASA astronaut. He launched into space for the third
					time as commander of Crew Dragon Demo-2.
				</p>
			</div>
		</section>
	);
};

export default Hurley;
