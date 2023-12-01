export default function changeInfo() {
  const li = document.querySelectorAll('.slide-container-mobile li');
  const btnCar = document.querySelector('.btn-automovel a');

  function listaLi() {
    li.forEach((li) => {
      if (li.classList.contains('active')) {
        const hrefListaPages = li.children[2].getAttribute('href');
        btnCar.setAttribute('href', hrefListaPages);
      }
    });
  }

  function handleMutation(mutations) {
    mutations.forEach((mutation) => {
      if (mutation.target.classList.contains('active')) {
        listaLi();
      }
    });
  }

  const observer = new MutationObserver(handleMutation);
  li.forEach((item) => {
    observer.observe(item, { attributes: true });
  });
}
