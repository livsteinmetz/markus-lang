import React from "react";
import Content from "./Content/Content";
import media from "./Content/copy/media.json"

export default function Media() {
  return (
    <section>
      <div id="Media">
        <h2>Media</h2>
        {media.map((p) => (
          <Content
            key={p.title}
            title={p.title}
            img={p.img}
            img2={p.img2}
            link={p.link}
            body={p.body}
            youTube={p.youTube}
          />
        ))}
       </div>
    </section>
  );
}
