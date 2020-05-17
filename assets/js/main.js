const square = document.querySelectorAll('.square');
const score = document.querySelector('.score');
const timer = document.querySelector('#time');
const showGameOver = document.querySelector('.showGameOver');

let result = 0;
var counter = 15;


function randomsquare() {
    let randomPosition = square[Math.floor(Math.random() * 35)];
    let hitPosition = randomPosition.id;
    square.forEach(className => {
        className.classList.remove('mole');
    })
    randomPosition.classList.add('mole');
    console.log("hitposition is " + hitPosition);
    if (hitPosition != "") {
        square.forEach(move => {
            move.addEventListener('click', () => {
                console.log("Selected position is" + move.id);
                if (counter != 0) {
                    if (move.id === hitPosition) {
                        console.log(move.id + "matches" + hitPosition)
                        result = result + 1;
                        score.textContent = result;
                        hitPosition = "";
                    }
                    hitPosition = "";
                }
            }
            )
        })
    }
}

function countDown() {
    counter--;
    timer.textContent = "Time Left:" + counter;
    if (counter === 0) {
        clearInterval(timerID);
        clearInterval(timerID1);
        showGameOver.textContent = "Game Over!!";
    }
}

let timerID = setInterval(randomsquare, 1000);
let timerID1 = setInterval(countDown, 1000);

