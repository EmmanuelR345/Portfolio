import React from 'react';
import { Link } from 'react-router-dom'; 
import aiEthicsImg from './Aiethics.png'; 
import colorblindImg from './Colorblind.png'; 

function Projects() {
  return (
    <div className="projects-page d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Emmanuel Rodriguez</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link className="nav-link" to="/">Home</Link> {/* Changed from <a> to <Link> */}
              <Link className="nav-link active" to="/projects">Projects</Link>
              <Link className="nav-link" to="/contact">Contact</Link> {/* Changed from <a> to <Link> */}
            </nav>
          </div>
        </header>

        <main className="px-3" id="projects">
          <h1 className="display-5 fw-bold">My Projects</h1>
          <p className="lead">
            Below are some of the projects I've worked on, showcasing my skills in AI ethics, accessibility,
            and web development. Each project represents a unique challenge and a chance to apply my knowledge in real-world applications.
          </p>

          <section className="mt-5">
            <h2 className="text-white">AI Ethics Site Code Project</h2>
            <p className="text-white">
              This project focuses on exploring the ethical implications of AI in various sectors. It is a web application
              that showcases articles, case studies, and discussions related to AI ethics. The goal is to raise awareness
              about the challenges and considerations when implementing AI solutions in a responsible and fair manner.
            </p>
            <img src={aiEthicsImg} alt="AI Ethics Site Code" className="img-fluid mt-3" style={{ maxWidth: '100%' }} />
          </section>

          <section className="mt-5">
            <h2 className="text-white">Dyslexia Coding Project (Work In Progress)</h2>
            <p className="text-white">
              In this project, I created a tool to help individuals with dyslexia navigate and engage with digital content
              more easily. The tool offers features like text masking and custom font adjustments to improve readability.
              The aim is to enhance accessibility and create a more inclusive digital experience for people with learning disabilities.
            </p>
          </section>

          <section className="mt-5">
            <h2 className="text-white">Colorblind Accessibility Project</h2>
            <p className="text-white">
              The Colorblind Accessibility Project aims to improve digital accessibility for individuals with color vision deficiencies.
              This web application enhances visual content by adjusting color schemes and offering color-blind friendly alternatives,
              ensuring that users with color blindness can better perceive and interact with visual elements on a website.
            </p>
            <img src={colorblindImg} alt="Colorblind Accessibility" className="img-fluid mt-3" style={{ maxWidth: '100%' }} />
          </section>
        </main>

        <footer className="mt-auto text-white-50">
          <p>&copy; 2025 Emmanuel Rodriguez. Built with <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>.</p>
        </footer>
      </div>
    </div>
  );
}

export default Projects;
