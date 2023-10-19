// import Axios from '../../utility/api';
import '../Assets/auth.css';
// import logo from '../Assets/images/logoLG.jpg';
// import React, { useState } from 'react';
import SignUp from './register';
import Login from './login';
import React, { useState, useEffect } from 'react';
import '../Assets/toastr.css'
import { Link, useNavigate } from 'react-router-dom';


export const AuthForm = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    const handleToggleSignUp = () => {
        setShowSignUp(true);
        setShowLogin(false);
    };

    const handleToggleLogin = () => {
        setShowSignUp(false);
        setShowLogin(true);
    };

    useEffect(() => {
        if (showLogin) {
          document.title = 'Login';
        } else if (showSignUp) {
          document.title = 'Sign-Up';
        }
    }, [showLogin, showSignUp]);

    return (
        <div className='main_container'>
            <div className='frame p-3'>
                <div className='myDiv'>
                    <div className='main_content'>
                        {/* <div className='auth_header'> */}
                            {/* <i class="fa-solid fa-arrow-left fa-2xl"></i> */}
                            {/* <img className='logo' src={logo} alt="Your Logo"/> */}
                        {/* </div> */}
                        <div className='d-flex'>
                            <div className='col-6 auth_form_left'>
                                <Link to="/"><i class="fa-solid fa-arrow-left fa-2xl"></i></Link>
                                <div className='auth_form_left_cont'>
                                    <span className='auth_text_head'>Empower Your Investments with Stock Signal Advisor</span><br/>
                                    <div className='mt-2'>
                                    <span className='auth_text'>
                                        Gain confidence in your investment <br/>
                                        decisions with real-time market analysis <br/>
                                        and personalized stock recommendations from <br/>
                                        Stock Signal Advisor. Make informed choices <br/>
                                        and maximize your portfolio's potential.
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                            <div className='card rounded-0'>
                                <div className='card-header d-flex justify-content-center'>
                                    {/* <h5 className='m-2 auth_heading'>Log In</h5>
                                    <div className='auth_header_dividor'></div>
                                    <h5 className='m-2 auth_heading'>Sign Up</h5> */}
                                    <div>
                                    <h5
                                        className={`m-2 auth_heading ${showLogin ? 'active' : ''}`}
                                        onClick={handleToggleLogin}>
                                        Log In
                                    </h5>
                                    <div className={`auth_underline ${showLogin ? 'active' : ''}`} />
                                    </div>
                                    <div className='auth_header_dividor'></div>
                                    <div>
                                    <h5
                                        className={`m-2 auth_heading ${showSignUp ? 'active' : ''}`}
                                        onClick={handleToggleSignUp}>
                                        Sign Up
                                    </h5>
                                    <div className={`auth_underline ${showSignUp ? 'active' : ''}`} />
                                    </div>
                                </div>
                                {showSignUp && <SignUp />}
                                {showLogin && <Login />}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm;