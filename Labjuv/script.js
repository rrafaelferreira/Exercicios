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

  // ✅ CARDS EXPANSÍVEIS COM TRANSIÇÃO SUAVE
  const cards = document.querySelectorAll(".card");
  let currentOpenCard = null;

  cards.forEach(card => {
    const desc = card.querySelector(".description");

    card.addEventListener("click", () => {
      const isSameCard = card === currentOpenCard;

      if (isSameCard) {
        card.classList.remove("open");
        desc.style.maxHeight = "0px";
        currentOpenCard = null;
        return;
      }

      if (currentOpenCard) {
        const prevDesc = currentOpenCard.querySelector(".description");
        currentOpenCard.classList.remove("open");
        prevDesc.style.maxHeight = "0px";

        prevDesc.addEventListener("transitionend", function abrirNovo() {
          prevDesc.removeEventListener("transitionend", abrirNovo);
          card.classList.add("open");
          desc.style.maxHeight = desc.scrollHeight + 40 + "px";
          currentOpenCard = card;
        });
      } else {
        card.classList.add("open");
        desc.style.maxHeight = desc.scrollHeight + 40 + "px";
        currentOpenCard = card;
      }
    });
  });

  // ✅ MENU HAMBÚRGUER RESPONSIVO
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
    });

    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }

  // ✅ MUDAR COR DO BOTÃO HAMBÚRGUER CONFORME A SEÇÃO
  const inicioSection = document.getElementById("inicio");

  function verificarSecaoVisivel() {
    const rect = inicioSection.getBoundingClientRect();
    const noTopo = rect.top <= 0 && rect.bottom >= 80;

    if (noTopo) {
      toggle.classList.add("white");
    } else {
      toggle.classList.remove("white");
    }
  }

  // Verificar rolagem e carregar
  window.addEventListener("scroll", verificarSecaoVisivel);
  window.addEventListener("load", verificarSecaoVisivel);
});
