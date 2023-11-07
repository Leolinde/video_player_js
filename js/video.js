var video;
video = document.getElementById("player1")
var volumeSlider = document.getElementById("slider")
document.querySelector("#volume").innerHTML = "100%"




window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	video.removeAttribute('loop');
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volumeSpan = document.querySelector('#volume'); 
	var volume = video.volume * 100; 
	volumeSpan.textContent = volume + '%';
});

document.querySelector("#pause").addEventListener("click", () => {
	console.log("pause")
	video.pause()	
})

document.querySelector("#slower").addEventListener("click", () => {
	video.playbackRate -= 0.10
	console.log(video.playbackRate)
}) 

document.querySelector("#faster").addEventListener("click", () => {
	video.playbackRate += 0.1
	console.log(video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", () => {
	if (video.currentTime + 10 >= video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10
	}
	console.log(video.currentTime)
})

document.querySelector("#mute").addEventListener("click", () => {
	if(video.muted == false){
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else{
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}

})

document.querySelector("#slider").addEventListener("input", () => {
	video.volume = volumeSlider.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
})

document.querySelector("#vintage").addEventListener("click", () => {
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", () => {
	video.classList.remove("oldSchool")
})

