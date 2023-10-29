import MenuMobile from './js/menu-mobile.js';
import SlideNav from './js/slide.js';
import carSelect from './js/car-select.js';

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');

carSelect();
