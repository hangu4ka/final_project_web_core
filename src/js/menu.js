const initMenu = () => {
    const menuOpenBtn = document.querySelector('.service-page__menu-btn');
    const menuCloseBtn = document.querySelector('.mobile-menu__btn__close');
    const menu = document.querySelector('.mobile-menu__fixed');
    const body = document.body;

    if (!menuOpenBtn || !menuCloseBtn || !menu) return;

    menuOpenBtn.addEventListener('click', () => {
        menu.classList.add('mobile-menu__fixed--open');
        body.style.overflow = 'hidden';
    });

    menuCloseBtn.addEventListener('click', () => {
        menu.classList.remove('mobile-menu__fixed--open');
        body.style.overflow = ''; 
    });

    menu.addEventListener('click', (e) => {
        if (e.target === menu) {
            menu.classList.remove('mobile-menu__fixed--open');
            body.style.overflow = '';
        }
    });
};

