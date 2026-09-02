// --- Diccionario de Traducciones ---
const translations = {
  es: {
    "hero-greeting": "Hola, soy",
    "hero-subtitle": "Desarrollador autodidacta apasionado por el desarrollo backend y la arquitectura de software. Me especializo en diseñar y construir APIs REST rápidas y escalables con Python y FastAPI, implementar modelos de datos eficientes con SQLAlchemy y PostgreSQL/SQLite, y empaquetar soluciones listas para producción utilizando Docker sobre entornos Linux Debian y Windows. Enfocado en escribir código limpio, mantenible y con buenas prácticas de desarrollo.",
    "techs-title": "Stack Tecnológico",
    "techs-desc": "Tecnologías con las que trabajo.",
    "exp-title": "Experiencia Laboral",
    "exp-desc": "Mi trayectoria profesional y recorrido en el sector tecnológico.",
    "exp1-date": "Enero 2026 - Presente",
    "exp1-role": "Desarrollador Backend Freelance",
    "exp1-company": "Trabajo Independiente",
    "exp1-body": "Diseño y desarrollo de APIs REST personalizadas utilizando Python y FastAPI. Implementación de bases de datos relacionales, autenticación de usuarios, empaquetado de aplicaciones con Docker y automatización de procesos para clientes particulares.",
    "exp2-date": "Feb 2015 - Presente",
    "exp2-role": "Ingeniero de Soporte TI",
    "exp2-body": "Mantenimiento de infraestructura tecnológica, soporte técnico especializado a usuarios, diagnóstico de redes y optimización de sistemas informáticos institucionales.",
    "proj-title": "Proyectos Destacados",
    "proj-desc": "Algunos proyectos en los que he trabajado.",
    "proj1-desc": "Sistema creado con Python y FastAPI para administrar, gestionar y centralizar las operaciones de gimnasios, con su base de datos en PostgreSQL.",
    "proj2-desc": "Aplicación desarrollada con Python y FastAPI para visualizar, consultar y registrar animes y videojuegos, y agregarlos a un diario personal con persistencia en una base de datos PostgreSQL.",
    "btn-repo": "Ver Repositorio",
    "footer-built": "Desarrollado con HTML, CSS y JS."
  },
  en: {
    "hero-greeting": "Hi, I'm",
    "hero-subtitle": "Self-taught developer passionate about backend development and software architecture. I specialize in designing and building fast, scalable REST APIs using Python and FastAPI, implementing efficient data models with SQLAlchemy and PostgreSQL/SQLite, and packaging production-ready solutions with Docker on Linux Debian and Windows environments. Focused on writing clean, maintainable code following software engineering best practices.",
    "techs-title": "Tech Stack",
    "techs-desc": "Technologies I work with.",
    "exp-title": "Work Experience",
    "exp-desc": "My professional career and journey in the tech industry.",
    "exp1-date": "January 2026 - Present",
    "exp1-role": "Freelance Backend Developer",
    "exp1-company": "Independent Work",
    "exp1-body": "Design and development of custom REST APIs using Python and FastAPI. Implementation of relational databases, user authentication, application containerization with Docker, and process automation for private clients.",
    "exp2-date": "Feb 2015 - Present",
    "exp2-role": "IT Support Engineer",
    "exp2-body": "Maintenance of IT infrastructure, specialized user technical support, network diagnostics, and optimization of institutional computer systems.",
    "proj-title": "Featured Projects",
    "proj-desc": "Some projects I have worked on.",
    "proj1-desc": "System built with Python and FastAPI to manage, administer, and centralize gym operations, utilizing a PostgreSQL database.",
    "proj2-desc": "Application developed with Python and FastAPI to view, query, and log anime and video games into a personal journal with PostgreSQL database persistence.",
    "btn-repo": "View Repository",
    "footer-built": "Built with HTML, CSS, and JS."
  }
};

// --- Gestor de Idioma ---
const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('language') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;

  // Actualizar todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Actualizar icono y texto del botón
  const flagSpan = langToggleBtn.querySelector('.flag-icon');
  const textSpan = langToggleBtn.querySelector('.lang-text');

  if (lang === 'es') {
    flagSpan.className = 'fi fi-mx flag-icon';
    textSpan.textContent = 'MX';
  } else {
    flagSpan.className = 'fi fi-us flag-icon';
    textSpan.textContent = 'US';
  }
}

langToggleBtn.addEventListener('click', () => {
  const newLang = currentLang === 'es' ? 'en' : 'es';
  setLanguage(newLang);
});

// Inicializar idioma
setLanguage(currentLang);


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

// Año dinámico en footer
document.getElementById('year').textContent = new Date().getFullYear();