import "./Carousel.scss";
import React, { useEffect, useRef } from "react";

const Slide = React.memo((props) => {
	const slideRef = useRef();
	const index = props.index || 0;

	useEffect(() => {
		const slideWidth = slideRef.current.getBoundingClientRect().width;
		const setSlidePosition = (slide, index) => {
			slide.style.left = index * slideWidth + "px";
		};
		setSlidePosition(slideRef.current, index);
	}, [index]);

	return (
		<li className={`carousel__slide ${props.active}`} ref={slideRef}>
			<img className="carousel__slide-img" src={props.src} alt="" />
			<div className="carousel__slide-content">
				<h1 className="carousel__slide-title">{props.title}</h1>
				<p className="carousel__slide-text">{props.text}</p>
			</div>
		</li>
	);
});

export default Slide;
