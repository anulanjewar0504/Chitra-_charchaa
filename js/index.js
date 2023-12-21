const hamburgerIcon = document.querySelector('.hamburger-icon');
const navList = document.querySelector('.nav-list');

hamburgerIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
});
