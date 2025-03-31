import React from 'react';
import { Link } from 'react-router-dom';
import lukaImg from './luka.png'; 
import cjImg from './cj.png'; 

function Home() {
  return (
    <div className="home-page d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Emmanuel Rodriguez</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link className="nav-link active" to="/">Home</Link>
              <Link className="nav-link" to="/projects">Projects</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="px-3" id="home">
          <h1 className="display-5 fw-bold">Welcome To My Portfolio</h1>
          <p className="lead">Showcasing my work in AI Ethics, Accessibility, and Web Development.</p>

          <section className="mt-5">
            <h2 className="text-white">About Me</h2>
            <p className="text-white">
              Hey my name is Emmanuel Rodriguez Padron, I am 22 years old, born in Dallas, and currently pursuing a degree in Computer Science. 
              I'm a big fan of the Los Angeles Lakers, especially now that they have Luka Dončić on the team, 
              whom I started following after he was traded from the Mavericks in February. Additionally, 
              I support the Houston Texans who have arguably one of my favorite new quarterbacks cj stroud.
            </p>
            
            <div className="d-flex justify-content-center">
              <img src={lukaImg} alt="Luka Dončić" className="img-fluid mx-3" style={{ maxWidth: '150px' }} />
              <img src={cjImg} alt="CJ Stroud" className="img-fluid mx-3" style={{ maxWidth: '150px' }} />
            </div>
          </section>

          <section className="mt-5">
            <h2 className="text-white">About My Projects</h2>
            <p className="text-white">
              My projects focus on making technology more inclusive. The AI Ethics Site Code Project explores ethical issues in AI development. 
              The Dyslexia Coding Project creates tools to improve digital accessibility for individuals with dyslexia. Finally, the Colorblind 
              Accessibility Project enhances digital experiences for users with color vision deficiencies.
            </p>
          </section>
        </main>

        <section id="projects" className="mt-5">
          <h2 className="text-white">My Projects</h2>
          <ul className="list-group text-dark">
            <li className="list-group-item">
              <Link to="/projects">AI Ethics Site Code Project</Link>
            </li>
            <li className="list-group-item">
              <Link to="/projects">Dyslexia Coding Project</Link>
            </li>
            <li className="list-group-item">
              <Link to="/projects">Colorblind Accessibility Project</Link>
            </li>
          </ul>
        </section>

        <footer className="mt-auto text-white-50">
          <p>&copy; 2025 Emmanuel Rodriguez. Built with <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
