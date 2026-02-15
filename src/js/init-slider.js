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
        pagination: {
          el: paginationSelector,
          clickable: true
        }
      });
    } else if (!isMobile && swiperInstance) {
      swiperInstance.destroy(true, true); // ⬅️ уничтожает Swiper на десктопе
      swiperInstance = null;
    }
  };

  initSwiper();
  window.addEventListener('resize', initSwiper);
};

export default initResponsiveSlider;
