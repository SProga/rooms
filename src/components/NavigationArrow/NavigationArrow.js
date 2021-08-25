import React from "react";
import "./NavigationArrow.scss";

const NavigationArrow = (props) => {

	return (
		<div className="navigationArrow">
			<button
				type="button"
				className="navigationArrow__btn"
				onClick={props.previousSlideHandler}>
				<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13 0L1 12l12 12"
						stroke="#FFF"
						fill="none"
						fillRule="evenodd"
					/>
				</svg>
				<span className="sr-only">Show Previous Slide</span>
			</button>
			<button
				type="button"
				className="navigationArrow__btn"
				onClick={props.nextSlideHandler}>
				<svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 0l12 12L1 24"
						stroke="#FFF"
						fill="none"
						fillRule="evenodd"
					/>
				</svg>
				<span className="sr-only">Show Next Slide</span>
			</button>
		</div>
	);
};

export default NavigationArrow;
