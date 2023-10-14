import React,{useEffect} from 'react';
import '../Assets/auth.css';

export const Login = () => {
  useEffect(() => {
  
  document.title = `You clicked  times`;
  console.log("useeffect");
},[]);

  return (
    <div>
      <body className="login-body">
        <h1 className="login-container">Login Page</h1>
      </body>
    </div>
  );
};

export default Login;



