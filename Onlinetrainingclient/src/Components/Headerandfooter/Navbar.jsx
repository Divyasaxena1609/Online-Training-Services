import { NavLink } from "react-router-dom"
import "./Navbar.css";
import PropTypes from "prop-types";

export const Navbar = ({isLoggedIn , handleLogout}) => {

  return (
      <>
        <header>
            <div className="container">
               <div className="logo">
                  <NavLink to="/">logo</NavLink>
               </div>

               <nav>
                 <ul>
                    <li><NavLink to = "/">Home</NavLink></li>
                    <li><NavLink to = "/about">About</NavLink></li>
                    <li><NavLink to = "/services">Services</NavLink></li>
                    <li><NavLink to = "/contact">Contact</NavLink></li>
                    { isLoggedIn ? 
                    (
                      <li><NavLink to = "/logout" onClick={handleLogout}>Logout</NavLink></li>
                    ) :
                    (   
                    <> 
                    <li><NavLink to = "/register">Sign Up</NavLink></li>
                    <li><NavLink to = "/login">Sign In</NavLink></li>
                    </>
                    )
                    }
                 </ul>
               </nav>
            </div>
        </header>
      </>
    )
}

Navbar.propTypes = {
  isLoggedIn : PropTypes.bool.isRequired,
  handleLogout : PropTypes.func.isRequired
};