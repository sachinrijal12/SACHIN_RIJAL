function Projects() {
  return (
    <>
      <section className="page-header">
        <div className="page-floating-elements">
          <div className="page-floating-element" />
          <div className="page-floating-element" />
          <div className="page-floating-element" />
        </div>
        <div className="container">
          <h1>My Projects</h1>
          <p>Projects I've built while learning MERN stack development</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            <div className="project-card hover-lift fade-in">
              <div className="project-icon">🔐</div>
              <h3>User Authentication System</h3>
              <p>
                A complete login and registration system with user
                authentication, session management, and protected routes.
              </p>
              <div className="project-tech">
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">JWT</span>
              </div>
              <div className="project-features">
                <span>✅ User Registration</span>
                <span>✅ Login/Logout</span>
                <span>✅ Password Hashing</span>
                <span>✅ Protected Routes</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt" /> View Project
                </a>
              </div>
            </div>

            <div className="project-card hover-lift fade-in">
              <div className="project-icon">📝</div>
              <h3>Personal Blog Platform</h3>
              <p>
                A full-featured blog platform where users can create, edit,
                delete posts, and leave comments.
              </p>
              <div className="project-tech">
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
              </div>
              <div className="project-features">
                <span>✅ Create/Edit Posts</span>
                <span>✅ Categories & Tags</span>
                <span>✅ Comment System</span>
                <span>✅ User Profiles</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt" /> View Project
                </a>
              </div>
            </div>

            <div className="project-card hover-lift fade-in">
              <div className="project-icon">🍽️</div>
              <h3>Restaurant Food Order</h3>
              <p>
                An online food ordering system with menu browsing, cart
                functionality, and order placement.
              </p>
              <div className="project-tech">
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">Node.js</span>
              </div>
              <div className="project-features">
                <span>✅ Menu Display</span>
                <span>✅ Add to Cart</span>
                <span>✅ Order Summary</span>
                <span>✅ Order History</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt" /> View Project
                </a>
              </div>
            </div>

            <div className="project-card hover-lift fade-in">
              <div className="project-icon">🌤️</div>
              <h3>Weather Forecast App</h3>
              <p>
                A beautiful weather application that provides real-time weather
                data and 5-day forecast for any city worldwide.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">OpenWeather API</span>
                <span className="tech-tag">Axios</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">Netlify</span>
              </div>
              <div className="project-features">
                <span>✅ Real-time Weather</span>
                <span>✅ 5-Day Forecast</span>
                <span>✅ Search by City</span>
                <span>✅ Responsive Design</span>
              </div>
              <div className="project-links">
                <a
                  href="https://reactweatherforecastc.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <i className="fas fa-external-link-alt" /> View Project
                </a>
              </div>
            </div>
          </div>

          <div className="learning-note hover-lift fade-in">
            <div className="learning-note-content">
              <i className="fas fa-code" />
              <h3>Still Learning & Improving</h3>
              <p>
                I'm currently learning and building these projects to strengthen
                my MERN stack skills. Each project helps me understand
                full-stack development better. I'll be adding more projects as I
                progress in my learning journey.
              </p>
              <div className="next-learning">
                Next: TypeScript → Next.js → Docker
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
