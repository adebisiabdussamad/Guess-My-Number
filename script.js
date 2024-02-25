'use strict';
/*
document.querySelector('.message').textContent = 'Hello, world!';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 14;

document.querySelector('.guess').value = 32
console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


// Handing Clicks of a Button
document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	// No number
	if (!guess) {
		document.querySelector('.message').textContent = '⛔ No number!';
	}

	// When the guess is equal to the secret number!
	else if (guess === secretNumber) {
		document.querySelector('.message').textContent = '🎉 Correct Number!';
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.number').textContent = secretNumber;
	}

	// When the guess is greater than the secret number
	else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector('.message').textContent = '📈 Too high!'
			score--;
			document.querySelector('.score').textContent = score;
		}
		else {
			document.querySelector('.message').textContent = '💥 You lost the game!';
			document.querySelector('.score').textContent = 0;
		}

	}

	// When the guess is lower than the secret number
	else if (guess < secretNumber) {
		if (score > 0) {
			document.querySelector('.message').textContent = '📈 Too Low!'
			score--;
			document.querySelector('.score').textContent = score;
		}
		else {
			document.querySelector('.message').textContent = '💥 You lost the game!';
			document.querySelector('.score').textContent = 0;
		}
	}
});

// Handling events for the again button
document.querySelector('.again').addEventListener('click', function () {
	// My Solution
	location.reload();

	// The solution
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.guess').textContent = '?';
	document.querySelector('.value') = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});