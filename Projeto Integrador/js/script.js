document.addEventListener("DOMContentLoaded", () => {

  // ✅ Impedir que o navegador restaure a posição do scroll ao atualizar
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
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

  // ✅ MENU HAMBÚRGUER RESPONSIVO (CORRIGIDO)
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const header = document.querySelector('header');
  const inicioSection = document.getElementById("inicio");

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('menu-ativo');
      toggle.classList.toggle('active');
    });

    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('menu-ativo');
        toggle.classList.remove('active');
      });
    });
  }

  // ✅ MUDAR ESTILO DO HEADER E BOTÃO HAMBÚRGUER CONFORME ROLAGEM
  function verificarSecaoVisivel() {
    const rect = inicioSection.getBoundingClientRect();
    const estaNoTopo = rect.top <= 0 && rect.bottom >= 80;

    if (!estaNoTopo) {
      header.classList.add("scrolled");
      toggle.classList.remove("white");
    } else {
      header.classList.remove("scrolled");
      toggle.classList.add("white");
    }
  }

  window.addEventListener("scroll", verificarSecaoVisivel);
  window.addEventListener("load", verificarSecaoVisivel);

  // ⬇️ SEUS ScrollReveal (mantidos iguais)
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
  });

  //inicio
  sr.reveal(`.inicio-texto`, {interval: 150});

  //segurança no trabalho
  sr.reveal(`.texto-nos`, {origin: 'left', delay: 400});
  sr.reveal(`.imagem-nos`, {origin: 'right', delay: 400});

  //cipa
  sr.reveal(`.cipa-row`, {origin: 'bottom', delay: 400});

  //comite
  sr.reveal(`.comite-text`, {origin: 'left', delay: 550});
  sr.reveal(`.comite-image`, {origin: 'right', delay: 550});

  //possiveis acidentes
  sr.reveal(`#classificacoesalimentos`, {interval: 150});
  sr.reveal(`.categoria-bloco.abertura`, {origin: 'top', delay: 400});
  sr.reveal(`.categoria-bloco.inatura`, {origin: 'right', delay: 400});
  sr.reveal(`.categoria-bloco.processados`, {origin: 'left', delay: 400});
  sr.reveal(`.categoria-bloco.ultraprocessados`, {origin: 'bottom', delay: 400});

  //normas regulamentadoras
  sr.reveal(`#receitas`, {interval: 150});

  //inclusao dos jovens aprendiz
  sr.reveal(`.jovemtexto`, {origin: 'top', delay: 400});
  sr.reveal(`.textonutri`, {origin: 'left', delay: 400});
  sr.reveal(`.textonutri2`, {origin: 'right', delay: 400});

  //material educativo
  sr.reveal(`.secao.material-educativo`, {interval: 150});
  sr.reveal(`.videos-grid`, {origin: 'buttom', delay: 300});

  //contato
  sr.reveal(`#contato`, {interval: 150});

});
