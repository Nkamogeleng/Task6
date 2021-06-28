import React from 'react';
import { useState } from 'react';
// import useToken from '../components/useapp.js';
import './Login.css'

// styles
// import '../styles/form.css';

function Register() {
    const [usernamereg, setusernamereg] = useState('')
    const [passwordreg, setpasswordreg] = useState('')

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <br></br>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" onChange = {(e) => {
                        setusernamereg(e.target.value.value);
                    }}/>
                </label>
                <br></br>
                <label>
                    <p>Password</p>
                    <input type="password" onChange = {(e) => {
                        setpasswordreg(e.target.value.value);
                    }}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register;
