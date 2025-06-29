/*
// Calculadora de IMC
document.getElementById('calculadora').addEventListener('submit', function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (!peso || !altura || altura === 0) {
    document.getElementById('resultado').textContent = 'Preencha os campos corretamente.';
    return;
  }

  const imc = peso / (altura * altura);
  const agua = peso * 35;

  document.getElementById('resultado').innerHTML = `
    Seu IMC é <strong>${imc.toFixed(2)}</strong>.<br>
    Você deve beber aproximadamente <strong>${(agua / 1000).toFixed(2)} litros</strong> de água por dia.
  `;
});

// Transição de cor da seção info e cards
const infoSection = document.getElementById('info');
const cards = infoSection.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Seção visível
      infoSection.style.backgroundColor = 'white';
      cards.forEach(card => card.classList.add('ativo'));
    } else {
      // Seção fora da tela
      infoSection.style.backgroundColor = 'rgb(128, 128, 128)';
      cards.forEach(card => card.classList.remove('ativo'));
    }
  });
}, { threshold: 0.1 });

observer.observe(infoSection);

*/

// Calculadora de IMC
document.getElementById('calculadora').addEventListener('submit', function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (!peso || !altura || altura === 0) {
    document.getElementById('resultado').textContent = 'Preencha os campos corretamente.';
    return;
  }

  const imc = peso / (altura * altura);
  const agua = peso * 35;

  document.getElementById('resultado').innerHTML = `
    Seu IMC é <strong>${imc.toFixed(2)}</strong>.<br>
    Você deve beber aproximadamente <strong>${(agua / 1000).toFixed(2)} litros</strong> de água por dia.
  `;
});

// Troca de cor baseada no scroll para TODAS as seções
const secoes = document.querySelectorAll('.secao');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove a classe 'ativa' de todas as seções
      secoes.forEach(secao => secao.classList.remove('ativa'));

      // Adiciona a classe ativa à seção atualmente visível
      entry.target.classList.add('ativa');
    }
  });
}, { threshold: 0.5 });

// Observar todas as seções (inclusive a #info)
secoes.forEach(secao => {
  observer.observe(secao);
});

