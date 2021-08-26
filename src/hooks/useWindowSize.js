import { useLayoutEffect, useState } from "react";
import debounce from "../util/debounce";

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", debounce(updateSize, 0));
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

export default useWindowSize;
