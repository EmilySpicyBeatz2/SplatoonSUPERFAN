// use variables to make your code shorter
var a;
var b;
var c;
var d;

// declare your functions
function switchPic() {
  document.getElementById("imgTop").src = "images/Alterna-Hero.png";
  document.getElementById("boxL-B").classList.add("dark-blue");
  document.getElementById("boxL-B").classList.remove("light-blue");
  document.getElementById("bum4-play").play();
}

function switchSecondPic() {
  document.getElementById("imgBottom").src = "images/Alterna-Ship.png";
  document.getElementById("boxL-B-2").classList.add("dark-blue-two");
  document.getElementById("boxL-B-2").classList.remove("light-blue-two");
  document.getElementById("bum4-play").play();
}

//https://www.w3schools.com/jsref/met_audio_play.asp
function playSong() {
  document.getElementById("click-play").play();
}

function resetAll() {
  document.getElementById("imgTop").src = "images/Alterna-BL.png";
  document.getElementById("boxL-B").classList.remove("dark-blue");
  document.getElementById("boxL-B").classList.add("light-blue");
  document.getElementById("imgBottom").src = "images/Alterna-F.png";
  document.getElementById("boxL-B-2").classList.remove("dark-blue-two");
  document.getElementById("boxL-B-2").classList.add("light-blue-two");
  document.getElementById("click-play").remove();
  document.getElementById("stripped").src = "images/HGStripped.jpg";
}

function strippedToNeo() {
  document.getElementById("stripped").src = "images/HGNeo.jpg";
  document.getElementById("clear-play").play();
}
