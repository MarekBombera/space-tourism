import React from "react";
import { NavLink } from "react-router-dom";

const Homepage = () => {
	document.body.className = "homepage-bg-img";

	return (
		<>
			<section className="home">
				<div className="home__main">
					<div className="home__subheading">
						<p className="subheading">so, you want to travel to</p>
					</div>
					<div className="home__heading">
						<h1 className="heading">space</h1>
					</div>
					<div className="home__body">
						<p className="body">
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we’ll give you a truly out of
							this world experience!
						</p>
					</div>
				</div>
				<NavLink to="/destination" className="NavLink--no-default-style">
					<div className="home__explore">
						<p className="heading">explore</p>
					</div>
				</NavLink>
			</section>
		</>
	);
};

export default Homepage;
