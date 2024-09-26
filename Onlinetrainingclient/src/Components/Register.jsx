import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Register = () => {

    const [FormData , SetFormData] = useState({
        userName :  "",
        email : "" ,
        contact : "" ,
        password : ""
    })

   const navigate = useNavigate();

    const handleChange = (e) => {
        const {name , value} = e.target;
        SetFormData({
            ...FormData ,
            [name] : value
        })
    }

    const handleRegister = async (e) => {
         e.preventDefault();

         try {
            const response = await axios.post("http://localhost:8080/api/users/postuser" , FormData);
            //SetResponsemessage(response.data.message);
            alert(response.data.message);

            SetFormData({
                userName : "" ,
                email : "" ,
                contact : "" ,
                password : ""
            })
            
            navigate("/login");

         } catch (error) {
            if (error.response && error.response.status === 409) {
                alert("Email already exists.");
            } else {
                alert("Failed to register. Please try again later.");
            }
         }
    }

    return(
        <>
            <section>
                 <main>
                    <div className="register">
                         <div className="two-grid-col">
                              <div className="register-img">
                                 <img src="/Images/registration.png" alt="Someone is trying to register" height="" width=""/>
                               </div>

                               {/* For registration */}

                               <div className="register-data">
                               <h1 className="main-heading">Registration Form</h1>
                               <hr/>
                               <hr/>
                               <br/>


                               <form onSubmit={handleRegister}>
                                 <div>
                                 <label>username : </label>
                                 <input 
                                   type="text"
                                   name="userName"
                                   placeholder="userName"
                                   value={FormData.userName}
                                   onChange={handleChange}
                                   required
                                  />
                                 </div>

                                 <div>
                                 <label>email : </label>
                                 <input 
                                  type="email"
                                  name="email"
                                  placeholder="email"
                                  value={FormData.email}
                                  onChange={handleChange}
                                  required
                                  />
                                  </div>

                                  <div>
                                  <label>contact : </label>
                                  <input 
                                    type="number"
                                    name="contact"
                                    placeholder="contact"
                                    value={FormData.contact}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    required
                                  />
                                 </div>

                                 <div>
                                 <label>password : </label>
                                 <input 
                                   type="password"
                                   name="password"
                                   placeholder="password"
                                   value={FormData.password}
                                   onChange={handleChange}
                                   required
                                 />
                                 </div>

                                 <br/>

                                 <button type="submit" className="btnsubmit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}