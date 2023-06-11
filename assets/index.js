const mainSection = document.getElementById('main-section');
const themeSelector = document.getElementById('theme-selector');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

themeSelector.addEventListener('change', (event) => {
    mainSection.dataset.theme = event.target.checked ? DARK_THEME : LIGHT_THEME;
});