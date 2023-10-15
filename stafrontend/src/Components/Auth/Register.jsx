import Axios from '../../utility/api';
import '../Assets/auth.css';
import logo from '../Assets/images/logo.jpg';
// import React, { useState } from 'react';

export const Register = () => {

    return (
        <div className='reg_container'>
            <div className='frame p-2'>
                <div className='myDiv'>
                    <div className='main_content'>
                        <div className='auth_header'>
                            <img className='logo' src={logo} alt="Your Logo"/>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                123123
                            </div>
                            <div className='col-6'>
                                <div className='card rounded-0'>
                                    <div className='card-header d-flex'>
                                        <h6>Log In</h6>
                                        <h6>Sign Up</h6>
                                    </div>
                                    <div className='card-body'>
                                        <form>
                                          <input type='text' className='form-control' placeholder='First name '/>
                                          <input type='text' className='form-control' placeholder='Last name '/>
                                          <input type='text' className='form-control' placeholder='Email '/>
                                          <input type='password' className='form-control' placeholder='Password '/>
                                          <input type='password' className='form-control' placeholder='Confirm Password '/>
                                          <button className='btn btn-primary'>Submit</button>
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