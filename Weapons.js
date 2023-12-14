function imagen() {

	image = document.getElementById("media");

	if(image.src.match("tactical")) {
		image.src = "Equipment.png";

	} else {
		image.src = "tactical.jpg";
	}
}