/* Open and close navbar */

const $btnMenu = document.getElementById('btn-menu');
const $navbar = document.getElementById('navbar');

$btnMenu.addEventListener('click', () => {
    $navbar.classList.toggle('is-active');
})