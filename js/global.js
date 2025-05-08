//===== JavaScript para el menú hamburguesa ===== 
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
// ===== Slider de servicios =====
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideInterval;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
  currentSlide = index;
}
function nextSlide() {
  let index = (currentSlide + 1) % slides.length;
  showSlide(index);
}
function prevSlide() {
  let index = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(index);
}
// Eventos de controles del slider
next.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});
prev.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});
// Eventos para indicadores
indicators.forEach(indicator => {
  indicator.addEventListener('click', (e) => {
    const index = parseInt(e.target.getAttribute('data-slide'));
    showSlide(index);
    resetInterval();
  });
});
// Reinicia el intervalo para el slider
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}
slideInterval = setInterval(nextSlide, 5000);
// Sección boton scroll
const btnSubir = document.getElementById("btnSubir");

// Mostrar botón cuando se baja 100px
window.onscroll = function () {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  btnSubir.style.display = "block";
} else {
  btnSubir.style.display = "none";
}
};
// Desplazamiento suave al hacer clic
btnSubir.addEventListener("click", function () {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});