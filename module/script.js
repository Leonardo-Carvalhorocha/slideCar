import MenuMobile from './js/menu-mobile.js';
import SlideNav from './js/slide.js';
import carSelect from './js/car-select.js';
import slideMain from './js/slide-main.js';
import scrollSuave from './js/scrollSuave.js';
import changeInfo from './js/changeInfo.js';

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

carSelect();

const slide = new SlideNav('.mobile-desktop', '.slide-wrapper');
const slideMobileShow = new SlideNav('.mobile-slide-show', '.slide-wrapper-show');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
slideMobileShow.init();
slideMobileShow.addControl('.custom-controls-mobile');

const slideDesktop = new slideMain('.slide-desktop img', '.slide-desktop');
const slideMobile = new slideMain('.slide-mobile img', '.slide-mobile');
slideDesktop.init();
slideMobile.init();

scrollSuave();
changeInfo();
