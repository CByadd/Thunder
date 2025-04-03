import Model from './pages/Model.jsx';
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Landing from './pages/Landing.jsx';
import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  

  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/model" element={<Model/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
