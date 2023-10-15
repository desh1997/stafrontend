import Axios from '../../utility/api';
import '../Assets/auth.css';
import logo from '../Assets/images/logoLG.jpg';
// import React, { useState } from 'react';

export const Register = () => {

    return (
        <div className='main_container'>
            <div className='frame p-3'>
                <div className='myDiv'>
                    <div className='main_content'>
                        {/* <div className='auth_header'>
                            <img className='logo' src={logo} alt="Your Logo"/>
                        </div> */}
                        <div className='d-flex'>
                            <div className='col-6'>
                                fdhdhfdhfdhgfgf
                            </div>
                            <div className='col-6'>
                                <div className='card rounded-0'>
                                    <div className='card-header d-flex justify-content-center'>
                                        <h5 className='m-2 auth_heading'>Log In</h5>
                                        <div className='auth_header_dividor'></div>
                                        <h5 className='m-2 auth_heading'>Sign Up</h5>
                                    </div>
                                    <div className='card-body'>
                                        <form>
                                            <div className='mb-1'>
                                                <label htmlFor="first-name" className="form-label">First Name</label>
                                                <input type="text" id="first-name" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div className='mb-1'>
                                                <label htmlFor="last-name" className="form-label">Last Name</label>
                                                <input type="text" id="last-name" className="form-control" placeholder="Last Name" />
                                            </div>
                                            <div className='mb-1'>
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" id="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className='mb-1'>
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input type="password" id="password" className="form-control" placeholder="Password" />
                                            </div>
                                            <div className='mb-2'>
                                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                                <input type="password" id="confirm-password" className="form-control" placeholder="Confirm Password" />
                                            </div>
                                            <div className='d-flex justify-content-end'>
                                                <button className='submit_btn'>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;