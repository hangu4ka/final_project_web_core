import '../scss/style.scss';

import initResponsiveSlider from './init-slider';
import initMenu from './mobile-menu';
import initShowMore from './show-more';
import initReadMore from './read-more';

document.addEventListener('DOMContentLoaded', () => {
  initResponsiveSlider('.brands__slider', '.brands__slider .swiper-pagination');
  initResponsiveSlider(
    '.service-type__slider',
    '.service-type__slider .swiper-pagination'
  );
  initResponsiveSlider(
    '.service-price__slider',
    '.service-price__slider .swiper-pagination'
  );

  initMenu();
  initShowMore();
  initReadMore();
});
