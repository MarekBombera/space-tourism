import React, { useEffect } from "react";
import shuttleworth_img from "../../assets/images/crew/image-mark-shuttleworth.webp";

const Shuttleworth = ({ setCrewMemberImg }) => {
	useEffect(() => {
		setCrewMemberImg({
			src: shuttleworth_img,
			className: "shuttleworth",
			alt: "Mark Shuttleworth",
		});
	}, [setCrewMemberImg]);

	return (
		<section className="shuttleworth">
			<div className="crew__heading">
				<h2 className="heading">mission specialist</h2>
				<h1 className="heading">mark shuttleworth</h1>
			</div>
			<div className="crew__body">
				<p className="body">
					Mark Richard Shuttleworth is the founder and CEO of Canonical, the
					company behind the Linux-based Ubuntu operating system. Shuttleworth
					became the first South African to travel to space as a space tourist.
				</p>
			</div>
		</section>
	);
};

export default Shuttleworth;
