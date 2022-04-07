import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useClickOutside from '../hooks/useClickOutside';

import burgerMenu from '../assets/images/shared/icon-hamburger.svg';
import closeIcon from '../assets/images/shared/icon-close.svg';

const Navigation = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	const domNodeRef = useClickOutside(() => {
		toggleMenu();
	});

	if (!openMenu) {
		return <img onClick={() => toggleMenu()} src={burgerMenu} alt="" />;
	}

	return (
		<>
			<div className="mobile-nav" ref={domNodeRef}>
				<div className="mobile-nav__close-icon" onClick={() => toggleMenu()}>
					<img src={closeIcon} alt="" />
				</div>
				<div className="mobile-nav__links">
					<NavLink to="/" className="NavLink--no-default-style">
						<div
							className="mobile-nav__links-link"
							onClick={() => toggleMenu()}
						>
							<p className="subheading page-number">00</p>
							<p className="subheading">home</p>
						</div>
					</NavLink>

					<NavLink
						to="/destination"
						className="NavLink--no-default-style"
						onClick={() => toggleMenu()}
					>
						<div className="mobile-nav__links-link">
							<p className="subheading page-number">01</p>
							<p className="subheading">destination</p>
						</div>
					</NavLink>

					<NavLink
						to="/crew"
						className="NavLink--no-default-style"
						onClick={() => toggleMenu()}
					>
						<div className="mobile-nav__links-link">
							<p className="subheading page-number">02</p>
							<p className="subheading">crew</p>
						</div>
					</NavLink>

					<NavLink
						to="/technology"
						className="NavLink--no-default-style"
						onClick={() => toggleMenu()}
					>
						<div className="mobile-nav__links-link">
							<p className="subheading page-number">03</p>
							<p className="subheading">technology</p>
						</div>
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Navigation;
