var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.pause();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	let volume = document.getElementById("volume");
	let slidebar = document.getElementById("slider");

	volume.innerHTML = slidebar.value + "%";
	volume_loudness = slidebar.value / 100;
	video.volume = volume_loudness;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log('New Speed is ' + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.95;
	console.log('New Speed is ' + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	let current_location = video.currentTime;
	console.log("Original Location " + current_location);

	current_location += 15;

	if (current_location >= 68.92){
		current_location = 0;
		video.currentTime = current_location;
		console.log("Going back to beginning")
		console.log("New Location " + current_location)
	}
	else{
		video.currentTime = current_location;
		console.log("New Location " + current_location)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	let mute_button = document.getElementById("mute");
	if (mute_button.innerHTML == "Mute") {
		mute_button.innerHTML = "Unmute";
		video.muted = true;
	}
	else if (mute_button.innerHTML == "Unmute") {
		mute_button.innerHTML = "Mute";
		video.muted = false;
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	let volume = document.getElementById("volume");
	let slidebar = document.getElementById("slider");

	volume.innerHTML = slidebar.value + "%";
	volume_loudness = slidebar.value / 100;
	video.volume = volume_loudness;
	console.log(volume_loudness)
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

