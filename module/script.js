import MenuMobile from './js/menu-mobile.js';
import SlideNav from './js/slide.js';
import carSelect from './js/car-select.js';
import slideMain from './js/slide-main.js';
import scrollSuave from './js/scrollSuave.js';
import changeInfo from './js/changeInfo.js';
import selectMarcaCarro from './js/selectMarcaCarro.js';
import scrollMenu from './js/scroll-menu.js';

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

carSelect();

const slide = new SlideNav('.slide-container-desktop', '.slide-wrapper');
const slideMobileShow = new SlideNav('.slide-container-mobile', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
slideMobileShow.init();
slideMobileShow.addControl('.custom-controls');

const slideDesktop = new slideMain('.slide-desktop img', '.slide-desktop', '.voltar', '.seguinte');
const slideMobile = new slideMain('.slide-mobile img', '.slide-mobile', '.voltar', '.seguinte');
slideDesktop.init();
slideMobile.init();

scrollSuave();
changeInfo();

selectMarcaCarro();
scrollMenu()