var css = document.querySelector("h3");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var body = document.getElementById('gradient')

function setgradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ colour1.value 
	+ ", " 
	+ colour2.value 
	+ ")"; 

	css.textContent = body.style.background + ";";
}

colour1.addEventListener("input" , setgradient); 

colour2.addEventListener("input" , setgradient);

