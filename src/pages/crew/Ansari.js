import React, { useEffect } from "react";
import ansari_img from "../../assets/images/crew/image-anousheh-ansari.webp";

const Ansari = ({ setCrewMemberImg }) => {
	useEffect(() => {
		setCrewMemberImg({
			src: ansari_img,
			className: "ansari",
			alt: "Anousheh Ansari",
		});
	}, [setCrewMemberImg]);

	return (
		<section className="ansari">
			<div className="crew__heading">
				<h2 className="heading">flight engineer</h2>
				<h1 className="heading">anousheh ansari</h1>
			</div>
			<div className="crew__body">
				<p className="body">
					Anousheh Ansari is an Iranian American engineer and co-founder of
					Prodea Systems. Ansari was the fourth self-funded space tourist, the
					first self-funded woman to fly to the ISS, and the first Iranian in
					space.
				</p>
			</div>
		</section>
	);
};

export default Ansari;
