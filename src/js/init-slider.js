import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const initResponsiveSlider = (sliderSelector, paginationSelector) => {
  let swiperInstance = null;

  const initSwiper = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile && !swiperInstance) {
      swiperInstance = new Swiper(sliderSelector, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        grabCursor: true,
        touchRatio: 1,
        resistanceRatio: 0.85,
        pagination: {
          el: paginationSelector,
          clickable: true
        }
      });
    } else if (!isMobile && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  };

  initSwiper();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initSwiper, 150);
  });
};

export default initResponsiveSlider;
