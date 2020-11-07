import React, { useState, useEffect } from 'react'
import { withRouter, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signinUser } from '../redux/actionCreators/UsersActionCreators'
import { registerUser } from '../redux/actionCreators/UsersActionCreators'



function RegisterForm({ modalOpen, setModalOpen }) {

    const [login, setLogin] = useState(true)
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwdConfirm, setPwdConfirm] = useState('')

    const dispatch = useDispatch()
    const userSignin = useSelector(state => state.userSignin)
    const userRegister = useSelector(state => state.userRegister)

    const err = ({ user }) => { return user && user.error }

    const reg = ({ rgstr }) => { return rgstr && rgstr.userReg }
    const userReg = reg({ rgstr: userRegister })

    const user = ({ usr }) => { return usr && usr.userInfo }
    const userInfo = user({ usr: userSignin })

    // console.log(userSignin + ' ...usersignin')
    // console.log(userRegister + ' ...userRegister')
    // console.log(userInfo + ' ...info')
    // console.log(userReg + ' ...reg')

    useEffect(() => {
        (userReg || userInfo) && modalOpen &&
            setModalOpen(!modalOpen)
    }, [userInfo, userReg])

    const handleSubmit = (e) => {
        e.preventDefault()
        login ? dispatch(signinUser(email, password)) :
            dispatch(registerUser(fName, lName, email, password))
    }


    return (
        <div className="card mx-xl-5 boxes">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h4 className="text-center py-4">{login ? "Have an account? Sign in" : "Register"}</h4>
                    <li className="list-unstyled text-center mb-3" style={{ color: "red" }}>{err({ user: userSignin }) && (<div>{err({ user: userSignin })}</div>)}</li>
                    <div className={!login ? "signup-div" : "hidden"}>
                        <label htmlFor="first_name" className="grey-text font-weight-light">First name</label>
                        <input type="text" id="first_name" className="form-control signup-input" onChange={(e) => setFName(e.target.value)} />
                    </div>
                    <div className={!login ? "signup-div" : "hidden"}>
                        <label htmlFor="last_name" className="grey-text font-weight-light">Last name</label>
                        <input type="text" id="last_name" className="form-control signup-input" onChange={(e) => setLName(e.target.value)} />
                    </div>
                    <div className="signup-div">
                        <label htmlFor="email" className="grey-text font-weight-light">Your email</label>
                        <input type="email" id="email" className="form-control signup-input" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="signup-div">
                        <label htmlFor="password" className="grey-text font-weight-light">Password</label>
                        <input type="password" id="password" className="form-control signup-input" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={!login ? "signup-div" : "hidden"}>
                        <label htmlFor="passwd_confirm" className="grey-text font-weight-light">Re-enter Password</label>
                        <input type="password" id="passwd_confirm" className="form-control signup-input" onChange={(e) => setPwdConfirm(e.target.value)} />
                    </div>

                    <div className="text-center py-4 mt-3">
                        <button className="btn btn-outline-purple" type="submit">Send<i
                            className="fa fa-paper-plane-o ml-2"></i></button>
                    </div>
                </form>
                <p className="text-center">Or <span className="signup-link" onClick={() => setLogin(!login)}>{login ? "Sign Up " : "Login "}</span>for cheapest deals</p>
            </div>

        </div>

    )
}
export default withRouter(RegisterForm)