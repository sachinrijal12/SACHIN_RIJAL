import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState({ state: "", message: "" });
  const [copyText, setCopyText] = useState("Copy Email");

  const copyEmail = () => {
    navigator.clipboard.writeText("rijalsachin58@gmail.com").then(() => {
      setCopyText("Copied!");
      setTimeout(() => setCopyText("Copy Email"), 2000);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "Sending your message..." });

    setTimeout(() => {
      setStatus({
        state: "success",
        message:
          "✓ Thank you! Your message has been sent. I'll get back to you soon.",
      });
      event.target.reset();
      setTimeout(() => setStatus({ state: "", message: "" }), 5000);
    }, 1500);
  };

  return (
    <>
      <section className="page-header">
        <div className="page-floating-elements">
          <div className="page-floating-element" />
          <div className="page-floating-element" />
          <div className="page-floating-element" />
        </div>
        <div className="container">
          <h1>Contact Me</h1>
          <p>Let's connect and discuss MERN stack development</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p>
                I'm open to discussing learning opportunities, collaboration on
                projects, or any tech-related queries.
              </p>

              <div className="email-copy hover-lift fade-in">
                <h4>📧 Email Address</h4>
                <div className="email-address">
                  <span className="email-text">rijalsachin58@gmail.com</span>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={copyEmail}
                  >
                    <i className="fas fa-copy" /> {copyText}
                  </button>
                </div>
              </div>

              <div className="contact-methods">
                <div className="contact-method hover-lift fade-in whatsapp">
                  <div className="contact-method-icon">
                    <i className="fab fa-whatsapp" />
                  </div>
                  <h4>WhatsApp</h4>
                  <p>Quick responses via WhatsApp</p>
                  <a
                    href="https://wa.me/9779765870064?text=Hi%20Sachin,%20I%20saw%20your%20portfolio"
                    className="whatsapp-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp" /> Message on WhatsApp
                  </a>
                </div>

                <div className="contact-method hover-lift fade-in call">
                  <div className="contact-method-icon">
                    <i className="fas fa-phone" />
                  </div>
                  <h4>Call Directly</h4>
                  <p>For urgent matters</p>
                  <a href="tel:+9779765870064" className="call-link">
                    <i className="fas fa-phone" /> Call Now
                  </a>
                </div>
              </div>

              <div className="social-contact hover-lift fade-in">
                <h3>Follow Me</h3>
                <div className="social-grid">
                  <a
                    href="https://www.linkedin.com/in/sachin-rijal-b35164354"
                    className="social-link linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/sac__hin_09"
                    className="social-link instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container hover-lift fade-in">
              <form className="contact-form" onSubmit={handleSubmit}>
                {status.state && (
                  <div className={`form-status ${status.state}`}>
                    {status.state === "loading" && (
                      <div className="loading-spinner" />
                    )}
                    {status.message}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <button type="submit" className="btn primary" id="submitBtn">
                  <i className="fas fa-paper-plane" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
