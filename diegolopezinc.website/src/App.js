import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Diego Lopez</h1>
        <p>Welcome to my portfolio</p>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>I'm a passionate developer with experience in...</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>LinkedIn: linkedin.com/in/yourprofile</p>
          <p>GitHub: github.com/diegolopezinc</p>
        </section>
      </main>
    </div>
  );
}

export default App;