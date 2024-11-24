document.getElementById('center-button').addEventListener('click', function() {
    document.getElementById('welcome-text').classList.add('hidden');
    document.getElementById('center-button').classList.add('hidden');
    document.getElementById('form-container').classList.remove('hidden');
});

document.getElementById('submit-button').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var cpf = document.getElementById('cpf').value;
    var errorMessage = document.getElementById('error-message');

    // Limpeza de mensagens de erro
    errorMessage.classList.add('hidden');

    // Verificar se ambos os campos estão preenchidos
    if (!name || !cpf) {
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Validação do nome: só pode ser texto (sem números)
    var nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;  // Permite apenas letras e espaços
    if (!nameRegex.test(name)) {
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = 'Por favor, digite um nome válido (apenas letras).';
        return;
    }

    // Validação do CPF: deve ser um número com exatamente 11 dígitos
    var cpfRegex = /^\d{11}$/; // Aceita apenas 11 dígitos numéricos
    if (!cpfRegex.test(cpf)) {
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = 'Por favor, digite um CPF válido (apenas números até 11 dígitos).';
        return;
    }

    // Se tudo estiver correto, avança para o formulário de sintomas
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('symptom-container').classList.remove('hidden');
});

document.getElementById('submit-symptoms').addEventListener('click', function() {
    var selectedSymptoms = Array.from(document.getElementById('symptoms').selectedOptions).map(option => option.value);
    var message = document.getElementById('classification-message');

    if (selectedSymptoms.length === 0) {
        message.classList.add('hidden');
        return;
    }

    // Limita a seleção a no máximo dois sintomas
    if (selectedSymptoms.length > 2) {
        message.classList.remove('hidden');
        message.textContent = 'Você pode selecionar no máximo dois sintomas.';
        return;
    }

    var classification = '';
    var severityColor = '';

    // Classificação e cor baseada nos sintomas selecionados
    if (selectedSymptoms.some(symptom => ['febre-baixa', 'tosse-leve', 'dor-cabeca', 'nariz-entupido'].includes(symptom))) {
        classification = 'Sintomas Leves';
        severityColor = 'green'; // Verde
    } else if (selectedSymptoms.some(symptom => ['febre-moderada', 'tosse-persistente', 'cansaco-constante', 'dor-muscular-intensa'].includes(symptom))) {
        classification = 'Sintomas Moderados';
        severityColor = 'yellow'; // Amarelo
    } else {
        classification = 'Sintomas Graves';
        severityColor = 'red'; // Vermelho
    }

    message.textContent = 'Classificação: ' + classification;
    message.style.color = severityColor; // Aplica a cor à mensagem
    message.classList.remove('hidden');
});
