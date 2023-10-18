// import React, { useEffect } from 'react';
// import '../Assets/auth.css';
import React, { useState } from 'react';
import Axios from '../../utility/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();
      try {
          const response = await Axios.post('api-v1/auth/user-login/', formData);
          if (response.status === 200) {
              console.log(response);
              navigate('/');
          } else {
              toast.warn('Login failed. Please try again.');
          }
      } catch (error) {
          console.error(error);
          toast.error(error.response.data.error);
      }
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className='card-body'>
        <form onSubmit={handleLogin}>
          <div className='mb-1'>
            <label htmlFor="email" className="form-label">Email</label>
            <input value={formData.email} onChange={handleChange} name="email" type="email" id="email" className="form-control" placeholder="Email" />
          </div>
          <div className='mb-2'>
            <label htmlFor="password" className="form-label">Password</label>
            <input value={formData.password} onChange={handleChange} name="password" type="password" id="password" className="form-control" placeholder="Password" />
          </div>
          <div className='d-flex justify-content-end'>
            <button className='submit_btn'>Login</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;



