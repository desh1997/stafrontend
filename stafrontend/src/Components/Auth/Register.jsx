import React, { useState } from 'react';
import Axios from '../../utility/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUp = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('api-v1/auth/user-register/', formData);
            if (response.status === 201) {
                console.log(response);
                toast.success(response.data.message);
            } else {
                toast.warn('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error(error.response.data[0]);
            toast.error(error.response.data[0]);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <> 
            <div className='card-body'>
                <form onSubmit={handleRegister}>
                    <div className='mb-1'>
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input name='first_name' value={formData.firstName} onChange={handleChange} type="text" id="first-name" className="form-control" placeholder="First Name" />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input name='last_name' value={formData.lastName} onChange={handleChange} type="text" id="last-name" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input name='email' value={formData.email}  onChange={handleChange} type="email" id="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className='mb-1'>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input name='password' value={formData.password} onChange={handleChange} type="password" id="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <input name='confirm_password' value={formData.confirmPassword} onChange={handleChange} type="password" id="confirm-password" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type='submit' className='submit_btn'>Submit</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );  
}

export default SignUp;