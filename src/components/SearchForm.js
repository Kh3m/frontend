import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faUser, faChild } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker'

export default function SearchForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="form">
      <form>
        <ul className="form-container">
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icons"></FontAwesomeIcon>
            <input
              placeholder="Flying From"
              type="text"
              name="origin"
              id="origin"
            //   onChange={(e) => setOrigin(e.target.value)}
            />
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icons"></FontAwesomeIcon>
            <input
              placeholder="Flying To"
              type="text"
              name="destination"
              id="destination"
            //   onChange={(e) => setDestination(e.target.value)}
            />
          </li>
          <li className="date-picker">
            <FontAwesomeIcon icon={faCalendarAlt} className="input-icons"></FontAwesomeIcon>
            <DatePicker
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Departure Date"
            />
            {/* <input
              placeholder="Departure Date"
              type="date"
              name="departureDate"
              id="departureDate"
            //   onChange={(e) => setDepartureDate(e.target.value)}
            /> */}
          </li>

          <li
          //   className={isOneWay ? "hidden" : ""}
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="input-icons"></FontAwesomeIcon>
            <DatePicker
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Arrival Date"
            />
            {/* <input
              placeholder="Arrival Date"
              type="date"
              name="arrivalDate"
              id="arrivalDate"
            //   onChange={(e) => setarrivalDate(e.target.value)}
            /> */}
          </li>
          <li className="select-list">
            <FontAwesomeIcon icon={faUser} className="input-icons"></FontAwesomeIcon>
            <div>
              <label htmlFor="adults">Adults (18+)</label>
              <select
                value=""
                //   onChange={() => setAdults(e.target.value)}
                name="adults"
                className="no-outline"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>

          </li>
          <li className="select-list">
            <FontAwesomeIcon icon={faChild} className="input-icons"></FontAwesomeIcon>
            <div>
              <label htmlFor="children">Children (0 - 17)</label>
              <select
                value=""
                //   onChange={() => setChildren(e.target.value)}
                name="children"
                className="no-outline"
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>

          </li>
          <li>
            <select
              value=""
              //   onChange={() => setTravelClass(e.target.value)}
              name="travelClass"
              id="travel-class"
              className="travel-class select-list"
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
