import React from "react";
import repertoireData from "./Content/copy/repertoire.json";

export default function Repertoire() {
  return (
    <section>
      <div id="Repertoire">
        <h2>Repertoire</h2>
        <div>
          <h3>Solo Works</h3>
          {repertoireData.contemporaryWorks.soloWorks.map((composition) => (
            <div key={composition} className="composition">
              <p>{composition}</p>
            </div>
          ))}
        </div>
        <div>
          <h3>Chamber Works</h3>
          {repertoireData.contemporaryWorks.chamberWorks.map((composition) => (
            <div key={composition} className="composition">
              <p>{composition}</p>
            </div>
          ))}
        </div>
        <div>
          <h3>Orchestral Works</h3>
          {repertoireData.contemporaryWorks.orchestralWorks.map((composition) => (
            <div key={composition} className="composition">
              <p>{composition}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
