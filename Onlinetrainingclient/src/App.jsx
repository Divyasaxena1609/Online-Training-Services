import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from "react";
import { Register } from "./Components/Register";
import { Contact } from "./Components/Contact";
import { Login } from "./Components/Login";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Navbar } from "./Components/Headerandfooter/Navbar";
import { Footer } from "./Components/Headerandfooter/Footer";
import { Logout } from "./Components/Logout";
import './index.css';
import { Error } from "./Components/Error";
import { Services } from "./Components/Services";

const App = () => {

  const [isLoggedIn , SetLogin] = useState(false);

  const handleLogin = () => {
    SetLogin(true);
  }

  const handleLogout = () => {
    SetLogin(false);
  }
    
    return(
        <>
          <BrowserRouter>
            <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <Routes>
                <Route path = "/register" element={<Register/>}/>
                <Route path = "/contact" element={<Contact/>}/>
                <Route path = "/login" element={<Login onLogin={handleLogin} />}/>
                <Route path = "/"  element={<Home/>}/>
                <Route path = "/about" element={<About/>}/>
                <Route path= "/logout" element={<Logout handleLogout={handleLogout}/>}/>
                <Route path="/*" element={<Error/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
        </>
    )
}

export default App;