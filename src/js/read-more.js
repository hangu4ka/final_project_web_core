const initReadMore = () => {
  const description = document.querySelector('.service-page__description');
  const button = document.querySelector('.service-page__read-more');

  if (!button || !description) return;

  button.addEventListener('click', () => {
    description.classList.toggle('service-page__description--expanded');

    const isExpanded = description.classList.contains(
      'service-page__description--expanded'
    );
    const buttonText = button.querySelector('.service-page__read-more-text');
    const buttonIcon = button.querySelector('.service-page__read-more-icon');

    if (buttonText) {
      buttonText.textContent = isExpanded ? 'Скрыть' : 'Читать далее';
    }

    if (buttonIcon) {
      buttonIcon.style.transform = isExpanded
        ? 'rotate(180deg)'
        : 'rotate(0deg)';
    }
  });
};

export default initReadMore;
