const mario = document.querySelector('.mario'); 
const pipe = document.querySelector('.pipe'); 
const startGame = document.querySelector('.start-game'); 

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
       pipe.style.left = '${pipePosition}px'; 

       mario.style.animation = 'none'; 
       mario.style.bottom = '${marioPosition}px'; 

       mario.src = './imagens/batsimbolo.png'; 
       mario.style.width = '75px';
       mario.style.marginLeft = '0px'; 

       startGame.src = './imagens/Tela_inicial_arkhanjump.png'

       clearInterval(loop); 
       
       document.addEventListener('keydown', () => {
        location.reload(); 
    });
    
    }
    
}, 10);

document.addEventListener('keydown', jump); 
