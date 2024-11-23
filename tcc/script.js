// Seleciona o botão, o contêiner do formulário e o texto de boas-vindas
const centerButton = document.getElementById('center-button');
const formContainer = document.getElementById('form-container');
const welcomeText = document.getElementById('welcome-text');

// Adiciona o evento de clique ao botão "Entrar"
centerButton.addEventListener('click', () => {
    // Exibe o formulário
    formContainer.classList.remove('hidden');
    
    // Oculta o botão inicial e o texto de boas-vindas
    centerButton.style.display = 'none';
    welcomeText.style.display = 'none';
});
