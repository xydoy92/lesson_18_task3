let lis = document.body. querySelectorAll("li");
let liAmount = document.body. querySelectorAll("li").length;

function changeColorEverySecond(array, number) {
	let randomNumber = randomTo(number);
	array[randomNumber].style.color = changeColor(256);
	setTimeout(() => {
		array[randomNumber].style.color = "";
		changeColorEverySecond(array, number);
	}, 1000);
}

function changeColor(number) {
	let red = getRGB(number);
	let green = getRGB(number);
	let blue = getRGB(number);
	return `#${red}${green}${blue}`;
}

function randomTo(number) {
	return Math.floor(Math.random()*number);
}

function getRGB(number) {
	let rgb = randomTo(number).toString(16);
	if(!rgb[1]) {
		rgb = `0${rgb}`;
	}
	return rgb;
}

changeColorEverySecond(lis, liAmount);