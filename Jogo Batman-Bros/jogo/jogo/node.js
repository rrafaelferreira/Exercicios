/*document.getElementById('start-button').addEventListener('click', function() {
    // Esconde a tela de início
    document.getElementById('tela-de-inicio').style.display = 'none';
    
    // Inicia o jogo
    startGame();
});

function startGame() {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const nuvem = document.querySelector('.nuvem');

    // Remove a classe 'paused' para iniciar as animações
    pipe.classList.remove('paused');
    nuvem.classList.remove('paused');

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './imagens/over-removebg-preview.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop); // Parar o loop quando o jogo terminar
        }
    }, 10);

    document.addEventListener('keydown', jump);
}

// Inicialmente, adicionar a classe 'paused' aos elementos animados
document.addEventListener('DOMContentLoaded', function() {
    const pipe = document.querySelector('.pipe');
    const nuvem = document.querySelector('.nuvem');
    pipe.classList.add('paused');
    nuvem.classList.add('paused');
});
*/





/*
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('tela-de-inicio').style.display = 'none';
    startGame();
});

document.getElementById('restart-button').addEventListener('click', function() {
    document.getElementById('tela-de-game-over').style.display = 'none';
    startGame();
});

function startGame() {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const nuvem = document.querySelector('.nuvem');

    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    nuvem.style.animation = 'clouds-animation 20s infinite linear';

    mario.src = './imagens/batman-pixel-art.gif';
    mario.style.width = '150px';
    mario.style.marginLeft = '0px';
    mario.style.bottom = '0px';

    pipe.style.left = '100%';

    const jump = () => {
        if (!mario.classList.contains('jump')) { // Verifica se Mario já está pulando
            mario.classList.add('jump');

            setTimeout(() => {
                mario.classList.remove('jump');
            }, 500);
        }
    }

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            mario.style.animation = 'none';

            mario.src = './imagens/over-removebg-preview.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);

            document.getElementById('tela-de-game-over').style.display = 'flex';
        }
    }, 10);

    document.addEventListener('keydown', jump);
}

document.addEventListener('DOMContentLoaded', function() {
    const pipe = document.querySelector('.pipe');
    const nuvem = document.querySelector('.nuvem');
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    nuvem.style.animation = 'clouds-animation 20s infinite linear';
});
*/





let gameInterval; // Variável para armazenar o intervalo do jogo

document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente adicionar a classe 'paused' aos elementos animados
    const pipe = document.querySelector('.pipe');
    const nuvem = document.querySelector('.nuvem');
    pipe.classList.add('paused');
    nuvem.classList.add('paused');

    // Configurar o botão de iniciar
    document.getElementById('start-button').addEventListener('click', function() {
        // Esconde a tela de início
        document.getElementById('tela-de-inicio').style.display = 'none';
        
        // Esconde a tela de game over se estiver visível
        document.getElementById('game-over-screen').style.display = 'none';
        
        // Inicia o jogo
        startGame();
    });
});

function startGame() {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const nuvem = document.querySelector('.nuvem');

    // Remove a classe 'paused' para iniciar as animações
    pipe.classList.remove('paused');
    nuvem.classList.remove('paused');

    // Resetar o estado do Mario
    mario.src = './imagens/batman-pixel-art.gif'; // Substitua pelo caminho correto da imagem inicial do Mario
    mario.style.marginLeft = '0';

    // Garantir que o Mario esteja na posição inicial
    mario.style.bottom = '0px';

    // Função de pular
    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    // Parar o intervalo se já estiver rodando
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    // Configurar o intervalo do jogo
    gameInterval = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './imagens/over-removebg-preview.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            // Exibir a tela de game over
            document.getElementById('game-over-screen').style.display = 'block';

            clearInterval(gameInterval); // Parar o loop quando o jogo terminar
        }
    }, 10);

    document.addEventListener('keydown', jump);
}

document.getElementById('restart-button').addEventListener('click', function() {
    // Ocultar a tela de game over
    document.getElementById('game-over-screen').style.display = 'none';
    
    // Reiniciar o jogo
    startGame();
});

document.getElementById('home-button').addEventListener('click', function() {
    // Ocultar a tela de game over
    document.getElementById('game-over-screen').style.display = 'none';
    
    // Exibir a tela inicial
    document.getElementById('tela-de-inicio').style.display = 'block';

    // Parar o intervalo do jogo e resetar o estado
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const nuvem = document.querySelector('.nuvem');

    // Pausar o pipe e a nuvem
    pipe.classList.add('paused');
    nuvem.classList.add('paused');
    
    // Resetar o estado do Mario
    mario.src = './imagens/batman-pixel-art.gif'; // Substitua pelo caminho correto da imagem inicial do Mario
   

    // Resetar a posição do pipe e da nuvem, se necessário
    pipe.style.animation = '';
    pipe.style.left = '';
    nuvem.style.animation = '';
    nuvem.style.left = '';
});
