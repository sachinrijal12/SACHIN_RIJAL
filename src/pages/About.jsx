function About() {
  return (
    <>
      <section className="page-header">
        <div className="page-floating-elements">
          <div className="page-floating-element" />
          <div className="page-floating-element" />
          <div className="page-floating-element" />
        </div>
        <div className="container">
          <h1>About Me</h1>
          <p>MERN Stack Developer | Computer Science Student</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="photo-frame">
                <img
                  src="/sachin.jpeg"
                  alt="Sachin Rijal"
                  className="profile-photo"
                />
              </div>
            </div>
            <div className="about-text">
              <h2>Sachin Rijal</h2>
              <p>
                I'm a passionate MERN Stack Developer and Computer Science
                student based in Nepal. I'm currently learning full-stack
                development and building projects to strengthen my skills.
              </p>
              <p>
                My journey started with curiosity about how websites work, which
                evolved into learning web development. Now I'm focused on
                mastering the MERN stack.
              </p>

              <div className="personal-info hover-lift">
                <div className="info-item">
                  <strong>📍 Location:</strong> <span>Nepal</span>
                </div>
                <div className="info-item">
                  <strong>🎓 Education:</strong>{" "}
                  <span>Computer Science (TU)</span>
                </div>
                <div className="info-item">
                  <strong>💻 Focus:</strong> <span>MERN Stack</span>
                </div>
                <div className="info-item">
                  <strong>🎯 Goal:</strong> <span>Full-Stack Developer</span>
                </div>
                <div className="info-item">
                  <strong>📧 Email:</strong>{" "}
                  <span>rijalsachin58@gmail.com</span>
                </div>
              </div>

              <div className="action-buttons">
                <a href="/projects" className="btn primary">
                  View Projects
                </a>
                <a href="/contact" className="btn secondary">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          <div className="mern-journey hover-lift fade-in">
            <div className="mern-content">
              <div className="mern-icon">🚀</div>
              <div className="mern-text">
                <h3>My MERN Stack Journey</h3>
                <p>
                  I'm actively learning the MERN stack - MongoDB, Express.js,
                  React.js, and Node.js. Through hands-on projects, I'm building
                  practical experience in full-stack development.
                </p>
                <div className="journey-highlights">
                  <span className="journey-highlight">📚 MongoDB Learning</span>
                  <span className="journey-highlight">
                    ⚡ Express.js Practice
                  </span>
                  <span className="journey-highlight">⚛️ React.js Basics</span>
                  <span className="journey-highlight">
                    🟢 Node.js Fundamentals
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="cs-student hover-lift fade-in">
            <h3>🎓 Computer Science Student</h3>
            <p>
              Studying under Tribhuvan University (TU), Nepal. My program covers
              programming fundamentals, database management, and software
              engineering principles.
            </p>
            <div className="cs-details">
              <div className="cs-item">
                <div className="cs-icon">📚</div>
                <div>
                  <strong>Current Focus</strong>
                  <p>MERN Stack Development</p>
                </div>
              </div>
              <div className="cs-item">
                <div className="cs-icon">🎯</div>
                <div>
                  <strong>Next Goal</strong>
                  <p>Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-section hover-lift fade-in">
              <h3>My Journey into Tech</h3>
              <p>
                Started learning web development with HTML, CSS, and JavaScript.
                Now I'm expanding into backend development with Node.js and
                Express, and frontend with React.
              </p>
            </div>
            <div className="detail-section hover-lift fade-in">
              <h3>Future Goals</h3>
              <p>
                After mastering MERN, I plan to learn TypeScript, Next.js, and
                Docker deployment to become a professional full-stack developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
