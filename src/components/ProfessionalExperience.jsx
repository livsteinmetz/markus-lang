import React from 'react';

function ProfessionalExperience() {
  return (
    <div>
      <section>
        <h2>Current Work</h2>
        <div>
          <h3>Principal Bass,{" "}
            <a href="https://www.gso.se/en/" target="_blank" rel="noopener noreferrer">Gothenburg Symphony Orchestra</a>
          </h3>
        </div>
      </section>

      <section>
        <h2>Professional Experience</h2>

        <Experience
          title="Guest Principal Bass"
          organization="Oslo Philharmonic Orchestra"
          website="https://ofo.no/en"
        />

        <Experience
          title="Guest Principal Bass"
          organization="Stockholm Philharmonic Orchestra"
          website="https://www.konserthuset.se/en/"
        />

        <Experience
          title="Sub List Member"
          organization="The Philadelphia Orchestra"
          website="https://www.philorch.org/"
        />

        <Experience
          title="Guest Principal Bass"
          organization="New Jersey Symphony"
          website="https://www.njsymphony.org/"
        />

        {/* <Experience
          title="Section Bass"
          organization="Symphony in C"
          website="https://symphonyinc.org/"
        /> */}

        <Experience
          title="Double Bass"
          organization="Verbier Festival Orchestra"
          website="https://www.verbierfestival.com/en/orchestra/verbier-festival-orchestra/"
        />

        <Experience
          title="Double Bass"
          organization="Lucerne Festival Academy"
          website="https://www.lucernefestival.ch/en/lucerne-festival-academy"
        />
      </section>
    </div>
  );
}

function Experience({ title, organization, website }) {
  return (
    <div>
      <h4>{title},{" "}
        <a href={website} target="_blank" rel="noopener noreferrer" title={`Visit ${organization} website`}>
          {organization}
        </a>
      </h4>
    </div>
  );
}

export default ProfessionalExperience;
