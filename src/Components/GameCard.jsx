import React from "react";
import { Link } from "react-router-dom";

const GameCard = (props) => {
  return (
    <div
      className="card"
      key={props.index}
      style={{
        margin: "1vw",
        justifyContent: "space-around",
        textAlign: "left",
      }}
    >
      <img
        src={props.game.thumbnail}
        className="card-img-top"
        alt="games-list"
      />
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/game-details/${props.game.id}`}>{props.game.title}</Link>
        </h5>
        <h6 className="card-text">Genre: {props.game.genre}</h6>
        <p className="card-text">{props.game.short_description}</p>
      </div>
    </div>
  );
};

export default GameCard;
