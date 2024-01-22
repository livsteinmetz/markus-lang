import YouTube from "react-youtube";

export default function Content({ title, img, img2, link, body, youTube }) {
  const videoId = link ? link.split("v=")[1] : "";

  return (
    <div id="Content">
      <a id="title" href={link} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </a>
      {img ? <img className="project-img" src={process.env.PUBLIC_URL + img} alt={title} /> : null}
      {img2 ? <img className="project-img" src={process.env.PUBLIC_URL + img2} alt={title} /> : null}
      {videoId && youTube && <YouTube videoId={videoId} className="youtube-video" />}
      {videoId && !youTube && <iframe className="youtube-video" width="100%" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen title="Embedded video"></iframe>}
      <p>{body}{" "}{link && (
        <a id="learn-more" href={link} target="_blank" rel="noopener noreferrer">
          Click here for more.
        </a>
      )}</p>
 
    </div>
  );
}
