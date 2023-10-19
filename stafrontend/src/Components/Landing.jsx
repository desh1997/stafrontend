import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../utility/api'
import { ToastContainer, toast } from 'react-toastify';

export const Landing = () => {
    const navigate = useNavigate();

    // const handleLoginClick = () => {
    //     // Use navigate to navigate to the desired page
    //     navigate('/login'); // Replace with the actual route you want to navigate to
    // };
    const handleRegisterClick = () => {
        // Use navigate to navigate to the desired page
        navigate('/auth'); // Replace with the actual route you want to navigate to
    };

    const HandleLogout = async () => {
        try {
            const response = await Axios.post('api-v1/auth/user-logout/');
            if (response.status === 200) {
                console.log(response);
                toast.success(response.data.message);
                // navigate('/');
            }
        } catch (error) {
            console.error(error.response.data[0]);
            toast.error(error.response.data[0]);
        }
    }

    return (
        <div>
            <h1>Landing Page</h1>
            {/* <Link to="/auth">Go to Login</Link> */}
            <button className='btn btn-primary' onClick={HandleLogout}>Logout</button>
            {/* <button className='btn btn-primary'  onClick={handleLoginClick}>Login</button> */}
            <button className='btn btn-primary'  onClick={handleRegisterClick}>Login</button>
            <ToastContainer />
        </div>
    )
}

export default Landing;