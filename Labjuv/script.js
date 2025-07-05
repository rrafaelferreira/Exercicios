

// Calculadora de IMC
document.getElementById('calculadora').addEventListener('submit', function (event) {
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

// Carrossel de Slides
let slideIndex = 0;
const slides = document.querySelectorAll('.carrossel-conteudo');
const totalSlides = slides.length;

document.querySelector('.btn-next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlideVisibility();
});

document.querySelector('.btn-prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlideVisibility();
});

function updateSlideVisibility() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? 'flex' : 'none';
  });
}

// Inicializa o carrossel mostrando apenas o primeiro slide
updateSlideVisibility();

// Carrossel automático
setInterval(() => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlideVisibility();
}, 995000); // Troca a cada 5 segundos