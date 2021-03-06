import React from "react";
import "./About.scss";
import Dark from "../../images/image-about-dark.jpg";
import Light from "../../images/image-about-light.jpg";

const About = () => {
	return (
		<section className="about">
			<div className="about-left">
				<figure className="about-left-wrapper">
					<img
						className="about-left-wrapper-img"
						src={Dark}
						alt="about our darker chairs"
					/>
				</figure>
			</div>
			<div className="about-center">
				<h2>About our furniture</h2>
				<p>
					Our multifunctional collection blends design and function to suit your
					individual taste. Make each room unique, or pick a cohesive theme that
					best express your interests and what inspires you. Find the furniture
					pieces you need, from traditional to contemporary styles or anything
					in between. Product specialists are available to help you create your
					dream space.
				</p>
			</div>
			<div className="about-right">
				<figure className="about-right-wrapper">
					<img
						className="about-right-wrapper-img"
						src={Light}
						alt="about our light chairs"
					/>
				</figure>
			</div>
		</section>
	);
};

export default About;
