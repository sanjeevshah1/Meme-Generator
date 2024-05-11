export default function MemePart(props) {
  return (
    <div className="meme-part">
      <img id="temp" src={props.url} alt="meme-image" className="meme-image" />
      <h2 className="meme--text top">{props.topText}</h2>
      <h2 className="meme--text bottom">{props.bottomText}</h2>
    </div>
  );
}
