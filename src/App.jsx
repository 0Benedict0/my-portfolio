import { useState } from 'react'
import Reveal from './Reveal'
const projects = [
  {
    id: 1,
    title: 'TaskZen',
    description:
      'Full Stack приложение для управления задачами, созданное для удобной организации рабочего процесса.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'Full Stack Application',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'Современный адаптивный сайт-портфолио разработчика.',
    technologies: ['React', 'Vite', 'CSS'],
    type: 'Frontend Application',
    github: '#',
    demo: '#',
  },
  {
  id: 3,
  title: 'My New Project',
  description: 'Описание проекта',
  technologies: ['React', 'Node.js'],
  type: 'Full Stack Application',
  github: '#',
  demo: '#',
},
]
const certificates = [
  {
    id: 1,
    title: 'Fullstack JS',
    issuer: 'Hillel IT School',
    year: '2025',
    image:
      'https://lms.ithillel.ua/uploads/certificates/67078471_en.png',
    link:
      'https://lms.ithillel.ua/uploads/certificates/67078471_en.png',
  },
]

const experience = [
  {
    id: 1,
    period: '2022 — 2026',
    position: 'Kitchen Manager',
    company: "McDonald's",
    description:
      'Управление операционными процессами, командой и показателями эффективности.',
    responsibilities: [
      'Управление командой и распределение задач',
      'Обучение и развитие сотрудников',
      'Контроль KPI и операционных показателей',
      'Контроль качества и соблюдения стандартов',
      'Анализ эффективности рабочих процессов',
    ],
  },
]
  function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <header className="header">
  <div className="logo">VK</div>

  <button
    className="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Открыть меню"
  >
    ☰
  </button>

  <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
    >
      Обо мне
    </a>

    <a
      href="#skills"
      onClick={() => setMenuOpen(false)}
    >
      Навыки
    </a>

    <a
      href="#projects"
      onClick={() => setMenuOpen(false)}
    >
      Проекты
    </a>

    <a
      href="#certificates"
      onClick={() => setMenuOpen(false)}
    >
      Сертификаты
    </a>

    <a
      href="#experience"
      onClick={() => setMenuOpen(false)}
    >
      Опыт
    </a>

    <a
      href="#contacts"
      onClick={() => setMenuOpen(false)}
    >
      Контакты
    </a>
  </nav>
</header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-subtitle">
              Привет, меня зовут
            </p>

            <h1>
              Владислав <span>Коріненко</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              Создаю современные веб-приложения и развиваюсь
              в направлении Full Stack Development.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                Мои проекты
              </a>

              <a href="#contacts" className="button secondary">
                Связаться со мной
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-placeholder">
              VK
            </div>
          </div>
        </section>
    <reveal>

        <section id="about" className="section about-section">
  <div className="section-header">
    <p className="section-label">01. Обо мне</p>

    <h2>Создаю. Развиваюсь. Расту.</h2>
  </div>

  <div className="about-content">
    <div className="about-text">
      <p>
        Меня зовут Владислав Коріненко. Я Full Stack Developer,
        который постоянно развивается в сфере веб-разработки.
      </p>

      <p>
        Мой основной стек — JavaScript, TypeScript, React, Node.js,
        Express.js и базы данных MongoDB и PostgreSQL.
      </p>

      <p>
        Благодаря опыту управления командами и рабочими процессами
        я умею не только писать код, но и понимать бизнес-задачи,
        организовывать работу и доводить задачи до результата.
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
    <p className="section-label">02. Мои навыки</p>

    <h2>Технологии, с которыми я работаю</h2>
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
    <p className="section-label">03. Мои проекты</p>

    <h2>Что я создаю</h2>
  </div>

  <div className="projects-grid">
    {projects.map((project) => (
      <article
        className="project-card"
        key={project.id}
      >
        <div className="project-top">
          <span className="project-type">
            {project.type}
          </span>

          <div className="project-links">
            <a href={project.github}>
              GitHub
            </a>

            <a href={project.demo}>
              Demo
            </a>
          </div>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>
<section id="certificates" className="section certificates-section">
  <div className="section-header">
    <p className="section-label">04. Сертификаты</p>

    <h2>Мой путь развития</h2>
  </div>

  <div className="certificates-grid">
    {certificates.map((certificate) => (
      <article
        className="certificate-card"
        key={certificate.id}
      >
        <div className="certificate-image-wrapper">
          <img
            src={certificate.image}
            alt={certificate.title}
          />
        </div>

        <div className="certificate-info">
          <span>{certificate.year}</span>

          <h3>{certificate.title}</h3>

          <p>{certificate.issuer}</p>

          <a
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
          >
            Посмотреть сертификат ↗
          </a>
        </div>
      </article>
    ))}
  </div>
</section>
<section id="experience" className="section experience-section">
  <div className="section-header">
    <p className="section-label">05. Опыт работы</p>

    <h2>Опыт, который помогает мне создавать лучшие решения</h2>
  </div>

  <div className="experience-list">
    {experience.map((job) => (
      <article
        className="experience-card"
        key={job.id}
      >
        <div className="experience-period">
          {job.period}
        </div>

        <div className="experience-content">
          <h3>{job.position}</h3>

          <h4>{job.company}</h4>

          <p>{job.description}</p>

          <ul>
            {job.responsibilities.map((responsibility) => (
              <li key={responsibility}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </article>
    ))}
  </div>
</section>

        <section id="contacts" className="section contacts-section">
  <div className="section-header">
    <p className="section-label">06. Контакты</p>

    <h2>Давайте создадим что-то крутое вместе</h2>
  </div>

  <div className="contacts-content">
    <div className="contacts-text">
      <p>
        Я открыт к новым возможностям, интересным проектам
        и сотрудничеству.
      </p>

      <p>
        Если у вас есть интересный проект или предложение —
        буду рад обсудить его.
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

      <a
        href="tel:+380660723100"
        className="contact-link"
      >
        <span className="contact-label">Телефон</span>
        <span className="contact-value">
          +380 66 072 31 00
        </span>
      </a>

      <a
        href="https://t.me/Benedict_00"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <span className="contact-label">Telegram</span>
        <span className="contact-value">
          @Benedict_00
        </span>
      </a>

      <a
        href="https://github.com/0Benedict0"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <span className="contact-label">GitHub</span>
        <span className="contact-value">
          github.com/0Benedict0
        </span>
      </a>
    </div>
  </div>
</section>
</reveal>
      </main>
      <footer className="footer">
  <p>
    © 2026 Владислав Коріненко. Built with React.
  </p>

  <div className="footer-links">
    <a
      href="https://github.com/0Benedict0"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>

    <a
      href="https://t.me/Benedict_00"
      target="_blank"
      rel="noreferrer"
    >
      Telegram
    </a>

    <a href="mailto:vladkorinenko123@gmail.com">
      Email
    </a>
  </div>
</footer>
    </div>
  )
}

export default App