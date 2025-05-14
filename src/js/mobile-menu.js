document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-button');
  const menuBtnIcon = menuBtn.querySelector('use');
  const modalMenu = document.querySelector('.modal');
  const menuItem = document.querySelectorAll('.menu-list-item');
  const header = document.querySelector('.header');

  const spriteBasePath = `${window.location.origin}/img/sprite.svg`;

  let isMenuOpen = false;

  menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      openModal();
      menuBtnIcon.setAttribute('href', `${spriteBasePath}#icon-cross`);
    } else {
      closeModal();
      menuBtnIcon.setAttribute('href', `${spriteBasePath}#icon-burger`);
    }
  });

  menuItem.forEach(item =>
    item.addEventListener('click', () => {
      closeModal();
      menuBtnIcon.setAttribute('href', `${spriteBasePath}#icon-burger`);
      isMenuOpen = false;
    })
  );

  window.addEventListener('scroll', blurHeader);

  function openModal() {
    modalMenu.style.display = 'block';
  }

  function closeModal() {
    modalMenu.style.display = 'none';
  }

  function blurHeader() {
    if (!header) return;
    if (window.scrollY > 60) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  }
});