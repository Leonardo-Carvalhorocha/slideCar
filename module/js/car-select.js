export default function carSelect() {
  const imgs = document.querySelectorAll('.list-car img');
  const imgPrincipal = document.querySelector('#img-main img');
  const events = ['touchstart', 'click'];

  function handleSelect({ target }) {
    const srcImg = target.getAttribute('src');
    imgPrincipal.setAttribute('src', srcImg);
  }

  if (imgs.length > 0) {
    imgs.forEach((img) => {
      events.forEach((event) => img.addEventListener(event, handleSelect));
    });
  }
}
