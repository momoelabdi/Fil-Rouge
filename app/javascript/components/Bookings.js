import React from "react";


function Booking() {

  return (
    <div className="bookings">
      <form action="/commandes" method="post" id="form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="client_name"
            placeholder="Full Name ..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your E-mail</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="client_email"
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
              id="checkin"
              name="check_in"
              required
            />
          </div>
          <div className="form-group col-6">
            <label htmlFor="checkout">Check-out Date</label>
            <input
              type="date"
              className="form-control"
              id="checkout"
              name="check_out"
              required
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-info">
            Confirm
          </button>
        </div>

      </form>
    </div>
  );
}

export default Booking;
