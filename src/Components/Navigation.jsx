import logo from "./../images/meme.png";
export default function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img id="meme-logo" src={logo} alt="laughing" />
        <h1 id="title">Meme Generator</h1>
      </div>
      <h3 id="secondary-title">React Course - Project 3</h3>
    </nav>
  );
}
