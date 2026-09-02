// --- Gestión de Modo Claro / Oscuro ---
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
}

themeToggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    updateThemeIcon('light');
  }
});

function updateThemeIcon(theme) {
  const icon = themeToggleBtn.querySelector('i');
  if (theme === 'light') {
    icon.className = 'fa-solid fa-sun';
  } else {
    icon.className = 'fa-solid fa-moon';
  }
}

// Actualizar año en el footer automáticamente
document.getElementById('year').textContent = new Date().getFullYear();