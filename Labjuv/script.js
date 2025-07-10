// // Calculadora de IMC
// document.getElementById('calculadora').addEventListener('submit', function (event) {
//   event.preventDefault();

//   const peso = parseFloat(document.getElementById('peso').value);
//   const altura = parseFloat(document.getElementById('altura').value);

//   if (!peso || !altura || altura === 0) {
//     document.getElementById('resultado').textContent = 'Preencha os campos corretamente.';
//     return;
//   }

//   const imc = peso / (altura * altura);
//   const agua = peso * 35;

//   document.getElementById('resultado').innerHTML = `
//     Seu IMC é <strong>${imc.toFixed(2)}</strong>.<br>
//     Você deve beber aproximadamente <strong>${(agua / 1000).toFixed(2)} litros</strong> de água por dia.
//   `;
// });

// // Carrossel de Slides
// let slideIndex = 0;
// const slides = document.querySelectorAll('.carrossel-conteudo');
// const totalSlides = slides.length;

// document.querySelector('.btn-next').addEventListener('click', () => {
//   slideIndex = (slideIndex + 1) % totalSlides;
//   updateSlideVisibility();
// });

// document.querySelector('.btn-prev').addEventListener('click', () => {
//   slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
//   updateSlideVisibility();
// });

// function updateSlideVisibility() {
//   slides.forEach((slide, index) => {
//     slide.style.display = index === slideIndex ? 'flex' : 'none';
//   });
// }

// // Inicializa o carrossel mostrando apenas o primeiro slide
// updateSlideVisibility();

// // Carrossel automático
// setInterval(() => {
//   slideIndex = (slideIndex + 1) % totalSlides;
//   updateSlideVisibility();
// }, 995000); // Troca a cada 5 segundos

//   document.addEventListener("DOMContentLoaded", () => {
//       const cards = document.querySelectorAll(".card");

//       cards.forEach(card => {
//         card.addEventListener("click", () => {
//           cards.forEach(c => c.classList.remove("open"));
//           card.classList.add("open");
//         });
//       });
//     });


















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

  // ✅ CARROSSEL
  const slides = document.querySelectorAll('.carrossel-conteudo');
  const totalSlides = slides.length;
  let slideIndex = 0;

  const btnNext = document.querySelector('.btn-next');
  const btnPrev = document.querySelector('.btn-prev');

  function updateSlideVisibility() {
    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? 'flex' : 'none';
    });
  }

  if (btnNext && btnPrev && totalSlides > 0) {
    btnNext.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % totalSlides;
      updateSlideVisibility();
    });

    btnPrev.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
      updateSlideVisibility();
    });

    updateSlideVisibility();

    setInterval(() => {
      slideIndex = (slideIndex + 1) % totalSlides;
      updateSlideVisibility();
    }, 5000);
  }

  // ✅ CARDS: apenas um aberto por vez + toggle suave com animação
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const description = card.querySelector(".description");

    card.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      // Fecha todos os outros cards
      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove("open");
          const d = c.querySelector(".description");
          d.style.maxHeight = null;
        }
      });

      // Toggle no card clicado
      if (isOpen) {
        card.classList.remove("open");
        description.style.maxHeight = null;
      } else {
        card.classList.add("open");
        description.style.maxHeight = description.scrollHeight + "px";
      }
    });
  });
});

