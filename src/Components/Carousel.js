import React from "react";

class Carousel extends React.Component {
  // state = {
  //   tenGames: [],
  // };

  // getRandom() {
  //   let copy = [...this.props.games];
  //   // console.log(this.props.games);
  //   let result = [];

  //   for (let i = 0; i < 4; i++) {
  //     let randomNumber = [Math.floor(Math.random() * copy.length)];

  //     result.push(copy[randomNumber]);

  //     copy.splice(randomNumber, 1);
  //   }
  //   this.setState({
  //     games: result,
  //   });
  //   console.log(this.state.tenGames);
  // }

  // componentDidMount() {
  //   // console.log(this.props.games);
  //   if (this.props.games.length > 4) {
  //     // console.log(this.state.tenGames);
  //     this.getRandom();
  //   }
  // }
  render() {
    let tenGamesImages = [...this.props.games.splice(21, 30)];
    let carouselImage = tenGamesImages.map((game, index) => {
      return (
        <div key={index} className="carousel-item active">
          <img
            style={{
              width: "100%",
              height: "380px",
              objectFit: "contain",
              backgroundColor: "black",
              padding: "2px",
            }}
            src={game.thumbnail}
            className="d-block w-100"
            alt="game"
          />
        </div>
      );
    });
    return (
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">{carouselImage}</div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden"></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
