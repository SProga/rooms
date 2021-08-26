import { useLayoutEffect, useState } from "react";
import debounce from "../util/debounce";

function useElementDistance(el = null) {
	console.log("this is what is passed in ", el);
	const [size, setSize] = useState(0);
	useLayoutEffect(() => {
		function updateSize() {
			setSize(el.getBoundingClientRect().width);
		}
		window.addEventListener("resize", debounce(updateSize, 0));
		return () => window.removeEventListener("resize", updateSize);
	}, [el]);
	return size;
}

export default useElementDistance;
