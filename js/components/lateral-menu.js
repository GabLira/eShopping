export function lateralMenu() {
    /**
     * Realizar menu lateral
     */
    const barIcon = document.querySelector('.bar__icon');
    const menu = document.querySelector('.lateral__menu');
    const opacity = document.querySelector('.opacity');
    barIcon.addEventListener('click', () => {
        menu.classList.add('show');
        opacity.style.display = 'block';
    });
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('show');
        opacity.style.display = 'none';
    });
}