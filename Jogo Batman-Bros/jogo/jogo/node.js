/*const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startGame = document.querySelector('.start-game');
const gameOver = document.querySelector('.game-over');

let gameLoop;

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

const startGameHandler = (event) => {
    if (event.code === 'Space') {
        startGame.classList.add('hidden');
        gameOver.classList.add('hidden');
        document.removeEventListener('keydown', startGameHandler);
        document.addEventListener('keydown', jump);

        gameLoop = setInterval(() => {
            const pipePosition = pipe.offsetLeft;
            const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10);

            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;

                mario.src = './imagens/batsimbolo.png';
                mario.style.width = '75px';
                mario.style.marginLeft = '0px';

                gameOver.classList.remove('hidden');

                clearInterval(gameLoop);
                document.addEventListener('keydown', () => {
                    location.reload();
                });
            }
        }, 10);
    }
};

document.addEventListener('keydown', startGameHandler);
*/






const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startGame = document.querySelector('.start-game');
const gameOver = document.querySelector('.game-over');

let gameLoop;

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

const startGameHandler = (event) => {
    if (event.code === 'Space') {
        startGame.classList.add('hidden');
        gameOver.classList.add('hidden');
        mario.classList.remove('hidden');
        pipe.classList.remove('hidden');
        document.removeEventListener('keydown', startGameHandler);
        document.addEventListener('keydown', jump);

        gameLoop = setInterval(() => {
            const pipePosition = pipe.offsetLeft;
            const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10);

            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                pipe.style.animation = 'none';
                pipe.style.left = `${pipePosition}px`;

                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;

                mario.src = './imagens/batsimbolo.png';
                mario.style.width = '75px';
                mario.style.marginLeft = '0px';

                gameOver.classList.remove('hidden');

                clearInterval(gameLoop);
                document.addEventListener('keydown', () => {
                    location.reload();
                });
            }
        }, 10);
    }
};

document.addEventListener('keydown', startGameHandler);
