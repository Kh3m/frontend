import React from "react";

export default function SearchForm() {
    
  return (
    <div className="form">
      <form>
        <ul className="form-container">
          <li>
            <i className="fas fa-map-marker-alt input-icons"></i>
            <input
            placeholder="Flying From"
              type="text"
              name="origin"
              id="origin"
            //   onChange={(e) => setOrigin(e.target.value)}
            />
          </li>
          <li>
           <i className="fas fa-map-marker-alt input-icons"></i>
            <input
              type="text"
              name="destination"
              id="destination"
            //   onChange={(e) => setDestination(e.target.value)}
            />
          </li>
          <li>
            <i className="far fa-calendar-alt"></i>
            <input
              type="date"
              name="departureDate"
              id="departureDate"
            //   onChange={(e) => setDepartureDate(e.target.value)}
            />
          </li>

          <li 
        //   className={isOneWay ? "hidden" : ""}
          >
            <label htmlFor="arrivalDate">Arrival Date</label>
            <input
              type="date"
              name="arrivalDate"
              id="arrivalDate"
            //   onChange={(e) => setarrivalDate(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="origin">Flying From</label>
            <input
              type="text"
              name="origin"
              id="origin"
            //   onChange={(e) => setOrigin(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="adults">Adults (18+)</label>
            <select
              value=""
            //   onChange={() => setAdults(e.target.value)}
              name="adults"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </li>
          <li>
            <label htmlFor="children">Children (0 - 17)</label>
            <select
              value=""
            //   onChange={() => setChildren(e.target.value)}
              name="children"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </li>
          <li>
            <label htmlFor="adults">Class</label>
            <select
              value=""
            //   onChange={() => setTravelClass(e.target.value)}
              name="travelClass"
            >
              <option>Economy</option>
              <option>First Class</option>
            </select>
          </li>
        </ul>
      </form>
    </div>
  );
}
