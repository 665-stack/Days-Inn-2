import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className='auth-form-container'>
            <div className="auth-form">
                <div className="sec-auth-form">
                    <h1>Login</h1>

                    <form >

                        <div className='input-field'>
                            <label className='email-lb' htmlFor="email">Email</label>
                            <br />
                            <input className='input' type="email" name="email" id="email" />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input className='input' type="password" name="password" id="password" />
                        </div>

                        <button type="submit" className='
                    auth-form-submit'>
                            Login
                        </button>
                    </form>

                    <p className='redirect'>
                        New to DAYS INN?
                        <span onClick={() => navigate('/register')}>Create new Account</span>
                    </p>
                    <div className="horizontal-divider">
                        <div className="line-left"></div>
                        <p>or</p>
                        <div className="line-right"></div>
                    </div>

                    <button className="google-auth">
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;