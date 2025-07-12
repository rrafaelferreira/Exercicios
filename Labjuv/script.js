document.addEventListener("DOMContentLoaded", () => {
  // ✅ CALCULADORA DE IMC
  const form = document.getElementById('calculadora');
  if (form) {
    form.addEventListener('submit', function (event) {
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
  }
  

  // ✅ CARDS EXPANSÍVEIS COM TRANSIÇÃO SUAVE LENTA
  const cards = document.querySelectorAll(".card");
  let currentOpenCard = null;

  cards.forEach(card => {
    const desc = card.querySelector(".description");

    card.addEventListener("click", () => {
      const isSameCard = card === currentOpenCard;

      // Se for o mesmo, apenas fecha
      if (isSameCard) {
        card.classList.remove("open");
        desc.style.maxHeight = "0px";
        currentOpenCard = null;
        return;
      }

      // Se há outro aberto, fecha ele primeiro
      if (currentOpenCard) {
        const prevDesc = currentOpenCard.querySelector(".description");
        currentOpenCard.classList.remove("open");
        prevDesc.style.maxHeight = "0px";

        // Espera a transição de fechamento terminar (CSS: 0.6s)
        prevDesc.addEventListener("transitionend", function abrirNovo() {
          prevDesc.removeEventListener("transitionend", abrirNovo);
          card.classList.add("open");
          desc.style.maxHeight = desc.scrollHeight + 40 + "px"; // margem extra suave
          currentOpenCard = card;
        });
      } else {
        // Nenhum aberto, abre direto
        card.classList.add("open");
        desc.style.maxHeight = desc.scrollHeight + 40 + "px";
        currentOpenCard = card;
      }
    });
  });
});
