# Arhioz-Dev | Landing Page & Portfolio Backend

Este repositorio contiene el código fuente de mi sitio web personal y portafolio interactivo desplegado en **GitHub Pages**. 

La página ha sido diseñada para centralizar, estructurar y presentar mis proyectos de desarrollo backend de manera limpia y profesional, consumiendo de forma directa y dinámica la **REST API de GitHub**.

🌐 **Sitio Web desplegado:** [https://arhioz.github.io/](https://arhioz.github.io/)

---

## 🚀 Características Principales

* **Sincronización Automática con GitHub:** Consume los repositorios públicos del perfil a través de `fetch()` y la API pública de GitHub. No requiere actualizaciones manuales en código cuando se suben o modifican proyectos.
* **Filtrado Inteligente mediante Topics:** Filtra automáticamente los repositorios que cuentan con la etiqueta `portfolio`, evitando publicar borradores o proyectos incompletos.
* **Alternador de Tema (Modo Oscuro / Modo Claro):** Incluye un interruptor dinámico con persistencia de estado en el navegador mediante `localStorage`.
* **Diseño Minimalista & Responsive:** Estilizado en una paleta de colores oscuro/rojo con tipografía técnica y centrado simétrico, adaptable a dispositivos móviles y de escritorio.
* **Rendimiento Ligero:** Desarrollado al 100% con tecnologías web estándar sin dependencias de frameworks pesados de frontend.

---

## 🛠️ Tecnologías Utilizadas en este Proyecto

* **HTML5:** Estructura semántica y limpia.
* **CSS3:** Estilos personalizados, CSS Variables para el cambio de temas y maquetación con CSS Grid & Flexbox.
* **JavaScript (Vanilla JS / ES6+):** Peticiones asíncronas (`async/await`, `fetch`), manipulación del DOM y lógica del tema.
* **Devicon & FontAwesome:** Iconografía técnica y de enlaces sociales.
* **GitHub Pages:** Alojamiento y despliegue continuo (CD).

---

## 🛠️ Stack Tecnológico Principal (Perfil Backend)

Aunque este sitio web sirve de interfaz visual, mi enfoque principal está orientado al desarrollo backend:

* **Lenguaje Principal:** Python
* **Frameworks & Web Services:** FastAPI, REST APIs
* **Bases de Datos & ORM:** PostgreSQL, SQLite, SQLAlchemy
* **Contenedores & Entornos:** Docker, Docker Compose
* **Control de Versiones & OS:** Git, GitHub, Linux Debian, Windows

---

## 📁 Estructura del Proyecto

```text
.
├── index.html        # Estructura principal y maquetación HTML
├── styles.css        # Estilos, variables CSS y diseño responsive
├── app.js            # Lógica JS, consumo de GitHub API y selector de tema
└── README.md         # Documentación del repositorio
```

## 🔮 Próximas Mejoras (Roadmap)

* [] Incorporar carrusel/galería de imágenes y capturas de pantalla de los sistemas en producción dentro de cada tarjeta de proyecto.

* [] Integrar enlaces directos a la documentación OpenAPI / Swagger UI de los endpoints desplegados.

* [] Agregar un botón de descarga directa para mi CV en formato PDF.

## 📬 Contacto

* **GitHub:** [@Arhioz](https://github.com/Arhioz)
* **Website:** [arhioz.github.io](https://arhioz.github.io/)