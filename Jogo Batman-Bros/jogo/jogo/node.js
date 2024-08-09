// Seleciona os elementos do DOM
const mario = document.querySelector('.mario'); // Elemento do Mario
const pipe = document.querySelector('.pipe'); // Elemento do pipe
const startGame = document.querySelector('.start-game'); // Elemento da tela inicial
const gameOver = document.querySelector('.game-over'); // Elemento da tela de game over
const timeDisplay = document.querySelector('.time'); // Elemento para exibir o tempo atual
const bestTimeDisplay = document.querySelector('.besttime'); // Elemento para exibir o melhor tempo



const musica1 = document.getElementById('musica1'); // Primeira música
const musica2 = document.getElementById('musica2'); // Segunda música



// Configura o volume das músicas (valores entre 0.0 e 1.0)
musica1.volume = 0.1; // Volume para a primeira música
musica2.volume = 0.1; // Volume para a segunda música



// Função para alternar entre as músicas quando uma termina
const handleMusicEnd = () => {
    if (musica1.ended) {
        musica2.play(); // Toca a segunda música quando a primeira termina
    } else if (musica2.ended) {
        musica1.play(); // Toca a primeira música quando a segunda termina
    }
};



// Adiciona ouvintes de eventos para alternar as músicas
musica1.addEventListener('ended', handleMusicEnd);
musica2.addEventListener('ended', handleMusicEnd);



let gameLoop; // Referência ao loop do jogo
let startTime; // Marca o tempo de início do jogo
let elapsedTime = 0; // Tempo decorrido desde o início
let bestTime = parseFloat(localStorage.getItem('bestTime')) || 0; // Melhor tempo registrado, inicia com 0 se não houver registro
let pipeSpeed = 9; // Velocidade inicial do pipe (em pixels por frame)
const speedIncreaseInterval = 7000; // Intervalo de tempo para aumentar a velocidade (em ms)
const speedIncreaseRate = 0.140; // Taxa de aumento da velocidade (adicionar a cada intervalo)



// Atualiza a exibição do melhor tempo
const updateBestTimeDisplay = () => {
    if (bestTime > 0) {
        bestTimeDisplay.textContent = ` ${(bestTime / 1000).toFixed(1)}`; // Exibe o melhor tempo em segundos
    } else {
        bestTimeDisplay.textContent = 'No record yet'; // Mensagem caso não haja registro de tempo
    }
};



updateBestTimeDisplay(); // Atualiza o melhor tempo ao iniciar

// Função para fazer o Mario pular
const jump = () => {
    if (!mario.classList.contains('jump')) { // Verifica se o Mario já não está pulando
        mario.classList.add('jump'); // Adiciona a classe de salto
        setTimeout(() => {
            mario.classList.remove('jump'); // Remove a classe de salto após 500ms
        }, 500);
    }
};



// Função para reiniciar o jogo
const restartGame = () => {
    location.reload(); // Recarrega a página
};



// Função que inicia o jogo quando a tecla 'Space' é pressionada
const startGameHandler = (event) => {
    if (event.code === 'Space') { // Verifica se a tecla pressionada é 'Space'
        startGame.classList.add('hidden'); // Esconde a tela inicial
        gameOver.classList.add('hidden'); // Esconde a tela de game over
        mario.classList.remove('hidden'); // Exibe o Mario
        pipe.classList.remove('hidden'); // Exibe o pipe
        document.removeEventListener('keydown', startGameHandler); // Remove o ouvinte de evento de início
        document.addEventListener('keydown', jump); // Adiciona o ouvinte de evento de pular

        startTime = Date.now(); // Marca o tempo de início do jogo

        // Inicializa a posição do pipe
        let pipePosition = window.innerWidth; // Começa com o pipe fora da tela

        // Inicia a música
        musica1.play(); // Começa com a primeira música

        gameLoop = setInterval(() => {
            // Move o pipe para a esquerda
            pipePosition -= pipeSpeed;
            pipe.style.transform = `translateX(${pipePosition}px)`;

            const marioPosition = parseInt(window.getComputedStyle(mario).bottom, 10); // Obtém a posição inferior do Mario
            elapsedTime = Date.now() - startTime; // Calcula o tempo decorrido

            // Atualiza o display do tempo decorrido
            timeDisplay.textContent = ` ${(elapsedTime / 1000).toFixed(1)}`;

            // Atualiza o display do melhor tempo
            updateBestTimeDisplay();

            // Verifica se há colisão entre Mario e o pipe
            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
                // Jogo terminado
                pipe.style.transform = `translateX(${pipePosition}px)`;
                mario.style.animation = 'none'; // Para qualquer animação do Mario
                mario.style.bottom = `${marioPosition}px`; // Mantém a posição do Mario

                mario.src = './imagens/batsimbolo.png'; // Muda a imagem do Mario para o símbolo de batman
                mario.style.height = '50px'; // Ajusta a altura do Mario
                mario.style.width = '75px'; // Ajusta a largura do Mario
                mario.style.marginLeft = '0px'; // Remove qualquer margem esquerda

                gameOver.classList.remove('hidden'); // Exibe a tela de game over

                clearInterval(gameLoop); // Para o loop do jogo

                // Verifica se o tempo atual é o melhor tempo
                if (elapsedTime > bestTime) {
                    bestTime = elapsedTime; // Atualiza o melhor tempo
                    localStorage.setItem('bestTime', bestTime); // Armazena o melhor tempo no armazenamento local
                    console.log('New bestTime:', bestTime); // Log para verificar o novo melhor tempo
                }

                // Atualiza o display do melhor tempo
                updateBestTimeDisplay();

                document.addEventListener('keydown', restartGame); // Adiciona o ouvinte de evento para reiniciar o jogo
            }

            // Se o pipe sair da tela, reinicie a posição
            if (pipePosition < -pipe.offsetWidth) {
                pipePosition = window.innerWidth; // Reseta a posição do pipe para fora da tela à direita
            }
        }, 10);

        // Aumenta a dificuldade de forma contínua
        setInterval(() => {
            pipeSpeed += speedIncreaseRate; // Aumenta a velocidade de forma suave
        }, speedIncreaseInterval);
    }
};

// Adiciona o ouvinte de evento para iniciar o jogo ao pressionar a tecla 'Space'
document.addEventListener('keydown', startGameHandler);
