import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Axios from '../utility/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Landing = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showToast, setShowToast] = useState(false);

    // useEffect(() => {
    //     if (location.state && location.state.showToast) {
    //         toast.success(location.state.toastMessage);
    //         setShowToast(true);
    //         alert(showToast);
    //         // Clear the state after showing the toast
    //         navigate('/', { state: { showToast: false, toastMessage: '' } });
    //     }
    // }, [location.state]);
    
    useEffect(() => {
        if (location.state && location.state.showToast) {
            toast.dismiss();
            toast.success(location.state.toastMessage);
            setShowToast(true);
            // Clear the state after showing the toast
            navigate('/', { state: { showToast: false, toastMessage: '' } });
        }
    }, [location.state, navigate]);

    // const handleLoginClick = () => {
    //     // Use navigate to navigate to the desired page
    //     navigate('/login'); // Replace with the actual route you want to navigate to
    // };
    const handleRegisterClick = () => {
        // Use navigate to navigate to the desired page
        navigate('/auth'); // Replace with the actual route you want to navigate to
    };

    // const HandleLogout = async () => {
    //     try {
    //         const response = await Axios.post('api-v1/auth/user-logout/');
    //         if (response.status === 200) {
    //             console.log(response);
    //             toast.success(response.data.message);
    //             // navigate('/');
    //         }
    //     } catch (error) {
    //         console.error(error.response.data[0]);
    //         toast.error(error.response.data[0]);
    //     }
    // }

    return (
        <div>
            <h1>Landing Page</h1>
            {/* <Link to="/auth">Go to Login</Link> */}
            {/* <button className='btn btn-primary' onClick={HandleLogout}>Logout</button> */}
            {/* <button className='btn btn-primary'  onClick={handleLoginClick}>Login</button> */}
            <button className='btn btn-primary'  onClick={handleRegisterClick}>Login</button>
            <ToastContainer />
        </div>
    )
}

export default Landing;