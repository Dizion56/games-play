import React, { useEffect, useState } from "react";
import * as gameService from "../../services/gameService.js";
import CatalogItem from "./CatalogItem/CatalogItem.js";

const Catalogue = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAllGames().then((res) => setGames(res));
  }, []);
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {games.length > 0 ? (
        games.map((x) => 
          <CatalogItem key={x._id} game={x} />
        )
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
};

export default Catalogue;
