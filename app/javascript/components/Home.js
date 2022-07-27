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

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only"></span>
            </a>
            <a className="nav-item nav-link" href="/cours">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
            <a className="nav-item nav-link disabled" href="#">
              Disabled
            </a>
          </div>
        </div>
      </nav>

      <div className="infos">
        <h1>The Ocean vibes</h1>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <Cours />
      </div>
    </div>
  );
}

export default Home;
