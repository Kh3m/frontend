import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCalendarAlt, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-datepicker'

export default function SearchForm({ data,
  handleDatePicker,
  handleChange,
  suggestions,
  suggestionOnSelect,
  inputOrigin,
  inputDestination,
  visibleOrigin,
  visibleDestination,
  loading,
  handleSubmit,
  handlePassengerCount,
}) {

  const { departureDate, arrivalDate } = data


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
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="trip-dir-btn">
          <button type="button" className={roundTrip ? "btn btn-info active" : "btn btn-info"}
            value="roundTrip"
            onClick={(e) => { !roundTrip && setRoundTrip(!roundTrip); handleChange(e, 'tripDirection') }} >Round Trip</button>
          <button type="button" className={!roundTrip ? "btn btn-info active" : "btn btn-info"}
            value="oneWay"
            onClick={(e) => { roundTrip && setRoundTrip(!roundTrip); handleChange(e, 'tripDirection') }}>One Way</button>
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
                  onChange={(e) => {
                    handleChange(e, 'origin');
                  }}
                  value={visibleOrigin}
                />

              </div>

              {!loading && inputOrigin && suggestions.length > 0 ?

                <ul className="autoComplete list-group">
                  {suggestions.map((item, index) => <li key={index}
                    onClick={() => {
                      // setVisibleOrigin(`${item.name}, ${item.country_name}`); 
                      suggestionOnSelect(item.code, 'origin', `${item.name}, ${item.country_name}`);
                    }}
                    className="list-group-item autocomplete-list"><i className="fa fa-map-marker mx-info mx-2"></i>{item.name}, &nbsp;
                        {item.country_name}&nbsp;
                        <span className="badge badge-pill badge-info autocomplete-badge"> {item.code} </span>
                  </li>)}
                </ul> : null
              }

            </div>

            <div className="first-level-div">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icons"></FontAwesomeIcon>
              <div className="input-container">
                <input
                  placeholder="Flying To"
                  type="text"
                  name="destination"
                  id="destination"
                  value={visibleDestination}
                  onChange={(e) => handleChange(e, 'destination')}
                />
                {!loading && inputDestination && suggestions.length > 0 ?

                  <ul className="autoComplete list-group">
                    {suggestions.map((item, index) => <li key={index}
                      onClick={() => {
                        suggestionOnSelect(item.code, 'destination', `${item.name}, ${item.country_name}`);
                      }}
                      className="list-group-item autocomplete-list"><i className="fa fa-map-marker mx-info mx-2"></i>{item.name}, &nbsp;
        {item.country_name}&nbsp;
        <span className="badge badge-pill badge-info autocomplete-badge"> {item.code} </span>
                    </li>)}
                  </ul> : null
                }
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
              <div className="input-div" onClick={() => setPassengerOpen(!passengerOpen)} >
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
                          adultCount > 1 && passengerCount > 1 && setPassengerCount(passengerCount - 1);
                          handlePassengerCount(adultCount, 'adults', 'minus');
                        }}
                        className="span-pill"
                      > - </span>
                      <span>{adultCount}</span>
                      <span
                        onClick={() => {
                          setAdultCount(adultCount + 1);
                          setPassengerCount(passengerCount + 1);
                          handlePassengerCount(adultCount, 'adults', 'add');
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
                          childrenCount > 0 && passengerCount > 1 && setPassengerCount(passengerCount - 1);
                          handlePassengerCount(childrenCount, 'children', 'minus');
                        }}
                        className="span-pill"
                      > - </span>
                      <span>{childrenCount}</span>
                      <span
                        onClick={() => {
                          setChildrenCount(childrenCount + 1);
                          setPassengerCount(passengerCount + 1);
                          handlePassengerCount(childrenCount, 'children', 'add');
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
                          infantCount > 0 && passengerCount > 1 && setPassengerCount(passengerCount - 1);
                          handlePassengerCount(infantCount, 'infants', 'minus');
                        }}
                        className="span-pill"
                      > - </span>
                      <span>{infantCount}</span>
                      <span
                        onClick={() => {
                          setInfantCount(infantCount + 1);
                          setPassengerCount(passengerCount + 1);
                          handlePassengerCount(infantCount, 'infants', 'add');
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
              <div name="" className="input-div">
                {travelClass}
                <div className={travelClassOpen ? "dropdown-div" : "hidden"}>
                  <ul className="list-group dropdown-list">
                    <li className="list-group-item" onClick={() => { setTravelClass("Economy"); handleChange('economy', 'tripClass') }}>Economy</li>
                    <li className="list-group-item" onClick={() => { setTravelClass("Premium Economy"); handleChange('premiumEconomy', 'tripClass') }}>Premium Economy</li>
                    <li className="list-group-item" onClick={() => { setTravelClass("Business Class"); handleChange('businessClass', 'tripClass') }}>Business Class</li>
                    <li className="list-group-item" onClick={() => { setTravelClass("First Class"); handleChange('firstClass', 'tripClass') }}>First Class</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </li>
          <li>
            <button type="submit" className="btn btn-info active">Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
}
