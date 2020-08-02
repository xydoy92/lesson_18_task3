let lis = document.body. querySelectorAll("li");
let liAmount = document.body. querySelectorAll("li").length;

function changeColorEverySecond(array, arrayLength) {
	let randomNumber = Math.random();
	while(randomNumber < arrayLength) {
		randomNumber *=10;
	}
	randomNumber = Math.floor(randomNumber);
	randomNumber = randomNumber % arrayLength;
	array[randomNumber].className = "red";
	setTimeout(() => {
		array[randomNumber].className = "";
		changeColorEverySecond(array, arrayLength);
	}, 1000);
}

changeColorEverySecond(lis, liAmount);