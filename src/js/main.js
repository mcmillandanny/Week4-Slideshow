

let slideshow = function(time, selector) {

	
	let $slideshowContainer = document.querySelector(selector);
	let $slides = $slideshowContainer.querySelectorAll(".slide");
	let currentSlideNumber = 0;
	let intervalID;

	if (!$slideshowContainer) {
		console.warn("Couldn't create slideshow, element not found: " + selector)
		return false
	}

	let hideOldSlide = function(){
		let $active = $slideshowContainer.querySelector('.active');
		if ($active) $active.classList.remove('active');
	}

	let showNewSlide = function(){
		
		$slides[currentSlideNumber].classList.add('active');
	}

	let next = function() {
		hideOldSlide()

		currentSlideNumber++;
		if (currentSlideNumber === $slides.length) {
			currentSlideNumber = 0;
		}
		showNewSlide()
	}

	let prev = function () {
		hideOldSlide()

		currentSlideNumber--;

		if (currentSlideNumber < 0) {
			currentSlideNumber = $slides.length - 1;
		}
		showNewSlide()
	}

	let jump = function (slideNum) {
		hideOldSlide();
		
		currentSlideNumber = slideNum;
		
		showNewSlide()
    }

	let stop = function () {
		clearInterval(intervalID)
	}

	let start = function (){
		stop()
		intervalID = setInterval(next, time);
	}
	
	start();

	return {
		// publicly accessible stuff goes here
		next: next,
		stop: stop,
		start: start,
		prev: prev,
		jump: jump
	}

}


