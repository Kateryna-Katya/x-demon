document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const menuBtnIcon = menuBtn.querySelector('use');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
  
      if (isMenuOpen) {
        openModal();
        menuBtnIcon.setAttribute('href', './img/sprite.svg#icon-cross');
      } else {
        closeModal();
        menuBtnIcon.setAttribute('href', './img/sprite.svg#icon-burger');
      }
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        menuBtnIcon.setAttribute('href', './img/sprite.svg#icon-burger');
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