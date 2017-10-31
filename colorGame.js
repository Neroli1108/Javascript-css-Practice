var colors = generateRandomColors(6);
var messageDisplay = document.getElementById('message');
var squares =document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDispaly = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDispaly.textContent = pickedColor;
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	resetButton.textContent = "reset";
	messageDisplay.textContent = "";
});

colorDispaly.textContent = pickedColor;
for (var i = squares.length - 1; i >= 0; i--) {
	//add initial colors
	squares[i].style.backgroundColor = colors[i];
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