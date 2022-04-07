import React from 'react';
import { NavLink } from 'react-router-dom';

import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import useMediaQueryMatch from '../hooks/useMediaQueryMatch';

import logo from '../assets/images/shared/logo.svg';

const Header = () => {
	return (
		<header className="header">
			<NavLink to="/" className="NavLink--no-default-style">
				<img className="header__logo" src={logo} alt="" />
			</NavLink>
			<span className="header-decoration"></span>
			{useMediaQueryMatch('phone') ? <MobileNavigation /> : <Navigation />}
		</header>
	);
};

export default Header;
