import "./Carousel.scss";
import { useRef, useState } from "react";
import CarouselData from "./CarouselData";
import Slide from "./Slide";
import NavigationArrow from "../NavigationArrow/NavigationArrow";

const Carousel = (props) => {
	const track = useRef();

	const [active, setActive] = useState(0);

	const previousSlideHandler = (curr) => {
		if (curr > 0) {
			const slide = Array.from(track.current.children);
			track.current.style.transform = `translateX(-${
				slide[curr - 1].style.left
			})`;
			setActive(curr - 1);
		}
	};
	const nextSlideHandler = (curr) => {
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
			</div>
			<NavigationArrow
				previousSlideHandler={previousSlideHandler.bind(null, active)}
				nextSlideHandler={nextSlideHandler.bind(null, active)}
			/>
		</div>
	);
};

export default Carousel;
