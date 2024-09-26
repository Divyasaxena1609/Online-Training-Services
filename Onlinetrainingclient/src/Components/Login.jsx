import axios from "axios";
import { useState } from "react"
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Login = ({onLogin}) => {
    
    const [FormData , SetFormData] = useState({
        email : "" ,
        password : ""
    })

    const navigate = useNavigate();
    //const [Responsemessage , SetResponsemessage] = useState("");

    const handleChange = (e) => {
        const {name , value} = e.target;
        
        SetFormData({
            ...FormData ,
            [name] : value
        })
    }

    const handlelogin = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:8080/api/users/loginUser" , FormData);
            //SetResponsemessage(response.data.message);
            alert(response.data.message);
            SetFormData({
                email : "",
                password : ""
            })
            onLogin();
            navigate("/");

        } catch (error) {
            if(error.response && error.response.status === 401){
              //SetResponsemessage("Invalid Email Or Password.");
              alert("Invalid Email Or Password.");
            }
            else{
              //SetResponsemessage("Failed to Login. Please try again later.");
              alert("Failed to Login. Please try again later.");
            }
        }
    }

    return(
        <>
            <section>
                <main>
                   <div className="login">
                       <div className="two-grid-login">
                             <div className="loginImg">
                                 <img src="/Images/loginimg.png" alt="login Image"/>
                             </div>

                        <div className="loginform">
                            <h1 className="loginheading">Login Form</h1>
                            <hr/>
                            <hr/>
                            <br/>

                            <form onSubmit={handlelogin}>
                              <div>
                                 <label>email : </label>
                                 <input 
                                     type="email"
                                     placeholder="email"
                                     name="email"
                                     value={FormData.email}
                                     onChange={handleChange}
                                     required
                                  />
                                </div>
                                 
                                <br/>

                                <div>
                                   <label>password : </label>
                                   <input 
                                       type="password"
                                       placeholder="password"
                                       name="password"
                                       value={FormData.password}
                                       onChange={handleChange}
                                       autoComplete="off"
                                       required
                                     />
                                </div>

                                <br/>
                                <br/>

                                 <button type="submit" className="btnlogin">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
         </section>
        </>
    )
}

Login.propTypes = {
    onLogin : PropTypes.func.isRequired
};
