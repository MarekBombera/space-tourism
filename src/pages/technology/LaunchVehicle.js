import React, { useEffect } from "react";
import vehicle_img_landscape from "../../assets/images/technology/image-launch-vehicle-landscape.jpg";
import vehicle_img_portrait from "../../assets/images/technology/image-launch-vehicle-portrait.jpg";

const LaunchVehicle = ({ setTechnologyImg }) => {
	useEffect(() => {
		setTechnologyImg({
			landscape: vehicle_img_landscape,
			portrait: vehicle_img_portrait,
			alt: "WEB-X carrier rocket",
		});
	}, [setTechnologyImg]);

	return (
		<section className="launch-vehicle">
			<div className="technology__terminology">
				<h2 className="subheading">the terminology ...</h2>
			</div>
			<div className="technology__heading">
				<h1 className="heading">launch vehicle</h1>
			</div>
			<div className="technology__body">
				<p className="body">
					A launch vehicle or carrier rocket is a rocket-propelled vehicle used
					to carry a payload from Earth's surface to space, usually to Earth
					orbit or beyond. Our WEB-X carrier rocket is the most powerful in
					operation. Standing 150 metres tall, it's quite an awe-inspiring sight
					on the launch pad!
				</p>
			</div>
		</section>
	);
};

export default LaunchVehicle;
