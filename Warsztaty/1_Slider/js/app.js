document.addEventListener("DOMContentLoaded", function () {
	var prev = document.querySelector('#prevPicture');
	var next = document.querySelector('#nextPicture');
	var images = document.querySelectorAll('li');
	
	var start = 0;

	images[start].classList.add('visible');

	var switching = function () {
		images[start].classList.remove('visible');

		if (this === prev) {
			start -= 1;
		} else if (this == next) {
			start += 1;
		};

		if (start === images.length) {
			start = 0;
		} else if (start < 0) {
			start = images.length - 1;
		}
		images[start].classList.add('visible');
	};
	prev.addEventListener("click", switching);
	next.addEventListener("click", switching);
});

