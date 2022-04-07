import React, { useEffect } from 'react';
import spaceport_img_landscape from '../../assets/images/technology/image-spaceport-landscape.webp';
import spaceport_img_portrait from '../../assets/images/technology/image-spaceport-portrait.webp';

const Spaceport = ({ setTechnologyImg }) => {
	useEffect(() => {
		setTechnologyImg({
			landscape: spaceport_img_landscape,
			portrait: spaceport_img_portrait,
			alt: 'Spaceport at Cape Canaveral',
		});
	}, [setTechnologyImg]);

	return (
		<section className="spaceport">
			<div className="technology__terminology">
				<h2 className="subheading">the terminology ...</h2>
			</div>
			<div className="technology__heading">
				<h1 className="heading">spaceport</h1>
			</div>
			<div className="technology__body">
				<p className="body">
					A spaceport or cosmodrome is a site for launching (or receiving)
					spacecraft, by analogy to the seaport for ships or airport for
					aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
					situated to take advantage of the Earth’s rotation for launch.
				</p>
			</div>
		</section>
	);
};

export default Spaceport;
