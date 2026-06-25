import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);
  const toggleMenu = () => setMobileOpen((current) => !current);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">
              Sachin<span>Rijal</span>
            </Link>
          </div>

          <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
            <li>
              <NavLink
                to="/"
                end
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                end
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                end
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                end
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                end
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "cta-button active" : "cta-button"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </div>
        </nav>
      </div>
      <div
        className={`nav-overlay ${mobileOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </header>
  );
}

export default Header;
