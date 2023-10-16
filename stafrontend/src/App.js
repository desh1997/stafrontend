import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Register } from "../src/Components/Auth/Register";
import { AuthForm } from "../src/Components/Auth/authForm";
import { Landing } from "../src/Components/Landing";

function App() {
  return (
    <div className="App">
      {/* <Landing/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="" element={<Landing />} />

        <Route path="/auth" element={<AuthForm />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
