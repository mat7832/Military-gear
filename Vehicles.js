function imagen() {

	image = document.getElementById("media");

	if(image.src.match("vehiclebody2")) {
		image.src = "Vehiclebody.jpg";

	} else {
		image.src = "vehiclebody2.jpg";
	}
}