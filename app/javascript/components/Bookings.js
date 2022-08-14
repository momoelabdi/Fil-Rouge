import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Booking() {
  const [client_name, setClient_name] = useState("");
  const [client_email, setClient_email] = useState("");
  const [check_in, setCheck_in] = useState("");
  const [check_out, setCheck_out] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("/commandes", {
        client_name,
        client_email,
        check_in,
        check_out,
      })
      .then((res) => console.log("Posting data", res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bookings">
      <form id="form" action="">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            className="form-control"
            type="text"
            value={client_name}
            onChange={(e) => setClient_name(e.target.value)}
            placeholder="Full Name ..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your E-mail</label>
          <input
            className="form-control"
            type="email"
            value={client_email}
            onChange={(e) => setClient_email(e.target.value)}
            placeholder="Email..."
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group col-6">
            <label htmlFor="checkin">Check-in Date</label>
            <input
              type="date"
              className="form-control"
              value={check_in}
              onChange={(e) => setCheck_in(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-6">
            <label htmlFor="checkout">Check-out Date</label>
            <input
              type="date"
              className="form-control"
              value={check_out}
              onChange={(e) => setCheck_out(e.target.value)}
              required
            />
          </div>
        </div>
        <div id="book-btn">
          <div>
            {" "}
            <button className="btn btn-danger" onClick={postData}>
              Confirm
            </button>
          </div>
          <div>
            <a className="btn btn-danger" href="/confirmations" role="button">
              Checkout
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Booking;
