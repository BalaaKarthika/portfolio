const experience = [
  { title: 'Associate Engineer', date: '01/2026 - Present', duration: 'Present', company: 'Adk Rage Communications (Acquired by Assembly Global) - Chennai, India', description: 'Working on full-stack development using FastAPI and Next.js for enterprise web applications. Developing scalable backend APIs and integrating backend services with frontend applications, and building production-ready features using modern web technologies.', tags: ['FastAPI', 'Next.js', 'REST APIs'] },
  { title: 'Trainee Engineer', date: '05/2025 - 12/2025', duration: '8 Months', company: 'ADK Rage Communication Pvt Ltd - Chennai, India', description: 'Developed and maintained client websites using Next.js, Strapi and Drupal. Created and integrated CMS APIs with Next.js applications for dynamic content delivery, and worked on live production websites implementing frontend features and enhancements.', tags: ['Next.js', 'Strapi', 'Drupal'] },
  { title: 'Web Developer Intern', date: '11/2024 - 05/2025', duration: '7 Months', company: 'ADK Rage Communication Pvt Ltd - Chennai, India', description: 'Built responsive frontend applications using React.js and Next.js. Developed and integrated REST APIs using Core PHP and Laravel, and worked with MySQL contributing to live client projects.', tags: ['React.js', 'Laravel', 'MySQL'] },
]

const projects = [
  { title: 'AGD Insights - CRUD Application', description: 'Full-stack CRUD app built with Next.js and FastAPI, handling Create, Read, Update and Delete operations across a live backend and frontend.', link: 'https://agd-insights.ragecom.com/' },
  { title: 'Earth Summit', description: 'Live website built with Next.js and Strapi CMS, including custom Strapi fields, API integration, SEO and ongoing enhancements.', link: 'https://earth-summit.com/' },
  { title: 'Mahindra AFS Pulse', description: 'Enterprise intranet platform built with Next.js and Drupal CMS, with custom Drupal APIs and CMS-driven content delivery.', link: 'https://afspulse.mahindra.com/' },
]

const skills = [
  ['⚛', 'React.js'], ['▲', 'Next.js'], ['🐍', 'Python'], ['ϟ', 'FastAPI'], ['▣', 'Strapi'], ['◈', 'Drupal'], ['▤', 'MySQL'], ['◉', 'PostgreSQL'], ['↗', 'REST APIs'], ['◉', 'GitHub'], ['◍', 'Docker'], ['⌁', 'JWT / OAuth'],
]

