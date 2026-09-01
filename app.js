const GITHUB_USERNAME = 'Arhioz';
// Nombre del topic/etiqueta que deben tener los repositorios a mostrar
const FEATURED_TOPIC = 'portfolio';

async function fetchGithubProjects() {
  const container = document.getElementById('projects-container');
  
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error('No se pudieron obtener los repositorios');
    }
    
    const repos = await response.json();
    
    // Filtrar repositorios: que tengan la etiqueta 'portfolio' y que no sean forks
    const featuredRepos = repos.filter(repo => {
      const hasTopic = repo.topics && repo.topics.includes(FEATURED_TOPIC);
      return !repo.fork && hasTopic;
    });

    if (featuredRepos.length === 0) {
      container.innerHTML = `
        <div class="no-projects">
          No se encontraron repositorios etiquetados con "${FEATURED_TOPIC}".<br>
          Añade el topic <code>${FEATURED_TOPIC}</code> en la configuración de tus repositorios públicos en GitHub.
        </div>
      `;
      return;
    }

    container.innerHTML = ''; // Limpiar mensaje de carga

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
    container.innerHTML = `<div class="no-projects">Error al cargar los repositorios de GitHub. Verifica tu usuario.</div>`;
  }
}

document.getElementById('year').textContent = new Date().getFullYear();
fetchGithubProjects();