export default function scrollMenu() { }

const menu = document.querySelector('.menu-header');
const redes = document.querySelector('.header-redes')
const empresa = document.querySelector('#empresa')

function esconderMenu() {
  if (empresa.getClientRects()[0].top < -100) {
    menu.classList.add('remove');
    redes.classList.add('remove');
  } else {
    menu.classList.remove('remove');
    redes.classList.remove('remove');
  }
}

window.addEventListener('scroll', esconderMenu);
