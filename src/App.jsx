import { useState } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    id: 1,
    title: "TaskZen",
    description:
      "Full Stack застосунок для керування завданнями, створений для зручної організації робочого процесу.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    type: "Full Stack Application",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Сучасний адаптивний сайт-портфоліо розробника.",
    technologies: ["React", "Vite", "CSS"],
    type: "Frontend Application",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "My New Project",
    description: "Опис проєкту",
    technologies: ["React", "Node.js"],
    type: "Full Stack Application",
    github: "#",
    demo: "#",
  },
];

const certificates = [
  {
    id: 1,
    title: "Fullstack JS",
    issuer: "Hillel IT School",
    year: "2025",
    image: "https://lms.ithillel.ua/uploads/certificates/67078471_en.png",
    link: "https://lms.ithillel.ua/uploads/certificates/67078471_en.png",
  },
];

const experience = [
  {
    id: 1,
    period: "2022 — 2026",
    position: "Kitchen Manager",
    company: "McDonald's",
    description:
      "Управління операційними процесами, командою та показниками ефективності.",
    responsibilities: [
      "Управління командою та розподіл завдань",
      "Навчання та розвиток співробітників",
      "Контроль KPI та операційних показників",
      "Контроль якості та дотримання стандартів",
      "Аналіз ефективності робочих процесів",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <div className="logo">VK</div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Відкрити меню"
        >
          ☰
        </button>

        <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Про мене
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Навички
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Проєкти
          </a>

          <a href="#certificates" onClick={() => setMenuOpen(false)}>
            Сертифікати
          </a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Досвід
          </a>

          <a href="#contacts" onClick={() => setMenuOpen(false)}>
            Контакти
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-subtitle">Привіт, мене звати</p>

            <h1>
              Владислав <span>Коріненко</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              Створюю сучасні вебзастосунки та розвиваюся у напрямку Full Stack
              Development.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                Мої проєкти
              </a>

              <a href="#contacts" className="button secondary">
                Зв'язатися зі мною
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">VK</div>
          </div>
        </section>

        <reveal>
          <section id="about" className="section about-section">
            <div className="section-header">
              <p className="section-label">01. Про мене</p>

              <h2>Створюю. Розвиваюся. Зростаю.</h2>
            </div>

            <div className="about-content">
              <div className="about-text">
                <p>
                  Мене звати Владислав Коріненко. Я Full Stack Developer, який
                  постійно розвивається у сфері веброзробки.
                </p>

                <p>
                  Мій основний стек — JavaScript, TypeScript, React, Node.js,
                  Express.js та бази даних MongoDB і PostgreSQL.
                </p>

                <p>
                  Завдяки досвіду управління командами та робочими процесами я
                  вмію не лише писати код, а й розуміти бізнес-завдання,
                  організовувати роботу та доводити завдання до результату.
                </p>
              </div>

              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-number">01</span>
                  <p>Full Stack Developer</p>
                </div>

                <div className="stat-card">
                  <span className="stat-number">02</span>
                  <p>Team Management</p>
                </div>

                <div className="stat-card">
                  <span className="stat-number">03</span>
                  <p>Continuous Learning</p>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="section skills-section">
            <div className="section-header">
              <p className="section-label">02. Мої навички</p>

              <h2>Технології, з якими я працюю</h2>
            </div>

            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-category-header">
                  <span className="skill-icon">⌘</span>
                  <h3>Frontend</h3>
                </div>

                <div className="skill-list">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Tailwind CSS</span>
                  <span>Sass / SCSS</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-header">
                  <span className="skill-icon">⚙</span>
                  <h3>Backend</h3>
                </div>

                <div className="skill-list">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>Nest.js</span>
                  <span>REST API</span>
                  <span>JWT</span>
                  <span>Passport.js</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-header">
                  <span className="skill-icon">◈</span>
                  <h3>Databases</h3>
                </div>

                <div className="skill-list">
                  <span>MongoDB</span>
                  <span>Mongoose</span>
                  <span>PostgreSQL</span>
                  <span>SQL</span>
                  <span>Prisma</span>
                  <span>Sequelize</span>
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-header">
                  <span className="skill-icon">◉</span>
                  <h3>Tools</h3>
                </div>

                <div className="skill-list">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Webpack</span>
                  <span>Vite</span>
                  <span>VS Code</span>
                  <span>WebStorm</span>
                </div>
              </div>
            </div>
          </section>
          <section id="projects" className="section projects-section">
            <div className="section-header">
              <p className="section-label">03. Мої проєкти</p>

              <h2>Що я створюю</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.id}>
                  <div className="project-top">
                    <span className="project-type">{project.type}</span>

                    <div className="project-links">
                      <a href={project.github}>GitHub</a>

                      <a href={project.demo}>Demo</a>
                    </div>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="certificates" className="section certificates-section">
            <div className="section-header">
              <p className="section-label">04. Сертифікати</p>

              <h2>Мій шлях розвитку</h2>
            </div>

            <div className="certificates-grid">
              {certificates.map((certificate) => (
                <article className="certificate-card" key={certificate.id}>
                  <div className="certificate-image-wrapper">
                    <img src={certificate.image} alt={certificate.title} />
                  </div>

                  <div className="certificate-info">
                    <span>{certificate.year}</span>

                    <h3>{certificate.title}</h3>

                    <p>{certificate.issuer}</p>

                    <a href={certificate.link} target="_blank" rel="noreferrer">
                      Переглянути сертифікат ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="experience" className="section experience-section">
            <div className="section-header">
              <p className="section-label">05. Досвід роботи</p>

              <h2>Досвід, який допомагає мені створювати кращі рішення</h2>
            </div>

            <div className="experience-list">
              {experience.map((job) => (
                <article className="experience-card" key={job.id}>
                  <div className="experience-period">{job.period}</div>

                  <div className="experience-content">
                    <h3>{job.position}</h3>

                    <h4>{job.company}</h4>

                    <p>{job.description}</p>

                    <ul>
                      {job.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contacts" className="section contacts-section">
            <div className="section-header">
              <p className="section-label">06. Контакти</p>

              <h2>Давайте створимо щось круте разом</h2>
            </div>

            <div className="contacts-content">
              <div className="contacts-text">
                <p>
                  Я відкритий до нових можливостей, цікавих проєктів і
                  співпраці.
                </p>

                <p>
                  Якщо у вас є цікавий проєкт або пропозиція — буду радий
                  обговорити її.
                </p>
              </div>

              <div className="contact-links">
                <a
                  href="mailto:vladkorinenko123@gmail.com"
                  className="contact-link"
                >
                  <span className="contact-label">Email</span>
                  <span className="contact-value">
                    vladkorinenko123@gmail.com
                  </span>
                </a>

                <a href="tel:+380660723100" className="contact-link">
                  <span className="contact-label">Телефон</span>
                  <span className="contact-value">+380 66 072 31 00</span>
                </a>

                <a
                  href="https://t.me/Benedict_00"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="contact-label">Telegram</span>
                  <span className="contact-value">@Benedict_00</span>
                </a>

                <a
                  href="https://github.com/0Benedict0"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/0Benedict0</span>
                </a>
              </div>
            </div>
          </section>
        </reveal>
      </main>
      <footer className="footer">
        <p>© 2026 Владислав Коріненко. Built with React.</p>

        <div className="footer-links">
          <a
            href="https://github.com/0Benedict0"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="https://t.me/Benedict_00" target="_blank" rel="noreferrer">
            Telegram
          </a>

          <a href="mailto:vladkorinenko123@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
