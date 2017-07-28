// Used https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element

export default function doScrolling(elementY, duration) {
	var startingY = window.pageYOffset;
	var diff = elementY - startingY;
	var start;

	window.requestAnimationFrame(function step(timestamp) {
		if (!start) start = timestamp;
		var time = timestamp - start;
		var percent = Math.min(time / duration, 1);

		window.scrollTo(0, startingY + diff * percent);

		if (time < duration) {
			window.requestAnimationFrame(step)
		}
	})
};