var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

css.textContent="linear-gradient(to right, red , yellow)";

var changer = function() {
body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	 + ")";

	 css.textContent = body.style.background + ";";
}

button.addEventListener("click", function() {
	color1.setAttribute("value", 
		"#"+(Math.floor(Math.random()*16777215).toString(16)));
	color2.setAttribute("value", 
		"#"+(Math.floor(Math.random()*16777215).toString(16)));
})
button.addEventListener("click", changer);

color1.addEventListener("input", changer);

color2.addEventListener("input", changer);

