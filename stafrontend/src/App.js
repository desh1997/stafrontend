import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from "../src/Components/Auth/Register";
import { Login } from "../src/Components/Auth/Login";
import { Landing } from "../src/Components/Landing";

function App() {
  return (
    // <div className="App">
    //   <Landing/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
