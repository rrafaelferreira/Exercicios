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
