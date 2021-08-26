const debounce = (fn, delay) => {
	let timeoutID; //close this inside of the returned function
	return (...args) => {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}
		timeoutID = setTimeout(() => {
			fn(...args);
		}, delay);
	};
};

export default debounce;
