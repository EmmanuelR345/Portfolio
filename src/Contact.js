import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

function Contact() {
  return (
    <div className="contact-page d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Emmanuel Rodriguez</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <Link className="nav-link" to="/">Home</Link> {/* Changed from <a> to <Link> */}
              <Link className="nav-link" to="/projects">Projects</Link> {/* Changed from <a> to <Link> */}
              <Link className="nav-link active" to="/contact">Contact</Link> {/* Changed from <a> to <Link> */}
            </nav>
          </div>
        </header>

        <main className="px-3" id="contact">
          <h1 className="display-5 fw-bold">Contact Me</h1>
          <p>Email: <a href="mailto:EmmanuelRodriguezPadron@my.unt.edu" className="text-white">EmmanuelRodriguezPadron@my.unt.edu</a></p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>&copy; 2025 Emmanuel Rodriguez. Built with <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>.</p>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
