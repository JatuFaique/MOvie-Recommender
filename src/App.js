import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  Romance: [
    { name: "Small Foot", duration: "1Hr20min | 4.2/5" },
    { name: "Cloudy and the MeetBalls", duration: "1Hr50Min | 4/5" },
    { name: "Boss Baby", duration: " 1hr23Min | 3.7/5" }
  ],

  SuperHero: [
    { name: "Astro Boy", duration: "2hr10Min | 4.8/5" },
    { name: "Big Hero 6", duration: "2hr15Min | 4.3/5" },
    { name: "The Invincible", duration: "9hr30Min| 4/5" }
  ],

  Comedy: [
    { name: "The Pets", duration: "1hr20Min| 4.5/5" },
    { name: "Toy Story", duration: "5hr30Min | 5/5" },
    { name: "How to train your Dragon", duration: "3Hr20Mon | 4.2/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Comedy");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h2>Check out My Fav picks for you! </h2>
      <div>Select a category to check out my favourite Movie</div>

      <div style={{ margin: "1.5rem" }}>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className="genre-btn"
            style={{ padding: "0.5rem" }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <ul
          style={{
            paddingInlineStart: "1.5rem",
            listStyle: "none",
            padding: "0.5rem"
          }}
        >
          {movieDB[selectedGenre].map((movie) => (
            <li>
              <div style={{ fontSize: "larger", margin: "0.5rem" }}>
                {movie.name}
              </div>
              <div style={{ fontSize: "smaller" }}>{movie.duration}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
