import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<div className="navigation__links">
				<NavLink to="/" className="NavLink--no-default-style NavLink--active">
					<div className="navigation__links-link">
						<p className="subheading page-number">00</p>
						<p className="subheading">home</p>
					</div>
				</NavLink>

				<NavLink
					to="/destination"
					className="NavLink--no-default-style NavLink--active"
				>
					<div className="navigation__links-link">
						<p className="subheading page-number">01</p>
						<p className="subheading">destination</p>
					</div>
				</NavLink>

				<NavLink
					to="/crew"
					className="NavLink--no-default-style NavLink--active"
				>
					<div className="navigation__links-link">
						<p className="subheading page-number">02</p>
						<p className="subheading">crew</p>
					</div>
				</NavLink>

				<NavLink
					to="/technology"
					className="NavLink--no-default-style NavLink--active"
				>
					<div className="navigation__links-link">
						<p className="subheading page-number">03</p>
						<p className="subheading">technology</p>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default Navigation;
