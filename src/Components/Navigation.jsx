import logo from "./../images/meme.png";
export default function Navigation() {
  return (
    <nav className="logo"> 
        <img id="meme-logo" src={logo} alt="laughing" />
        <h1 id="title">Meme Generator</h1>
    </nav>
  );
}
