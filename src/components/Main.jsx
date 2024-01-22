import React from 'react';
import Media from "./Media";
import Info from "./Info";
import ProfessionalExperience from "./ProfessionalExperience";
import Education from "./Education";
import Contact from "./Contact";
import Repertoire from "./Repertoire";
import Gallery from "./Gallery";

export default function Main() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="container">  
      <div id="content-wrapper">
        <div id="left-container">
          <div id="left-scroll">
            <section id="about">
              {/* <img
                src="/markus-lang.jpeg"
                alt="Markus Lang headshot with bass"
                style={{ width: '100%', height: 'auto' }}
              /> */}
                    <section>
          <h2 style={{fontSize: "45px", lineHeight: "45px"}}>Principal Bass,<br/>
            <a href="https://www.gso.se/en/" target="_blank" rel="noopener noreferrer">Gothenburg Symphony Orchestra</a>
          </h2>
      </section>
              <Info />
              <ProfessionalExperience />
              <Education />
            </section>
            <section id="media">
              <Media />
            </section>
            <section id="repertoire">
              <Repertoire />
            </section>
            {/* <section id="gallery">
              <Gallery />
            </section> */}
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
        <div id="right-container">
          <div id="right-scroll">
           <h1>Markus Lang</h1>

          <div id="menu">
              <button onClick={() => scrollToSection('about')}>About</button><br/>
              <button onClick={() => scrollToSection('media')}>Media</button><br/>
              <button onClick={() => scrollToSection('repertoire')}>Repertoire</button><br/>
              {/* <button onClick={() => scrollToSection('gallery')}>Gallery</button><br/> */}
              <button onClick={() => scrollToSection('contact')}>Contact</button><br/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
