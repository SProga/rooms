import "./Carousel.scss";
import React, { useRef, useState } from "react";
import CarouselData from "./CarouselData";
import Slide from "./Slide";
import NavigationArrow from "../NavigationArrow/NavigationArrow";

const Carousel = React.memo((props) => {
	const track = useRef();
	const [active, setActive] = useState(0);

	const previousSlideHandler = (curr, track) => {
		if (curr > 0) {
			const slide = Array.from(track.current.children);
			track.current.style.transform = `translateX(-${
				slide[curr - 1].style.left
			})`;
			setActive(curr - 1);
		}
	};
	const nextSlideHandler = (curr, track) => {
		if (curr < track.current.children.length - 1) {
			const slide = Array.from(track.current.children);
			track.current.style.transform = `translateX(-${
				slide[curr + 1].style.left
			})`;
			setActive(curr + 1);
		}
	};

	const Slides = CarouselData.map((slide, index) => {
		return (
			<Slide
				active={index === active ? "active-slide" : ""}
				key={slide.id}
				title={slide.title}
				text={slide.text}
				src={slide.src}
				index={index}
			/>
		);
	});
	return (
		<div className="carousel">
			<div className="carousel__track-container">
				<ul className="carousel__track" ref={track}>
					{Slides}
				</ul>
				<NavigationArrow
					previousSlideHandler={previousSlideHandler.bind(null, active, track)}
					nextSlideHandler={nextSlideHandler.bind(null, active, track)}
				/>
			</div>
		</div>
	);
});

export default Carousel;
