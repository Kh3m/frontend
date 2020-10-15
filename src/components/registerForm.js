import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegisterForm() {

    const [login, setLogin] = useState(true)

    return (
        <div className="card mx-xl-5 boxes">
            <div className="card-body">
                <form>
                    <h4 className="text-center py-4">{login ? "Have an account? Sign in" : "Register"}</h4>

                    <div className={!login ? "signup-div" : "hidden"}>
                        <label htmlFor="first_name" className="grey-text font-weight-light">First name</label>
                        <input type="text" id="first_name" className="form-control signup-input" />
                    </div>
                    <div className={!login ? "signup-div" : "hidden"}>
                        <label htmlFor="last_name" className="grey-text font-weight-light">Last name</label>
                        <input type="text" id="last_name" className="form-control signup-input" />
                    </div>
                    <div className="signup-div">
                        <label htmlFor="email" className="grey-text font-weight-light">Your email</label>
                        <input type="email" id="email" className="form-control signup-input" />
                    </div>
                    <div className="signup-div">
                        <label htmlFor="password" className="grey-text font-weight-light">Password</label>
                        <input type="password" id="password" className="form-control signup-input" />
                    </div>
                    <div className={!login ? "signup-div" : "hidden"}>
                        <label htmlFor="passwd_confirm" className="grey-text font-weight-light">Re-enter Password</label>
                        <input type="password" id="passwd_confirm" className="form-control signup-input" />
                    </div>

                    <div className="text-center py-4 mt-3">
                        <button className="btn btn-outline-purple" type="submit">Send<i
                            className="fa fa-paper-plane-o ml-2"></i></button>
                    </div>
                </form>
                <p className="text-center">Or <span className="signup-link" onClick={() => setLogin(!login)}>{login ? "Sign Up " : "Sign In "}</span>for cheapest deals</p>
            </div>

        </div>

    )
}
