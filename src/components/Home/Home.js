import React, { useEffect, useState } from "react";
import * as gameService from "../../services/gameService.js";
import LatestGame from "./LatestGame/LatestGame.js";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getNewReleases().then((res) => setGames(res));
  }, []);
  console.log(games);
  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="./images/four_slider_img01.png" alt="hero" />
      <div id="home-page">
        <h1>Latest Games</h1>
        {games.length > 0 ? (
          games.map((x) => <LatestGame key={x._id} game={x} />)
        ) : (
          <p className="no-articles">No games yet</p>
        )}
      </div>
    </section>
  );
};

export default Home;
