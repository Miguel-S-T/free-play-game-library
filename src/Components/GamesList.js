import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class GamesList extends React.Component {
  state = {
    games: [],
    filteredByGenre: [],
  };

  componentDidMount() {
    //console.log("component did Mount!!");
    axios
      .get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        headers: {
          "x-rapidapi-key":
            "900969c839mshbe7e2e981038642p10b974jsnd2fdeb54a56c",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          useQueryString: true,
        },
      })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          games: response.data,
        });
      });
  }

  handleChange = (e) => {
    this.state.games.map((game) => {
      console.log(game.genre);
    });
    this.setState({ filteredByGenre: e.target.value });
  };

  render() {
    // const { games } = this.state;
    // let gamesList =
    //   games.length > 0 &&
    //   games.map((game, index) => {
    //     return (
    //       <option key={index} value={game.id}>
    //         {game.genre}
    //       </option>
    //     );
    //   });

    return (
      <div>
        {/* <select>{gamesList}</select> */}
        <div>
          <label>Choose a genre:</label>
          <select onChange={this.handleChange}>
            <option>Select all</option>
            <option value="Action RPG">Action RPG</option>
            <option>Battle Royale</option>
            <option>Card Game</option>
            <option>Fighting</option>
            <option>Fantasy</option>
            <option>Shooter</option>
            <option>MMORPG</option>
            <option>MMO</option>
            <option>MOBA</option>
            <option>Social</option>
            <option>Strategy</option>
            <option>Sports</option>
          </select>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            {this.state.games.map((game, index) => {
              return (
                <div
                  className="card"
                  key={index}
                  style={{
                    margin: "1vw",
                    justifyContent: "space-around",
                    textAlign: "left",
                  }}
                >
                  <img
                    src={game.thumbnail}
                    className="card-img-top"
                    alt="games-list"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`/${game.id}`}>{game.title}</Link>
                    </h5>
                    <h6 className="card-text">Genre: {game.genre}</h6>
                    <p className="card-text">{game.short_description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default GamesList;
