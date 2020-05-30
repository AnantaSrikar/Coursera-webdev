(function (window) {

	var helloSpeaker = {}
	helloSpeaker.speak = speak;

	var speakWord = "Hello";

	function speak(name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;
})(window);