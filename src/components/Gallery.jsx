import React from "react";
import Content from "./Content/Content";
import media from "./Content/copy/gallery.json"

export default function Media() {
  return (
    <section>
      <div id="Gallery">
        <h2>Gallery</h2>
        {media.map((p) => (
          <Content
            key={p.title}
            title={p.title}
            img={p.img}
            body={p.body}
          />
        ))}
       </div>
    </section>
  );
}
