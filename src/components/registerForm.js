import React from 'react'

export default function RegisterForm() {
    return (
        <div className="card mx-xl-5 boxes">
            <div className="card-body">
                <form>
                    <h3 className="text-center py-4">Sign Up for Cheapest Deals</h3>


                    <label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">Your name</label>
                    <input type="text" id="defaultFormCardNameEx" className="form-control signup-input" />

                    <br />


                    <label htmlFor="defaultFormCardEmailEx" className="grey-text font-weight-light">Your email</label>
                    <input type="email" id="defaultFormCardEmailEx" className="form-control signup-input" />

                    <div className="text-center py-4 mt-3">
                        <button className="btn btn-outline-purple" type="submit">Send<i
                            className="fa fa-paper-plane-o ml-2"></i></button>
                    </div>
                </form>

            </div>

        </div>

    )
}
