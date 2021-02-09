import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GameDetails.css";

export default class GameDetails extends Component {
  state = {
    id: "",
    title: "",
    description: "",
    url: "",
    thumbnail: "",
    releaseDate: "",
    genre: "",
    platform: "",
  };

  getGame(id) {
    let service = axios.create({
      baseURL:
        "https://free-to-play-games-database.p.rapidapi.com/api/game?id=",
      headers: {
        "x-rapidapi-key": "900969c839mshbe7e2e981038642p10b974jsnd2fdeb54a56c",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    });
    this.service = service;
    return this.service.get(id);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getGame(id).then((response) => {
      //   console.log(response.data);
      this.setState({
        id: response.data.id,
        title: response.data.title,
        description: response.data.short_description,
        url: response.data.game_url,
        thumbnail: response.data.thumbnail,
        releaseDate: response.data.release_date,
        genre: response.data.genre,
        platform: response.data.platform,
      });
    });
  }

  render() {
    return (
      <div className="details">
        <img src={this.state.thumbnail} alt="game" />
        <h2>{this.state.title}</h2>
        <p>genre: {this.state.genre}</p>
        <p>release date: {this.state.releaseDate}</p>
        <p>{this.state.description}</p>
        <p>Platform: {this.state.platform}</p>
        <Link to={this.state.url}>
          <p>{this.state.url}</p>
        </Link>
      </div>
    );
  }
}
