"use strict";

var slideshow = function slideshow(time, selector) {

	var $slideshowContainer = document.querySelector(selector);
	var $slides = $slideshowContainer.querySelectorAll(".slide");
	var currentSlideNumber = 0;
	var intervalID = void 0;

	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector);
		return false;
	}

	var hideOldSlide = function hideOldSlide() {
		var $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');
	};

	var showNewSlide = function showNewSlide() {

		$slides[currentSlideNumber].classList.add('active');
	};

	var next = function next() {
		hideOldSlide();

		currentSlideNumber++;
		if (currentSlideNumber === $slides.length) {
			currentSlideNumber = 0;
		}
		showNewSlide();
	};

	var prev = function prev() {
		hideOldSlide();

		currentSlideNumber--;

		if (currentSlideNumber < 0) {
			currentSlideNumber = $slides.length - 1;
		}
		showNewSlide();
	};

	var jump = function jump(slideNum) {
		hideOldSlide();

		currentSlideNumber = slideNum;

		showNewSlide();
	};

	var stop = function stop() {
		clearInterval(intervalID);
	};

	var start = function start() {
		stop();
		intervalID = setInterval(next, time);
	};

	start();

	return {
		// publicly accessible stuff goes here
		next: next,
		stop: stop,
		start: start,
		prev: prev,
		jump: jump
	};
};
//# sourceMappingURL=main.js.map
