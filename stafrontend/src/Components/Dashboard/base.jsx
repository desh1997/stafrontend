import React from 'react';
import SideBar from '../Dashboard/sideBar';
import Header from '../Dashboard/header';
import '../Assets/dashboard.css';

export const Base = () => {
    return (
        <>
        <SideBar/>
        <Header/>
        </>
     );
};
    
export default Base;