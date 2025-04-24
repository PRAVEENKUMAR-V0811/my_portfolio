import React from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/About/skills';
import Contact from './components/contact/contact';
import Footer from './components/Footer/footer';
import Portfolio from './components/Portfolio/portfolio';
import Experience from './components/Experience/experience';
import Education from './components/Education/education';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
