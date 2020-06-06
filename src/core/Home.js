import React, { useState, useEffect } from "react";
import { getVideogames } from "./apiCore";
import Navigation from "../layout/Navigation";
import Card from "./Card";
import Header from "../layout/Header";

import "./home.css";

const Home = () => {
  const [videogames, setVideogames] = useState([]);
  const [error, setError] = useState(false);

  const loadVideogames = () => {
    getVideogames().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setVideogames(data);
        console.log(data);
      }
    });
  };

  useEffect(() => {
    loadVideogames();
  }, []);

  return (
    <div>
      <Navigation />
      <Header />
      <div className="container">
        <div className="row">
          {videogames.map((videogame, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <Card videogame={videogame} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
