import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">Polymonomial</h1>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Welcome to My Portfolio</h2>
            <p className="hero-subtitle">
              Personal programming portfolio showcasing projects, experiments, and learning progress in software development.
            </p>
            <a href="#projects" className="cta-button">View My Work</a>
          </div>
        </section>

        <section id="about" className="section about">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I&apos;m a passionate software developer focused on creating innovative solutions 
              and continuously learning new technologies. This portfolio showcases my journey 
              in software development, including various projects and experiments.
            </p>
          </div>
        </section>

        <section id="projects" className="section projects">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your first project goes here.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your second project goes here.</p>
              <div className="project-tags">
                <span className="tag">Node.js</span>
                <span className="tag">API</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Description of your third project goes here.</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Data Science</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Git</li>
                <li>Vite</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>
              Interested in collaborating or have a question? Feel free to reach out!
            </p>
            <a href="https://github.com/Polymonomial" className="contact-link" target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Polymonomial. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
