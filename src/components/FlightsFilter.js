import React from 'react'



export default function FlightsFilter() {


    // console.log(departureTime, arrivalTime)


    //Get unique airlines available
    //   availableAirlines = availableAirlines.map((airline, key) => {
    //     return (
    //       <div className="checkbox" key={key}>
    //         <label><input type="checkbox" name="selectedAirlines" onClick={handleChange} value={airline} />{airline}</label>
    //       </div>
    //     )
    //   })
    return (
        <>
            <div className="sort-title">Sort &amp; Filter</div>
            <div className="list-group list-group-flush sort-form" >
                {/* PRICE */}
                <div className="list-group-item list-group-item-action bg-light">
                    <form className="form-control">
                        <label htmlFor="price">Price: $100</label>
                        <input type="range" name="price" min="minPrice" max="maxPrice" id="price" value="price"
                        />
                    </form>
                </div>


                {/* STOPS */}
                <div className="list-group-item list-group-item-action bg-light">
                    <form className="form-control">
                        <label>Stops</label>
                        <div className="checkbox">
                            <label><input type="checkbox" name="stops" value="1" />1 Stop</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" name="stops" value="2" />2+ Stop</label>
                        </div>
                    </form>
                </div>

                {/* AIRLINE */}
                <div className="list-group-item list-group-item-action bg-light">
                    <form className="form-control">
                        <label>Airlines</label>
                        <label><input type="checkbox" name="selectedAirlines" value="airline" />airline</label>
                    </form>
                </div>

                {/* DEPARTURE TIME */}
                <div className="list-group-item list-group-item-action bg-light">
                    <form className="form-control">
                        <label>Depart from -  </label>
                        <input type="range" name="departureTime" min="minDepartureTime" max="maxDepartureTime" id="departureTime" value="departureTime"
                        />
                    </form>
                </div>

                {/* ARRIVAL TIME */}
                <div className="list-group-item list-group-item-action bg-light">
                    <form className="form-control">
                        <label>Arrival at -  </label>
                        <input type="range" name="arrivalTime" min="minArrivalTime" max="maxArrivalTime" id="arrivalTime" value="arrivalTime"
                        />
                    </form>
                </div>
                <div className="list-group-item list-group-item-action bg-light">Hello</div>
                <div className="list-group-item list-group-item-action bg-light">Hello</div>
                <div className="list-group-item list-group-item-action bg-light">Hello</div>
            </div>

        </>
    )
}
