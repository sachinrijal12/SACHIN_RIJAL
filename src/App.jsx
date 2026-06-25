import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    fadeElements.forEach((element) => fadeObserver.observe(element));

    const progressBars = document.querySelectorAll(".skill-progress");
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const level = entry.target.getAttribute("data-level");
            entry.target.style.width = `${level}%`;
            progressObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    progressBars.forEach((bar) => progressObserver.observe(bar));

    return () => {
      fadeObserver.disconnect();
      progressObserver.disconnect();
    };
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
