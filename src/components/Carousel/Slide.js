import "./Carousel.scss";
import React, { useEffect, useRef } from "react";
import Arrow from "../../images/icon-arrow.svg";

const Slide = (props) => {
	const slideRef = useRef();
	const index = props.index || 0;

	useEffect(() => {
		const slideWidth = slideRef.current.getBoundingClientRect().width;
		const setSlidePosition = (slide, index) => {
			slide.style.left = index * slideWidth + "px";
		};
		setSlidePosition(slideRef.current, index);
	}, [index]);
	console.log("re-rendering");

	return (
		<li className={`carousel__slide ${props.active}`} ref={slideRef}>
			<img
				className="carousel__slide-img"
				srcSet={`${props.src.mobile} 375w,
               ${props.src.desktop} 840w`}
				sizes="(max-width: 1440px) 375px,
                840px"
				src={`${props.src.mobile}`}
				alt=""
			/>

			<div className="carousel__slide-content">
				<h1 className="carousel__slide-title">{props.title}</h1>
				<p className="carousel__slide-text">{props.text}</p>
				<button className="carousel__btn">
					SHOP NOW{" "}
					<span className="carousel__arrow">
						<img src={Arrow} alt="shop now" />
					</span>
				</button>
			</div>
		</li>
	);
};

export default Slide;
