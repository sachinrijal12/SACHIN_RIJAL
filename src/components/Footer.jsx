function Footer() {
  return (
    <footer>
      <div className="floating-elements">
        <div className="floating-element" />
        <div className="floating-element" />
        <div className="floating-element" />
      </div>
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Sachin Rijal | MERN Stack Developer</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/sachin-rijal-b35164354"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://www.instagram.com/sac__hin_09"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
