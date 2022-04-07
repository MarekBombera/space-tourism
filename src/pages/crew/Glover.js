import React, { useEffect } from "react";
import glover_img from "../../assets/images/crew/image-victor-glover.webp";

const Glover = ({ setCrewMemberImg }) => {
	useEffect(() => {
		setCrewMemberImg({
			src: glover_img,
			className: "glover",
			alt: "Victor Glover",
		});
	}, [setCrewMemberImg]);

	return (
		<section className="glover">
			<div className="crew__heading">
				<h2 className="heading">pilot</h2>
				<h1 className="heading">victor glover</h1>
			</div>
			<div className="crew__body">
				<p className="body">
					Pilot on the first operational flight of the SpaceX Crew Dragon to the
					International Space Station. Glover is a commander in the U.S. Navy
					where he pilots an F/A-18.He was a crew member of Expedition 64, and
					served as a station systems flight engineer.
				</p>
			</div>
		</section>
	);
};

export default Glover;
