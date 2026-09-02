const GITHUB_USERNAME = 'Arhioz';
const FEATURED_TOPIC = 'portfolio';

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

// --- Consulta a la API de GitHub ---
async function fetchGithubProjects() {
  const container = document.getElementById('projects-container');
  
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error('No se pudieron obtener los repositorios');
    }
    
    const repos = await response.json();
    
    const featuredRepos = repos.filter(repo => {
      const hasTopic = repo.topics && repo.topics.includes(FEATURED_TOPIC);
      return !repo.fork && hasTopic;
    });

    if (featuredRepos.length === 0) {
      container.innerHTML = `
        <div class="no-projects">
          No se encontraron repositorios etiquetados con "<code>${FEATURED_TOPIC}</code>".<br>
          Añade el topic <code>${FEATURED_TOPIC}</code> a tus repositorios públicos preferidos en GitHub.
        </div>
      `;
      return;
    }

    container.innerHTML = '';

    featuredRepos.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card';

      card.innerHTML = `
        <div>
          <h3 class="card-title">${repo.name}</h3>
          <p class="card-description">${repo.description || 'Proyecto Backend enfocado en arquitectura y código limpio.'}</p>
        </div>
        <div class="card-footer">
          <span class="card-lang">${repo.language || 'Python'}</span>
          <a href="${repo.html_url}" target="_blank" class="btn-repo">Ver Repositorio &rarr;</a>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error:', error);
    container.innerHTML = `<div class="no-projects">Error al cargar repositorios desde GitHub.</div>`;
  }
}

document.getElementById('year').textContent = new Date().getFullYear();
fetchGithubProjects();