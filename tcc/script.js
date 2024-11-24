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
        errorMessage.textContent = 'Por favor, digite um CPF válido (apenas números ate 11 dígitos).';
        return;
    }

    // Se tudo estiver correto, avança para o formulário de sintomas
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('symptom-container').classList.remove('hidden');
});

document.getElementById('submit-symptoms').addEventListener('click', function() {
    var symptom = document.getElementById('symptoms').value;
    var message = document.getElementById('classification-message');

    if (symptom === '') {
        message.classList.add('hidden');
        return;
    }

    var classification = '';

    // Classificação baseada no sintoma selecionado
    if (['dor-cabeca', 'nariz-entupido', 'tosse-leve', 'cansaco-ocasional', 'dor-muscular', 'dor-garganta', 'irritacao-cutanea', 'coceira-pele', 'perda-apetite', 'desconforto-abdominal', 'febre-baixa', 'tontura-leve'].includes(symptom)) {
        classification = 'Sintomas Leves';
    } else if (['febre-moderada', 'tosse-persistente', 'cansaco-constante', 'dor-muscular-intensa', 'dor-cabeca-moderada', 'dificuldade-respirar', 'dores-articulares', 'manchas-cutanias', 'nauseas', 'diarreia', 'dor-peito-leve', 'inchaco-pernas', 'sangramento-cortes', 'calafrios', 'diminui-urina'].includes(symptom)) {
        classification = 'Sintomas Moderados';
    } else {
        classification = 'Sintomas Graves';
    }

    message.textContent = 'Classificação: ' + classification;
    message.classList.remove('hidden');
});
