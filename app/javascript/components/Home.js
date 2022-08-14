import React from "react";
import "./App.css";
import Cours from "./Cours";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <div className="container">
          <h1>
            Le Fil Rouge brings <strong> Water sports skills</strong> to{" "}
            <strong>adventuros people</strong>!
          </h1>
          <p>
            Book your next experience now, in one of the best surf spots around
            the world.
          </p>
        </div>
      </div>

      <div className="infos">
        <h2>OUR MISSION IS TO HELP PEOPLE TO DISCOVER WATERSPORTS.</h2>
        <p className="">
          We offer you the maximum action program and professional instruction
          in all areas and conditions on the water – be it surfboarding, alone or with an instructor, in Egypt,
          the Caribbean, the Indian Ocean, on the Canaries or in southern Spain.
          Here you will find everything worth knowing about your preferred
          sport, and, if you are still a complete novice in this area, you can
          be sure of discovering a deep and lasting passion for water sports, a
          passion we have all been seized with. For us, it is a way of life.
        </p>
      </div>
      <div>
        <Cours />
      </div>
    </div>
  );
}

export default Home;
