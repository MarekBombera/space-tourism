import { useState, useEffect } from "react";

const useMediaQueryMatch = (mediaQuery) => {
	const [mediaMatch, setMediaMatch] = useState(null);

	useEffect(() => {
		const breakpoints = (mediaQuery) => {
			switch (mediaQuery) {
				case "phone":
					return "(max-width: 766px)";
				case "tablet":
					return "(min-width: 767px)";
				case "desktop":
					return "(min-width: 1365px)";
				default:
					return mediaQuery;
			}
		};
		const matchMediaAPI = window.matchMedia(breakpoints(mediaQuery));
		setMediaMatch(matchMediaAPI.matches);

		const updateScreenSize = (e) => {
			setMediaMatch(e.matches);
		};

		matchMediaAPI.addEventListener("change", updateScreenSize);
		return () => {
			matchMediaAPI.removeEventListener("change", updateScreenSize);
		};
	}, [mediaMatch, mediaQuery]);

	return mediaMatch;
};

export default useMediaQueryMatch;
