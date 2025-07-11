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

      // ✅ CARROSSEL DE SLIDES
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

      // ✅ CARDS EXPANSÍVEIS
      const cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        card.addEventListener("click", () => {
          const isOpen = card.classList.contains("open");

          cards.forEach(c => c.classList.remove("open"));

          if (!isOpen) {
            card.classList.add("open");
          }
        });
      });
    });