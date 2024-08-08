/*const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startGame = document.querySelector('.start-game');
const gameOver = document.querySelector('.game-over');
const timeDisplay = document.querySelector('.time');
const bestTimeDisplay = document.querySelector('.besttime');

let gameLoop;
let startTime;
let elapsedTime = 0;
let bestTime = localStorage.getItem('bestTime') || 0; // Recupera o melhor tempo do armazenamento local

// Atualiza o display do melhor tempo
if (bestTime > 0) {
    bestTimeDisplay.textContent = ` ${(bestTime / 1000).toFixed(1)}`;
}

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

        startTime = Date.now(); // Marca o tempo de início

        gameLoop = setInterval(() => {
            const pipePosition = pipe.offsetLeft;
            const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10);
            elapsedTime = Date.now() - startTime;

            // Atualiza o display do tempo decorrido
            timeDisplay.textContent = ` ${(elapsedTime / 1000).toFixed(1)}`;

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

                // Verifica se o tempo atual é o melhor tempo
                if (elapsedTime > bestTime) {
                    bestTime = elapsedTime;
                    localStorage.setItem('bestTime', bestTime); // Armazena o melhor tempo no armazenamento local
                    bestTimeDisplay.textContent = ` ${(bestTime / 1000).toFixed(1)}`;
                }

                document.addEventListener('keydown', () => {
                    location.reload();
                });
            }
        }, 10);
    }
};

document.addEventListener('keydown', startGameHandler);

*/



















/*const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startGame = document.querySelector('.start-game');
const gameOver = document.querySelector('.game-over');
const timeDisplay = document.querySelector('.time');
const bestTimeDisplay = document.querySelector('.besttime');

let gameLoop;
let startTime;
let elapsedTime = 0;
let bestTime = localStorage.getItem('bestTime') || 0; // Recupera o melhor tempo do armazenamento local
let pipeSpeed = 2000; // Duração inicial da animação do pipe (em ms)
const speedIncreaseInterval = 10000; // Intervalo de tempo para aumentar a velocidade (em ms)
const speedMultiplier = 0.9; // Multiplicador para aumentar a velocidade

// Atualiza o display do melhor tempo
if (bestTime > 0) {
    bestTimeDisplay.textContent = ` ${(bestTime / 1000).toFixed(1)}`;
}

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

        startTime = Date.now(); // Marca o tempo de início

        pipe.style.animation = `pipe-animation ${pipeSpeed / 1000}s infinite linear`;

        gameLoop = setInterval(() => {
            const pipePosition = pipe.offsetLeft;
            const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10);
            elapsedTime = Date.now() - startTime;

            // Atualiza o display do tempo decorrido
            timeDisplay.textContent = ` ${(elapsedTime / 1000).toFixed(1)}`;

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

                // Verifica se o tempo atual é o melhor tempo
                if (elapsedTime > bestTime) {
                    bestTime = elapsedTime;
                    localStorage.setItem('bestTime', bestTime); // Armazena o melhor tempo no armazenamento local
                    bestTimeDisplay.textContent = ` ${(bestTime / 1000).toFixed(1)}`;
                }

                document.addEventListener('keydown', () => {
                    location.reload();
                });
            }
        }, 10);

        // Aumenta a velocidade do pipe a cada 10 segundos sem "flicker"
        setInterval(() => {
            // Calcula a porcentagem da animação atual completada
            const pipePosition = pipe.offsetLeft;
            const pipeTotalWidth = window.innerWidth + pipe.offsetWidth;
            const pipeAnimationTimeRemaining = (pipePosition / pipeTotalWidth) * pipeSpeed;

            // Remove a animação atual e aplica uma nova com a velocidade aumentada
            pipe.style.animation = 'none';
            pipe.offsetHeight; // Força o reflow (trava a remoção de animação)
            pipeSpeed *= speedMultiplier;
            pipe.style.animation = `pipe-animation ${pipeSpeed / 1000}s linear ${pipeAnimationTimeRemaining / 1000}s infinite`;
        }, speedIncreaseInterval);
    }
};

document.addEventListener('keydown', startGameHandler);

*/












