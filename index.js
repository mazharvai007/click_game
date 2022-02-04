let body = document.body;
body.style.backgroundColor = 'antiquewhite';

/**
 * Make game area and append it inside body tag
 */
let gameArea = document.createElement('div');
gameArea.className = 'gameArea';
gameArea.style.textAlign = 'center';
gameArea.style.border = '1px solid lightgray';
gameArea.style.width = '300px';
gameArea.style.height = '300px';
gameArea.style.margin = 'auto';
body.appendChild(gameArea);

/**
 * Make click count
 */
let clickCount = document.createElement('h2');
clickCount.className = 'clickCount';
clickCount.textContent = '0';
clickCount.style.fontSize = '50px';
clickCount.style.lineHeight = '1';
gameArea.appendChild(clickCount);

/**
 * click Buttons
 */
let clickButtonsArea = document.createElement('div');
clickButtonsArea.className = 'clickButtonsArea';
clickButtonsArea.style.display = 'flex';
clickButtonsArea.style.flexFlow = 'row wrap';
clickButtonsArea.style.justifyContent = 'space-evenly';

let startButton = document.createElement('input');
startButton.className = 'startButton';
startButton.setAttribute('type', 'submit');
startButton.value = 'Start';
startButton.style.cursor = 'pointer';
startButton.style.padding = '10px 30px';
startButton.style.borderRadius = '50px';
startButton.style.fontSize = '16px';
startButton.style.fontWeight = '700';
startButton.style.textTransform = 'uppercase';
clickButtonsArea.appendChild(startButton);

let clickButton = document.createElement('input');
clickButton.className = 'clickButton';
clickButton.setAttribute('type', 'submit');
clickButton.setAttribute('disabled', '');
clickButton.value = 'Click';
clickButton.style.padding = '10px 30px';
clickButton.style.borderRadius = '50px';
clickButton.style.fontSize = '16px';
clickButton.style.fontWeight = '700';
clickButtonsArea.appendChild(clickButton);

gameArea.appendChild(clickButtonsArea);

/**
 * Selectors
 */

let countingClick = document.querySelector('.clickCount');
let clickStartButton = document.querySelector('.startButton');
let clickClickingButton = document.querySelector('.clickButton');

/**
 * Default variables
 */
let winScore = 10;
let count = 0;

/**
 * Buttons listener
 */
clickStartButton.addEventListener('click', handleGameStart);
clickClickingButton.addEventListener('click', handleClick);

function handleClick() {
	count++; // increase click count

	countingClick.textContent = count; // display click number
}

function handleGameStart() {
	count = 0; // set count default value
	countingClick.textContent = count; // display click number
	clickButton.style.cursor = 'pointer'; // add css
	clickButton.removeAttribute('disabled'); // remove attribute

	startCounting();
}

/**
 * Show the resut
 */
function startCounting() {
	setTimeout(() => {
		if (isWin()) {
			countingClick.textContent = 'You Win!';
		} else {
			countingClick.textContent = 'You Lost!';
		}

		clickButton.setAttribute('disabled', true);
	}, 2000);
}

/**
 * Check win and lost
 * @returns
 */
function isWin() {
	if (count < winScore) {
		return false;
	} else {
		return true;
	}
}
