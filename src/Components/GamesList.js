import React from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import GameCard from "./GameCard";
import Carousel from "./Carousel";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      currentFilter: "Select all",
    };
  }

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
    // console.log("TARGET VALUE ", e.target.value);
    this.setState({ currentFilter: e.target.value });
    // console.log("STATE ", this.state.currentFilter);
  };

  render() {
    const filteredGames =
      this.state.currentFilter === "Select all"
        ? this.state.games
        : this.state.games.filter(
            (game) => game.genre === this.state.currentFilter
          );

    // console.log(filteredGames);
    return (
      <div className="games-list">
        <Carousel games={this.state.games} />
        <Dropdown handleChange={this.handleChange} />
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6">
            {filteredGames.map((game, index) => (
              <GameCard game={game} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default GamesList;
