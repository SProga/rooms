import React from "react";
import Carousel from "../Carousel/Carousel";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

const Header = (props) => {
	return (
		<header className="header">
			<Navigation />
			<Carousel />
		</header>
	);
};

export default Header;
