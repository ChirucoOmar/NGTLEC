let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4000);

function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('show');
}

function showMore() {
  document.getElementById('primary').innerHTML += `
    <div class="subject"><img src="images/ingles.png"><p>Inglês</p></div>
    <div class="subject"><p>Educação Moral e Cívica</p></div>
    <div class="subject"><p>Educação Visual e Ofícios</p></div>
  `;
  document.getElementById('moreBtn').style.display = 'none';
}
// SLIDER BOAS-VINDAS
let welcomeSlides = document.querySelectorAll('.welcome-slide');
let welcomeIndex = 0;

setInterval(() => {
  welcomeSlides[welcomeIndex].classList.remove('active');
  welcomeIndex = (welcomeIndex + 1) % welcomeSlides.length;
  welcomeSlides[welcomeIndex].classList.add('active');
}, 4000); // muda a cada 4 segundos
