import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-floating-elements">
          <div className="hero-floating-element" />
          <div className="hero-floating-element" />
          <div className="hero-floating-element" />
          <div className="hero-floating-element" />
        </div>
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>
              Hello, I'm <span className="highlight">Sachin Rijal</span>
            </h1>
            <h2>MERN Stack Developer</h2>
            <p>
              I build modern, scalable web applications with MongoDB, Express,
              React, and Node.js. Currently learning and growing as a full-stack
              developer.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn primary">
                Learn More
              </Link>
              <Link to="/projects" className="btn secondary">
                View Projects
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/aii.jpg" alt="Sachin Rijal" className="hero-photo" />
          </div>
        </div>
      </section>

      <section className="quick-links">
        <div className="container">
          <h2>My Journey</h2>
          <div className="links-grid">
            <div className="link-card hover-lift fade-in">
              <div className="link-icon">🚀</div>
              <h3>MERN Stack</h3>
              <p>
                Learning MongoDB, Express, React, and Node.js. Building projects
                to strengthen my understanding.
              </p>
              <Link to="/skills" className="btn outline">
                Explore Skills
              </Link>
            </div>
            <div className="link-card hover-lift fade-in">
              <div className="link-icon">💼</div>
              <h3>My Projects</h3>
              <p>
                Check out my projects including Login System, Blog Platform, and
                Restaurant Food Order app.
              </p>
              <Link to="/projects" className="btn outline">
                View Projects
              </Link>
            </div>
            <div className="link-card hover-lift fade-in">
              <div className="link-icon">🎯</div>
              <h3>Next Goals</h3>
              <p>
                Planning to learn TypeScript, Next.js, and Docker deployment in
                the coming months.
              </p>
              <Link to="/contact" className="btn outline">
                Connect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
