export default function selectMarcaCar() {
  const btnMarcas = document.querySelectorAll('.icons-marca li img');
  const controls = document.querySelectorAll('.custom-controls li');
  const imgsSlide = document.querySelectorAll('.slide li');

  btnMarcas.forEach((btn) => {
    btn.addEventListener('click', handleClick);
  });

  function handleClick(event) {
    const parent = event.target.parentElement;
    const marcaCarro = event.target.getAttribute('alt');
    parent.classList.toggle('filtrar');

    const filtroCarros = Array.from(controls).filter((control) => control.id === marcaCarro);
    const imgs = Array.from(imgsSlide).filter((img) => img.id === marcaCarro);

    if (filtroCarros.length > 0 && imgs.length > 0) {
      filtroCarros.forEach((carro) => {
        carro.classList.toggle('disabled');
      });

      imgs.forEach((img) => {
        img.classList.toggle('disabled');
        imgsSlide.forEach((imgS) => {
          setTimeout(() => {
            imgS.style.padding = 10 + 'px'
          }, 1000)
        })
    
      });
    }
  }
}
