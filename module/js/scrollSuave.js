// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo
export default function scrollSuave() {
  const menuItems = document.querySelectorAll('#menu a[href^="#"]');

  function handleScrollSuave(top, left) {
    window.scrollTo({ top, left, behavior: 'smooth' });
  }

  function leftTop(item) {
    const top = item.offsetTop - 20;
    const left = item.offsetLeft;
    handleScrollSuave(top, left);
  }

  function handleReference(event) {
    event.preventDefault();
    const hrefMenu = event.target.getAttribute('href');
    const section = document.querySelectorAll(`${hrefMenu}`);
    section.forEach((item) => leftTop(item));
  }

  menuItems.forEach((menu) => {
    menu.addEventListener('click', handleReference);
  });
}
