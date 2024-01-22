import React from 'react';

function ProfessionalExperience() {
  return (
      <section>
        <h2>Professional Experience</h2>
        <ul>
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
        </ul>
      </section>
  );
}

function Experience({ title, organization, website }) {
  return (
    <li>
      {title},{" "}
      <a href={website} target="_blank" rel="noopener noreferrer" title={`Visit ${organization} website`}>
        {organization}
      </a>
    </li>
  );
}

export default ProfessionalExperience;
