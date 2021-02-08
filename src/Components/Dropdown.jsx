import React from "react";

function Dropdown(props) {
  const allGenres = [
    "Select all",
    "Action RPG",
    "Battle Royale",
    "Fighting",
    "Fantasy",
    "Shooter",
    "MMORPG",
    "MMO",
    "MOBA",
    "Social",
    "Strategy",
    "Sports",
  ];
  return (
    <div style={{ textAlign: "center", padding: "20px 0 5px" }}>
      <label>Choose a genre:</label>
      <select onChange={props.handleChange}>
        {allGenres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
