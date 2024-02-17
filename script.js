'use strict';
/*
document.querySelector('.message').textContent = 'Hello, world!';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 14;

document.querySelector('.guess').value = 32
console.log(document.querySelector('.guess').value);
*/


// Handing Clicks of a Button

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	if (!guess) {
		document.querySelector('.message').textContent = '⛔ No number!';
	}
})