/*const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startGame = document.querySelector('.start-game');
const gameOver = document.querySelector('.game-over');
const timeDisplay = document.querySelector('.time');
const bestTimeDisplay = document.querySelector('.besttime');

let gameLoop;
let startTime;
let elapsedTime = 0;
let bestTime = localStorage.getItem('bestTime') || 0; // Recupera o melhor tempo do armazenamento local
let pipeSpeed =9; // Velocidade inicial do pipe (em pixels por frame) - Ajuste para iniciar mais rápido
const speedIncreaseInterval = 10000; // Intervalo de tempo para aumentar a velocidade (em ms)
const speedMultiplier = 1.2; // Multiplicador para aumentar a velocidade

// Atualiza o display do melhor tempo
if (bestTime > 0) {
    bestTimeDisplay.textContent = ` ${(bestTime / 1000).toFixed(1)}`;
}

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

        startTime = Date.now(); // Marca o tempo de início

        // Inicializa a posição do pipe
        let pipePosition = window.innerWidth;

        gameLoop = setInterval(() => {
            // Move o pipe para a esquerda
            pipePosition -= pipeSpeed;
            pipe.style.transform = `translateX(${pipePosition}px)`;

            const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10);
            elapsedTime = Date.now() - startTime;

            // Atualiza o display do tempo decorrido
            timeDisplay.textContent = ` ${(elapsedTime / 1000).toFixed(1)}`;

            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                // Jogo terminado
                pipe.style.transform = `translateX(${pipePosition}px)`;
                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;

                mario.src = './imagens/batsimbolo.png';
                mario.style.height = '50px'
                mario.style.width = '75px';
                mario.style.marginLeft = '0px';

                gameOver.classList.remove('hidden');

                clearInterval(gameLoop);

                // Verifica se o tempo atual é o melhor tempo
                if (elapsedTime > bestTime) {
                    bestTime = elapsedTime;
                    localStorage.setItem('bestTime', bestTime); // Armazena o melhor tempo no armazenamento local
                    bestTimeDisplay.textContent = ` ${(bestTime / 1000).toFixed(1)}`;
                }

                document.addEventListener('keydown', () => {
                    location.reload();
                });
            }

            // Se o pipe sair da tela, reinicie a posição
            if (pipePosition < -pipe.offsetWidth) {
                pipePosition = window.innerWidth;
            }
        }, 10);

        // Aumenta a dificuldade a cada 10 segundos
        setInterval(() => {
            pipeSpeed *= speedMultiplier; // Aumenta a velocidade do pipe
        }, speedIncreaseInterval);
    }
};

document.addEventListener('keydown', startGameHandler);
*/




const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startGame = document.querySelector('.start-game');
const gameOver = document.querySelector('.game-over');
const timeDisplay = document.querySelector('.time');
const bestTimeDisplay = document.querySelector('.besttime');

let gameLoop;
let startTime;
let elapsedTime = 0;
let bestTime = localStorage.getItem('bestTime') || 0; // Recupera o melhor tempo do armazenamento local
let pipeSpeed = 9; // Velocidade inicial do pipe (em pixels por frame)
const speedIncreaseInterval = 10000; // Intervalo de tempo para aumentar a velocidade (em ms)
const speedIncreaseRate = 0.100; // Taxa de aumento da velocidade (adicionar a cada intervalo)

if (bestTime > 0) {
    bestTimeDisplay.textContent = ` ${(bestTime / 1000).toFixed(1)}`;
}

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

        startTime = Date.now(); // Marca o tempo de início

        // Inicializa a posição do pipe
        let pipePosition = window.innerWidth;

        gameLoop = setInterval(() => {
            // Move o pipe para a esquerda
            pipePosition -= pipeSpeed;
            pipe.style.transform = `translateX(${pipePosition}px)`;

            const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10);
            elapsedTime = Date.now() - startTime;

            // Atualiza o display do tempo decorrido
            timeDisplay.textContent = ` ${(elapsedTime / 1000).toFixed(1)}`;

            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                // Jogo terminado
                pipe.style.transform = `translateX(${pipePosition}px)`;
                mario.style.animation = 'none';
                mario.style.bottom = `${marioPosition}px`;

                mario.src = './imagens/batsimbolo.png';
                mario.style.height = '50px'
                mario.style.width = '75px';
                mario.style.marginLeft = '0px';

                gameOver.classList.remove('hidden');

                clearInterval(gameLoop);

                // Verifica se o tempo atual é o melhor tempo
                if (elapsedTime > bestTime) {
                    bestTime = elapsedTime;
                    localStorage.setItem('bestTime', bestTime); // Armazena o melhor tempo no armazenamento local
                    bestTimeDisplay.textContent = ` ${(bestTime / 1000).toFixed(1)}`;
                }

                document.addEventListener('keydown', () => {
                    location.reload();
                });
            }

            // Se o pipe sair da tela, reinicie a posição
            if (pipePosition < -pipe.offsetWidth) {
                pipePosition = window.innerWidth;
            }
        }, 10);

        // Aumenta a dificuldade de forma contínua
        setInterval(() => {
            pipeSpeed += speedIncreaseRate; // Aumenta a velocidade de forma suave
        }, speedIncreaseInterval);
    }
};

document.addEventListener('keydown', startGameHandler);
