import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker'

export default function SearchForm({ data, handleDatePicker, handleChange }) {

  const { origin,
    destination,
    departureDate,
    arrivalDate } = data

  const [roundTrip, setRoundTrip] = useState(true)

  const [passengerOpen, setPassengerOpen] = useState(false)
  const [travelClassOpen, setTravelClassOpen] = useState(false)

  const [passengerCount, setPassengerCount] = useState(1)
  const [adultCount, setAdultCount] = useState(1)
  const [childrenCount, setChildrenCount] = useState(0)
  const [infantCount, setInfantCount] = useState(0)

  const [travelClass, setTravelClass] = useState("Economy")

  const passengerRef = useRef()
  const travelClassRef = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  })
  const handleClickOutside = e => {
    if (passengerOpen) {
      if (!passengerRef.current.contains(e.target)) {
        setPassengerOpen(!passengerOpen)
      }
    } else if (travelClassOpen) {
      if (!travelClassRef.current.contains(e.target)) {
        setTravelClassOpen(!travelClassOpen)
      }
    }
  }

  return (
    <div className="form">
      <form>
        <div className="trip-dir-btn">
          <div className={roundTrip ? "btn btn-info active" : "btn btn-info"}
            onClick={() => { !roundTrip && setRoundTrip(!roundTrip) }} >Round Trip</div>
          <div className={!roundTrip ? "btn btn-info active" : "btn btn-info"}
            onClick={() => { roundTrip && setRoundTrip(!roundTrip); }}>One Way</div>
          <input type="hidden"
            name="tripDirection"
            value={roundTrip ? "roundTrip" : "oneWay"}
            onChange={(e) => handleChange(e)} />
        </div>
        <ul className="form-container">
          <li className="form-list">
            <div className="first-level-div">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icons"></FontAwesomeIcon>
              <div className="input-container">
                <input
                  placeholder="Flying From"
                  type="text"
                  name="origin"
                  id="origin"
                  value={origin}
                  onChange={(e) => handleChange(e)}
                />
              </div>

            </div>

            <div className="first-level-div">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icons"></FontAwesomeIcon>
              <div className="input-container">
                <input
                  placeholder="Flying To"
                  type="text"
                  name="destination"
                  id="destination"
                  value={destination}
                  onChange={(e) => handleChange(e)}
                />
              </div>

            </div>
            <div className="clearfix" />
          </li>
          <li className="form-list">
            <div className="date-picker">
              <FontAwesomeIcon icon={faCalendarAlt} className="input-icons"></FontAwesomeIcon>
              <DatePicker
                selected={departureDate}
                minDate={new Date()}
                selectsStart
                onChange={(date) => handleDatePicker(date, 'departureDate')}
                name="departureDate"
                startDate={departureDate}
                endDate={arrivalDate}
                placeholderText="Departure Date"
                popperPlacement="bottom"
                popperModifiers={{
                  flip: { behavior: ['bottom'] },
                  preventOverflow: { enabled: false }
                }}
              />
            </div>

            <div className={roundTrip ? "date-picker" : "hidden"}>
              <FontAwesomeIcon icon={faCalendarAlt} className="input-icons"></FontAwesomeIcon>
              <DatePicker
                selected={arrivalDate}
                selectsEnd
                minDate={departureDate}
                onChange={(date) => handleDatePicker(date, 'arrivalDate')}
                name="arrivalDate"
                startDate={departureDate}
                endDate={arrivalDate}
                placeholderText="Arrival Date"
                popperPlacement="bottom"
                popperModifiers={{
                  flip: { behavior: ['bottom'] },
                  preventOverflow: { enabled: false }
                }}
              />
            </div>
            <div className="clearfix" />
          </li>
          <li className="form-list" ref={passengerRef}>
            <div className="select-list btn no-outline">
              <div className="input-div" onClick={() => setPassengerOpen(!passengerOpen)}>
                <FontAwesomeIcon icon={faUser} className="input-icons"></FontAwesomeIcon>
                {passengerCount} {passengerCount > 1 ? 'Passengers' : 'Passenger'}
              </div>
              <div className={passengerOpen ? "dropdown-div" : "hidden"} >
                <ul className="list-group dropdown-list">
                  <li className="list-group-item passenger-list">
                    <div>
                      Adults
                  <span> &#62;16 years </span>
                    </div>
                    <div>
                      <span
                        onClick={() => {
                          adultCount > 1 && setAdultCount(adultCount - 1);
                          adultCount > 1 && passengerCount > 1 && setPassengerCount(passengerCount - 1)
                        }}
                        className="span-pill"
                      > - </span>
                      <span>{adultCount}</span>
                      <span
                        onClick={() => {
                          setAdultCount(adultCount + 1);
                          setPassengerCount(passengerCount + 1)
                        }}
                        className="span-pill"
                      > + </span>
                    </div>

                  </li>
                  <li className="list-group-item passenger-list">
                    <div>
                      Children
                    <span> 2 - 16 years </span>
                    </div>
                    <div>
                      <span
                        onClick={() => {
                          childrenCount > 0 && setChildrenCount(childrenCount - 1);
                          childrenCount > 0 && passengerCount > 1 && setPassengerCount(passengerCount - 1)
                        }}
                        className="span-pill"
                      > - </span>
                      <span>{childrenCount}</span>
                      <span
                        onClick={() => {
                          setChildrenCount(childrenCount + 1);
                          setPassengerCount(passengerCount + 1)
                        }}
                        className="span-pill"
                      > + </span>
                    </div>

                  </li>
                  <li className="list-group-item passenger-list">
                    <div>
                      Infants <span> &#x3c;2 years </span>
                    </div>
                    <div>
                      <span
                        onClick={() => {
                          infantCount > 0 && setInfantCount(infantCount - 1);
                          infantCount > 0 && passengerCount > 1 && setPassengerCount(passengerCount - 1)
                        }}
                        className="span-pill"
                      > - </span>
                      <span>{infantCount}</span>
                      <span
                        onClick={() => {
                          setInfantCount(infantCount + 1);
                          setPassengerCount(passengerCount + 1)
                        }}
                        className="span-pill"
                      > + </span>
                    </div>

                  </li>
                </ul>
              </div>
              <input type="hidden" name="adults" value={adultCount} onChange={(e) => handleChange(e)} />
              <input type="hidden" name="children" value={childrenCount} onChange={(e) => handleChange(e)} />
              <input type="hidden" name="infants" value={infantCount} onChange={(e) => handleChange(e)} />
            </div>
            <div className="clearfix" />
          </li>

          <li className="form-list" ref={travelClassRef}>
            <div className="select-list btn no-outline"
              onClick={() => setTravelClassOpen(!travelClassOpen)}>
              <FontAwesomeIcon icon={faBriefcase} className="input-icons"></FontAwesomeIcon>
              <div name="" className="input-div">
                {travelClass}
                <div className={travelClassOpen ? "dropdown-div" : "hidden"}>
                  <ul className="list-group dropdown-list">
                    <li className="list-group-item" onClick={() => setTravelClass("Economy")}>Economy</li>
                    <li className="list-group-item" onClick={() => setTravelClass("Premium Economy")}>Premium Economy</li>
                    <li className="list-group-item" onClick={() => setTravelClass("Business Class")}>Business Class</li>
                    <li className="list-group-item" onClick={() => setTravelClass("First Class")}>First Class</li>
                  </ul>
                </div>
              </div>
            </div>
            <input type="hidden" name="travelClass" value={travelClass} onChange={(e) => handleChange(e)} />
          </li>
        </ul>
      </form>
    </div>
  );
}
