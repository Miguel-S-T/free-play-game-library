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
    <div>
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
