import React from "react";
import repertoireData from "./Content/copy/repertoire.json";

export default function Repertoire() {
  return (
    <section>
      <div id="Repertoire">
        <h2>Repertoire</h2>
        <div>
          <h4>Solo Works</h4>
          {repertoireData.contemporaryWorks.soloWorks.map((composition) => (
            <div key={composition} className="composition">
              <p>{composition}</p>
            </div>
          ))}
        </div>
        <div>
          <h4>Chamber Works</h4>
          {repertoireData.contemporaryWorks.chamberWorks.map((composition) => (
            <div key={composition} className="composition">
              <p>{composition}</p>
            </div>
          ))}
        </div>
        <div>
          <h4>Orchestral Works</h4>
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
