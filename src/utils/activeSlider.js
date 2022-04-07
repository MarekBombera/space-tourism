const activeSlider = (e, sliderName) => {
	if (!e.target.classList.contains(`${sliderName}${"__navigation-slider"}`)) {
		return;
	}

	e.currentTarget.childNodes.forEach((node) => {
		if (
			node.classList.contains(`${sliderName}${"__navigation-slider--active"}`)
		)
			node.classList.remove(`${sliderName}${"__navigation-slider--active"}`);
	});

	e.target.classList.add(`${sliderName}${"__navigation-slider--active"}`);
};

export default activeSlider;
