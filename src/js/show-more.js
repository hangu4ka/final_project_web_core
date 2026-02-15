const createShowMoreHandler = (
  containerSelector,
  buttonSelector,
  textSelector,
  iconSelector
) => {
  const container = document.querySelector(containerSelector);
  const button = document.querySelector(buttonSelector);

  if (!button || !container) return;

  button.addEventListener('click', () => {
    const baseClass = container.className.split(' ')[0];
    const isExpanded = container.classList.contains(`${baseClass}--expanded`);

    if (isExpanded) {
      // Сворачиваем: убираем expanded, добавляем collapsed
      container.classList.remove(`${baseClass}--expanded`);
      container.classList.add(`${baseClass}--collapsed`);
    } else {
      // Разворачиваем: убираем collapsed, добавляем expanded
      container.classList.remove(`${baseClass}--collapsed`);
      container.classList.add(`${baseClass}--expanded`);
    }

    const buttonText = button.querySelector(textSelector);
    const buttonIcon = button.querySelector(iconSelector);

    if (buttonText) {
      buttonText.textContent = isExpanded ? 'Показать всё' : 'Скрыть';
    }

    if (buttonIcon) {
      buttonIcon.style.transform = isExpanded
        ? 'rotate(0deg)'
        : 'rotate(180deg)';
    }
  });
};

const initShowMore = () => {
  createShowMoreHandler(
    '.brands__list',
    '.brands__show-more',
    '.brands__show-more-text',
    '.brands__show-more-icon'
  );

  createShowMoreHandler(
    '.service-type__list',
    '.service-type__show-more',
    '.service-type__show-more-text',
    '.service-type__show-more-icon'
  );
};

export default initShowMore;
