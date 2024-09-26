import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"

export const Logout = ({handleLogout}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        handleLogout();
        alert("You have successfully logged out.");
        navigate("/login");
    };

    return(
        <>
           <div className='logout-container'>
               <button onClick={handleClick} className='logoutbtn'>Logout</button>
           </div>
        </>
    )
    
}

Logout.propTypes = {
   handleLogout : PropTypes.func.isRequired
};