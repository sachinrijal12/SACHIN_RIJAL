function Skills() {
  return (
    <>
      <section className="page-header">
        <div className="page-floating-elements">
          <div className="page-floating-element" />
          <div className="page-floating-element" />
          <div className="page-floating-element" />
        </div>
        <div className="container">
          <h1>My Skills</h1>
          <p>MERN Stack & Web Development</p>
        </div>
      </section>

      <section className="skills-content">
        <div className="container">
          <div className="skills-intro">
            <p>
              I'm learning the MERN stack and building practical skills through
              projects. Here's my current technical skillset and learning
              roadmap.
            </p>
          </div>

          <div className="skill-category">
            <h2>MERN Stack Skills</h2>
            <div className="skills-grid">
              <div className="skill-item hover-lift fade-in">
                <div className="skill-icon">🍃</div>
                <h3>MongoDB</h3>
                <p>
                  NoSQL database, data modeling, basic CRUD operations, MongoDB
                  Atlas.
                </p>
                <div className="skill-level">
                  <div className="skill-progress" data-level="70" />
                </div>
                <ul className="skill-highlights">
                  <li>CRUD Operations</li>
                  <li>Schema Design</li>
                  <li>MongoDB Atlas</li>
                </ul>
              </div>
              <div className="skill-item hover-lift fade-in">
                <div className="skill-icon">⚡</div>
                <h3>Express.js</h3>
                <p>
                  Building REST APIs, middleware, routing, basic backend
                  development.
                </p>
                <div className="skill-level">
                  <div className="skill-progress" data-level="65" />
                </div>
                <ul className="skill-highlights">
                  <li>API Development</li>
                  <li>Routing</li>
                  <li>Middleware Basics</li>
                </ul>
              </div>
              <div className="skill-item hover-lift fade-in">
                <div className="skill-icon">⚛️</div>
                <h3>React.js</h3>
                <p>
                  Component-based UI, hooks, state management, basic frontend
                  development.
                </p>
                <div className="skill-level">
                  <div className="skill-progress" data-level="60" />
                </div>
                <ul className="skill-highlights">
                  <li>Components & Props</li>
                  <li>useState & useEffect</li>
                  <li>Basic Routing</li>
                </ul>
              </div>
              <div className="skill-item hover-lift fade-in">
                <div className="skill-icon">🟢</div>
                <h3>Node.js</h3>
                <p>
                  JavaScript runtime, backend logic, file system basics, npm
                  packages.
                </p>
                <div className="skill-level">
                  <div className="skill-progress" data-level="65" />
                </div>
                <ul className="skill-highlights">
                  <li>Server Creation</li>
                  <li>NPM Packages</li>
                  <li>Basic Backend</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h2>Frontend Technologies</h2>
            <div className="skills-grid">
              <div className="skill-item hover-lift fade-in">
                <div className="skill-icon">🌐</div>
                <h3>HTML5 & CSS3</h3>
                <p>
                  Semantic markup, Flexbox, Grid, animations, responsive design.
                </p>
                <div className="skill-level">
                  <div className="skill-progress" data-level="85" />
                </div>
              </div>
              <div className="skill-item hover-lift fade-in">
                <div className="skill-icon">💛</div>
                <h3>JavaScript</h3>
                <p>ES6+, DOM manipulation, async/await, fetch API.</p>
                <div className="skill-level">
                  <div className="skill-progress" data-level="75" />
                </div>
              </div>
              <div className="skill-item hover-lift fade-in">
                <div className="skill-icon">📱</div>
                <h3>Responsive Design</h3>
                <p>
                  Mobile-first approach, media queries, cross-browser
                  compatibility.
                </p>
                <div className="skill-level">
                  <div className="skill-progress" data-level="80" />
                </div>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h2>
              Next Learning Goals{" "}
              <span className="learning-badge">Upcoming</span>
            </h2>
            <div className="learning-grid">
              <div className="learning-item hover-lift fade-in">
                <h3>📘 TypeScript</h3>
                <p>
                  Type-safe JavaScript, interfaces, generics for better code
                  quality.
                </p>
              </div>
              <div className="learning-item hover-lift fade-in">
                <h3>⚛️ Next.js</h3>
                <p>
                  React framework for SSR, static sites, and modern web apps.
                </p>
              </div>
              <div className="learning-item hover-lift fade-in">
                <h3>🐳 Docker & Deployment</h3>
                <p>Containerization, CI/CD, cloud deployment strategies.</p>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h2>Development Tools</h2>
            <div className="tools-grid">
              <div className="tool-category hover-lift fade-in">
                <h3>Code Editors</h3>
                <div className="tools-list">
                  <span className="tool-tag">VS Code</span>
                  <span className="tool-tag">Postman</span>
                  <span className="tool-tag">MongoDB Compass</span>
                </div>
              </div>
              <div className="tool-category hover-lift fade-in">
                <h3>Version Control</h3>
                <div className="tools-list">
                  <span className="tool-tag">Git</span>
                  <span className="tool-tag">Git Basics</span>
                </div>
              </div>
              <div className="tool-category hover-lift fade-in">
                <h3>Design</h3>
                <div className="tools-list">
                  <span className="tool-tag">Figma</span>
                  <span className="tool-tag">Canva</span>
                </div>
              </div>
            </div>
          </div>

          <div className="future-goals hover-lift fade-in">
            <h2>📌 My Learning Roadmap</h2>
            <p>
              Currently learning MERN stack fundamentals. Planning to advance my
              skills with modern technologies.
            </p>
            <div className="goals-list">
              <div className="goal-item">
                <h4>✅ Currently Learning</h4>
                <ul>
                  <li>MongoDB Basics</li>
                  <li>Express.js APIs</li>
                  <li>React Components</li>
                  <li>Node.js Backend</li>
                </ul>
              </div>
              <div className="goal-item">
                <h4>🚀 Next to Learn</h4>
                <ul>
                  <li>TypeScript</li>
                  <li>Next.js Framework</li>
                  <li>Docker & Deployment</li>
                  <li>Advanced Backend</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
