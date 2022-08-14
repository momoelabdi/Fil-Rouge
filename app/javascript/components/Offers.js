import React from "react";
import Cours from "./Cours";

function Offers() {
  return (
    <div>
      <div className="lessons">
        <h2>SURF LESSONS</h2>
        <p>
          Attention! The risk of getting addicted to surfing is huge:)! Whoever
          had the pleasure to surf along an ocean wave, receives a feeling which
          will stay with him for a lifetime.
        </p>
        <p>
          On spots with good surfing conditions, we offer a variety of different
          courses according to the skills they possess. There are three skill
          steps for students.
        </p>
      </div>

      <Cours />
    </div>
  );
}

export default Offers;
