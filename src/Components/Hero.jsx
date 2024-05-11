import MemePart from "./MemePart";
import React, { useState } from "react";
export default function Hero() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const getImage = () => {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage:
          allMemeImages[Math.floor(Math.random() * allMemeImages.length)].url,
      };
    });
  };

  const [allMemeImages, setAllMemeImages] = useState([]);

  React.useEffect(() => {
    async function getMemedata() {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        setAllMemeImages(data.data.memes);
      } catch (error) {
        console.error("Error fetching meme data:", error);
      }
    }
    getMemedata();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="form">
        <form>
          <div className="top-text">
            <label htmlFor="topText">Top text</label>
            <input
              id="topText"
              type="text"
              value={meme.topText}
              name="topText"
              onChange={handleChange}
            />
          </div>
          <div className="bottom-text">
            <label htmlFor="bottomText">Bottom text</label>
            <input
              id="bottomText"
              type="text"
              value={meme.bottomText}
              name="bottomText"
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="submit-part">
          <button onClick={getImage}>Get a new meme image 🖼</button>
        </div>
      </div>
      <MemePart
        url={meme.randomImage}
        topText={meme.topText}
        bottomText={meme.bottomText}
      />
    </>
  );
}
