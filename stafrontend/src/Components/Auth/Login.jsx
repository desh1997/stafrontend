// import React, { useEffect } from 'react';
// import '../Assets/auth.css';

export const Login = () => {
  return (
    <>
      <div className='card-body'>
        <form>
          <div className='mb-1'>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Email" />
          </div>
          <div className='mb-1'>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Password" />
          </div>
          <div className='d-flex justify-content-end'>
            <button className='submit_btn'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;



