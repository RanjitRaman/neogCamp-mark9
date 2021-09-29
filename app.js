import "./styles.css";
import React, { useState } from "react";

const musicDB = {
  Electronic: [
    { name: "So Far away", producer: "Martin garrix" },
    { name: "Propganda", producer: "DJ Snake" },
    { name: "Valetina Love", producer: "Yellow Claw" },
  ],
  Indie: [
    { name: "Ari Ari", producer: "Ritviz" },
    { name: "Lights", producer: "Nucleya" },
    { name: "Akela", producer: "Mojojojo" },
  ],
  Pop: [
    { name: "Im the One", producer: "Khaled" },
    { name: "Broadway", producer: "Dababy" },
    { name: "Stay", producer: "The Kid Laroi" },
  ],
};

const genres = Object.keys(musicDB);

export default function App() {
  const [currentGenre, setCurrentGenre] = useState("Electronic");
  const musicListHandler = (input) => {
    setCurrentGenre(input);
  };
  return (
    <div className='App'>
      <h1> 🎵 Music Recomendation</h1>
      <p> Checkout some of my favourite music </p>
      <div>
        {genres.map((genre) => (
          <button onClick={() => musicListHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr></hr>
      <div>
        {musicDB[currentGenre].map((item) => (
          <div style={{ border: "1px solid black", margin: "0.5rem" }}>
            <ul style={{ listStyle: "none" }}>
              <li>
                {" "}
                <p>
                  {" "}
                  Song name: <strong>{item.name}</strong>{" "}
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Artist: <strong> {item.producer} </strong>{" "}
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
