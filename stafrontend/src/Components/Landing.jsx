import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Landing = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Use navigate to navigate to the desired page
        navigate('/login'); // Replace with the actual route you want to navigate to
    };

    return (
        <div>
            <h1>Landing Page</h1>
            <Link to="/login">Go to Login</Link>
            <button className='btn btn-primary'  onClick={handleLoginClick}>Login</button>
        </div>
    )
}

export default Landing;