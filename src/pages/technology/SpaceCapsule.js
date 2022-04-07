import React, { useEffect } from 'react';
import capsule_img_landscape from '../../assets/images/technology/image-space-capsule-landscape.webp';
import capsule_img_portrait from '../../assets/images/technology/image-space-capsule-portrait.webp';

const SpaceCapsule = ({ setTechnologyImg }) => {
	useEffect(() => {
		setTechnologyImg({
			landscape: capsule_img_landscape,
			portrait: capsule_img_portrait,
			alt: 'Dragon Capsule',
		});
	}, [setTechnologyImg]);

	return (
		<section className="space-capsule">
			<div className="technology__terminology">
				<h2 className="subheading">the terminology ...</h2>
			</div>
			<div className="technology__heading">
				<h1 className="heading">space capsule</h1>
			</div>
			<div className="technology__body">
				<p className="body">
					A space capsule is an often-crewed spacecraft that uses a blunt-body
					reentry capsule to reenter the Earth's atmosphere without wings. Our
					capsule is where you'll spend your time during the flight. It includes
					a space gym, cinema, and plenty of other activities to keep you
					entertained.
				</p>
			</div>
		</section>
	);
};

export default SpaceCapsule;