function App() {
  return (
    <div className="portfolio-app">
      <header className="navbar">
        <a className="brand" href="#home"><span>&lt;/&gt;</span> Karthika<span className="brand-dot">.</span></a>
        <nav aria-label="Main navigation">
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Resume', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="hire-button" href="#contact">Hire Me</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="status-pill"><span /> Open to work</p>
            <p className="hello">👋 Hello, I'm</p>
            <h1>Karthika Balakrishnan</h1>
            <p className="role"><span className="role-static">Full Stack</span> <span className="role-rotator"><span>Developer</span><span>Builder</span><span>Problem Solver</span></span></p>
            <p className="hero-description">I build responsive, production-ready web applications using React.js, Next.js, Python &amp; FastAPI - from CMS-driven frontends to scalable backend REST APIs.</p>
            <div className="hero-actions"><a className="primary-button" href="#projects">View My Work <span>→</span></a><a className="secondary-button" href="#contact">Hire Me <span>→</span></a></div>
            <div className="stats"><div><strong>~2</strong><span>YEARS EXPERIENCE</span></div><div><strong>5+</strong><span>PROJECTS</span></div><div><strong>∞</strong><span>PASSION</span></div></div>
            <a className="scroll-cue" href="#about"><i /> SCROLL DOWN</a>
          </div>
          <div className="hero-visual">
            <div className="hero-card"><div className="hero-card-inner"><img src="/karthika-photo.jpg" alt="Karthika B" onError={(event) => { event.currentTarget.style.display = 'none' }} /></div></div>
            <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="orbit-ring ring-three" />
            <span className="tech-badge badge-api">↗ <small>API</small></span><span className="tech-badge badge-react">⚛ <small>React</small></span><span className="tech-badge badge-next">▲ <small>Next.js</small></span><span className="tech-badge badge-python">🐍 <small>Python</small></span><span className="tech-badge badge-fastapi">⚡ <small>FastAPI</small></span><span className="tech-badge badge-oauth">🔐 <small>OAuth</small></span>
            <p className="photo-hint">⌕ Click to enlarge</p>
          </div>
        </section>

        <section className="content-section about" id="about"><div className="section-label">About Me</div><div><h2>A quick introduction to who I am and what I do</h2><p>I'm a Full Stack Developer with nearly two years of professional experience - 1.5+ years full-time plus a six-month internship - building and maintaining production web applications with React.js, Next.js, Python and FastAPI. I also work across CMS platforms like Strapi and Drupal, and databases including MySQL and PostgreSQL. Currently expanding my expertise in Python full-stack development, with hands-on experience in REST API integration, performance optimization, and enterprise web platforms.</p></div></section>

        <section className="resume-strip" id="resume"><div><div className="section-label">Resume</div><h2>Want to know more?</h2></div><div><p>See my full skills, education and experience history in one place. View the formatted resume in your browser or download a copy for later.</p><div className="resume-actions"><a className="resume-button resume-view" href="/resume.html" target="_blank" rel="noreferrer">◉ View Resume <span>↗</span></a><a className="resume-button resume-download" href="/resume.html" download="Karthika-Balakrishnan-Resume.html">⇩ Download Resume <span>↓</span></a></div></div></section>

        <section className="content-section experience" id="experience"><div className="section-label">Experience</div><div><h2>Work Experience</h2><div className="timeline">{experience.map((item, index) => <article className="experience-card" key={item.title}><span className="timeline-node">{String(index + 1).padStart(2, '0')}</span><div className="card-heading"><h3>{item.title}</h3><time>{item.duration}</time></div><div className="company">🏢 {item.company}</div><p>{item.description}</p><div className="experience-meta"><span>{item.date}</span><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>

        <section className="content-section skills skills-section" id="skills"><div className="section-label"></div><div><h2>My <em>Skills</em></h2><p className="skills-subtitle">Technologies and tools I work with daily</p><div className="skills-grid">{skills.map(([icon, name], index) => <div className="skill-card" style={{ '--skill-index': index }} key={name}><span className="skill-icon">{icon}</span><strong>{name}</strong></div>)}</div></div></section>

        <section className="content-section projects" id="projects"><div className="section-label">Projects</div><div><h2>Some of the things I've built</h2><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.title}><h3>{project.title}</h3><p>{project.description}</p><a href={project.link} target="_blank" rel="noreferrer">Live Demo <span>→</span></a></article>)}</div></div></section>

        <section className="content-section background" id="background"><div className="section-label">Education &amp; Certificates</div><div><h2>Background</h2><div className="education"><div><strong>B.Sc. Computer Science</strong><span>Queen Marys College · CGPA 8.2/10.0</span></div><div className="education-date">08/2020 - 05/2023<br />Chennai, India</div></div><div className="certificates"><span>Above &amp; Beyond Recognition Award - Assembly Global (2026)</span><span>Data Analysis with Python - IBM</span><span>Java Full-Stack Development Course - Besant Technology</span></div></div></section>

        <section className="contact" id="contact"><div className="section-label">Get In Touch</div><div><h2>Let's build something together</h2><div className="contact-links"><a href="mailto:balakarthika2003@gmail.com"><b>@</b><span>Email<small>balakarthika2003@gmail.com</small></span></a><a href="tel:+916383984605"><b>#</b><span>Phone<small>+91 6383984605</small></span></a></div><div className="social-links"><a href="https://www.linkedin.com/in/karthika-balakrishnan-5689b3275" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/BalaaKarthika" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
      </main>
      <footer>© 2026 Karthika B - Full Stack Developer</footer>
    </div>
  )
}

export default App
