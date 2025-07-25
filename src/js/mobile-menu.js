document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-button');
  const iconContainer = menuBtn.querySelector('.icon');
  const modalMenu = document.querySelector('.modal');
  const menuItem = document.querySelectorAll('.menu-list-item');
  const header = document.querySelector('.header');

  let isMenuOpen = false;

  const burgerIcon = `
    <svg class="icon-svg" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.3332 20.4167C23.7826 20.4169 24.2147 20.59 24.54 20.9002C24.8652 21.2103 25.0587 21.6337 25.0803 22.0826C25.1019 22.5315 24.9499 22.9715 24.656 23.3114C24.362 23.6513 23.9485 23.8651 23.5012 23.9085L23.3332 23.9167H4.6665C4.21708 23.9165 3.78498 23.7433 3.45972 23.4332C3.13446 23.1231 2.94099 22.6997 2.91939 22.2508C2.89779 21.8019 3.04973 21.3619 3.34371 21.0219C3.63769 20.682 4.05118 20.4682 4.4985 20.4248L4.6665 20.4167H23.3332ZM23.3332 12.25C23.7973 12.25 24.2424 12.4344 24.5706 12.7626C24.8988 13.0908 25.0832 13.5359 25.0832 14C25.0832 14.4641 24.8988 14.9093 24.5706 15.2374C24.2424 15.5656 23.7973 15.75 23.3332 15.75H4.6665C4.20238 15.75 3.75726 15.5656 3.42907 15.2374C3.10088 14.9093 2.9165 14.4641 2.9165 14C2.9165 13.5359 3.10088 13.0908 3.42907 12.7626C3.75726 12.4344 4.20238 12.25 4.6665 12.25H23.3332ZM23.3332 4.08334C23.7973 4.08334 24.2424 4.26772 24.5706 4.59591C24.8988 4.9241 25.0832 5.36921 25.0832 5.83334C25.0832 6.29747 24.8988 6.74259 24.5706 7.07078C24.2424 7.39897 23.7973 7.58334 23.3332 7.58334H4.6665C4.20238 7.58334 3.75726 7.39897 3.42907 7.07078C3.10088 6.74259 2.9165 6.29747 2.9165 5.83334C2.9165 5.36921 3.10088 4.9241 3.42907 4.59591C3.75726 4.26772 4.20238 4.08334 4.6665 4.08334H23.3332Z" fill="white"/>
    </svg>
  `;

  const crossIcon = `
    <svg class="icon-svg" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5591 4.5591C4.9172 4.20111 5.40282 4 5.90917 4C6.41553 4 6.90115 4.20111 7.25925 4.5591L14.0115 11.3114L20.7638 4.5591C21.124 4.21125 21.6063 4.01878 22.107 4.02313C22.6077 4.02748 23.0866 4.22831 23.4407 4.58236C23.7947 4.93641 23.9956 5.41536 23.9999 5.91605C24.0043 6.41673 23.8118 6.8991 23.464 7.25925L16.7117 14.0115L23.464 20.7638C23.8118 21.124 24.0043 21.6063 23.9999 22.107C23.9956 22.6077 23.7947 23.0866 23.4407 23.4407C23.0866 23.7947 22.6077 23.9956 22.107 23.9999C21.6063 24.0043 21.124 23.8118 20.7638 23.464L14.0115 16.7117L7.25925 23.464C6.8991 23.8118 6.41673 24.0043 5.91605 23.9999C5.41536 23.9956 4.93641 23.7947 4.58236 23.4407C4.22831 23.0866 4.02748 22.6077 4.02313 22.107C4.01878 21.6063 4.21125 21.124 4.5591 20.7638L11.3114 14.0115L4.5591 7.25925C4.20111 6.90115 4 6.41553 4 5.90917C4 5.40282 4.20111 4.9172 4.5591 4.5591Z" fill="white"/>
    </svg>
  `;

  menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
    isMenuOpen ? openModal() : closeModal();
  });

  menuItem.forEach(item =>
    item.addEventListener('click', () => {
      closeModal();
      iconContainer.innerHTML = burgerIcon;
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