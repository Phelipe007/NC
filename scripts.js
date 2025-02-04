function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnToggle) {
        sidebar.classList.remove('open');
    }
});

function scrollHorizontal(direction) {
    const container = document.getElementById('mainProducts');
    if (direction === 'left') {
      container.scrollBy({
        left: -window.innerWidth, // Rolagem para a esquerda
        behavior: 'smooth'
      });
    } else if (direction === 'right') {
      container.scrollBy({
        left: window.innerWidth, // Rolagem para a direita
        behavior: 'smooth'
      });
    }
  }