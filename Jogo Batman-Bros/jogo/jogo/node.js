document.getElementById('start-button').addEventListener('click', function() {
    // Esconde a tela de início
    document.getElementById('tela-de-inicio').style.display = 'none';
    
    // Inicia o jogo
    startGame();
});

function startGame() {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');

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
