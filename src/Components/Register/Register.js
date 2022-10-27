import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    console.log(error);
    // if (user) {
    //     // navigate('/')
    //     console.log(user)
    // }

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }


    const handleCreateUser = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }
    return (

        <div className='auth-form-container'>
            <div className="auth-form">
                <div className="sec-auth-form">
                    <h1>Register</h1>

                    <form onSubmit={handleCreateUser}>

                        <div className='input-field'>
                            <label className='email-lb' htmlFor="email">Email</label>
                            <br />
                            <input onBlur={handleEmailBlur} className='input' type="email" name="email" id="email" />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input onBlur={handlePasswordBlur} className='input' type="password" name="password" id="password" />
                        </div>

                        <div className='input-field'>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <br />
                            <input onBlur={handleConfirmPasswordBlur} className='input' type="password" name="confirmPassword" id="confirmPassword" />
                        </div>

                        <button type="submit" className='
                    auth-form-submit'>
                            Sign Up
                        </button>
                    </form>

                    <p className='redirect'>
                        Already have an account?
                        <span onClick={() => navigate('/login')}>Login</span>
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

export default Register;