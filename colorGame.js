var numberOfSquares = 6;
var colors = [];
var messageDisplay = document.getElementById('message');
var squares =document.querySelectorAll(".square");
var pickedColor;
var colorDispaly = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode")

init();

function init(){
	modeButton();
	setupSquares();
	reset();
}



function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDispaly.textContent = pickedColor;
	for (var i = 0; i <squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click",function(){
	reset();
});



function changeColors(color){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = num - 1; i >= 0; i--) {
			arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	return "rgb(" + red +", "+ green +", " + blue +")";
}

function modeButton(){
	for (var i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click",function(){
		mode[0].classList.toggle("selected");
		mode[1].classList.toggle("selected");
		if (this.textContent== "Easy") {
			numberOfSquares = 3;
		}else{
			numberOfSquares = 6;
		}
		reset();
	});
	}
}

function setupSquares(){
	for (var i = squares.length - 1; i >= 0; i--) {
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grad color of clicked square
		var clickedColor = this.style.backgroundColor;
		if (clickedColor == pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";

		}
	});
	}
}