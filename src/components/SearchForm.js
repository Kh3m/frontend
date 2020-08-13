import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faUser, faChild, faCompressArrowsAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker'

export default function SearchForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [roundTrip, setRoundTrip] = useState(true)
  const [oneWay, setOneWay] = useState(false)
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
            onClick={() => { setRoundTrip(!roundTrip); setOneWay(!oneWay) }} >Round Trip</div>
          <div className={oneWay ? "btn btn-info active" : "btn btn-info"}
            onClick={() => { setOneWay(!oneWay); setRoundTrip(!roundTrip); }}>One Way</div>
        </div>
        <ul className="form-container">
          <li className="form-list">
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icons"></FontAwesomeIcon>
              <input
                placeholder="Flying From"
                type="text"
                name="origin"
                id="origin"
              //   onChange={(e) => setOrigin(e.target.value)}
              />
            </div>

            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icons"></FontAwesomeIcon>
              <input
                placeholder="Flying To"
                type="text"
                name="destination"
                id="destination"
              //   onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="clearfix" />
          </li>
          <li className="form-list">
            <div className="date-picker">
              <FontAwesomeIcon icon={faCalendarAlt} className="input-icons"></FontAwesomeIcon>
              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Departure Date"
                popperPlacement="bottom"
                popperModifiers={{
                  flip: { behavior: ['bottom'] },
                  preventOverflow: { enabled: false }
                }}
              />
            </div>

            <div className="date-picker"
              className={roundTrip ? "" : "hidden"}
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="input-icons"></FontAwesomeIcon>
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
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
              <div className="passengers" onClick={() => setPassengerOpen(!passengerOpen)}>
                <FontAwesomeIcon icon={faUser} className="input-icons"></FontAwesomeIcon>
                {passengerCount} {passengerCount > 1 ? 'Passengers' : 'Passenger'}
              </div>
              <div className={passengerOpen ? "travel-class" : "hidden"} >
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


            </div>
            <div className="clearfix" />
          </li>

          <li className="form-list" ref={travelClassRef}>
            <div className="select-list btn no-outline"
              onClick={() => setTravelClassOpen(!travelClassOpen)}>
              <FontAwesomeIcon icon={faBriefcase} className="input-icons"></FontAwesomeIcon>
              <div className="passengers">
                {travelClass}
                <div className={travelClassOpen ? "travel-class" : "hidden"}>
                  <ul className="list-group dropdown-list">
                    <li className="list-group-item" onClick={() => setTravelClass("Economy")}>Economy</li>
                    <li className="list-group-item" onClick={() => setTravelClass("Premium Economy")}>Premium Economy</li>
                    <li className="list-group-item" onClick={() => setTravelClass("Business Class")}>Business Class</li>
                    <li className="list-group-item" onClick={() => setTravelClass("First Class")}>First Class</li>
                  </ul>
                </div>
              </div>
            </div>

          </li>
        </ul>
      </form>
    </div>
  );
}
