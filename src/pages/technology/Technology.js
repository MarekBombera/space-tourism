import React, { useState } from 'react';
import LaunchVehicle from './LaunchVehicle';
import Spaceport from './Spaceport';
import SpaceCapsule from './SpaceCapsule';

import activeSlider from '../../utils/activeSlider';
import useMediaQueryMatch from '../../hooks/useMediaQueryMatch';

import vehicle_img_landscape from '../../assets/images/technology/image-launch-vehicle-landscape.webp';
import vehicle_img_portrait from '../../assets/images/technology/image-launch-vehicle-portrait.webp';

const Technology = () => {
	const [technology, setTechnology] = useState('launchVehicle');
	const [technologyImg, setTechnologyImg] = useState({
		landscape: vehicle_img_landscape,
		portrait: vehicle_img_portrait,
	});

	document.body.className = 'technology-bg-img';

	const changeTechnology = () => {
		switch (technology) {
			case 'launchVehicle':
				return <LaunchVehicle setTechnologyImg={setTechnologyImg} />;
			case 'spaceport':
				return <Spaceport setTechnologyImg={setTechnologyImg} />;
			case 'spaceCapsule':
				return <SpaceCapsule setTechnologyImg={setTechnologyImg} />;

			default:
				return <LaunchVehicle setTechnologyImg={vehicle_img_landscape} />;
		}
	};

	return (
		<>
			<section className="technology">
				<div className="technology__subheading">
					<p className="subheading page-number">03</p>
					<p className="subheading">space launch 101</p>
				</div>
				<div className="technology__main">
					<div className="technology__img">
						{useMediaQueryMatch('desktop') ? (
							<img
								src={technologyImg.portrait}
								alt={technologyImg.alt ? technologyImg.alt : ''}
							/>
						) : (
							<img
								src={technologyImg.landscape}
								alt={technologyImg.alt ? technologyImg.alt : ''}
							/>
						)}
					</div>

					<div className="technology__content">
						<div
							className="technology__navigation"
							onClick={(e) => activeSlider(e, 'technology')}
						>
							<span
								className="technology__navigation-slider technology__navigation-slider--active"
								onClick={() => setTechnology('launchVehicle')}
							>
								1
							</span>
							<span
								className="technology__navigation-slider"
								onClick={() => setTechnology('spaceport')}
							>
								2
							</span>
							<span
								className="technology__navigation-slider"
								onClick={() => setTechnology('spaceCapsule')}
							>
								3
							</span>
						</div>

						{changeTechnology()}
					</div>
				</div>
			</section>
		</>
	);
};

export default Technology;
