document.getElementById('start-button').addEventListener('click', function() {
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
