import axios from "axios";
import { useState } from "react";

export const Contact = () => {

    const [FormData , SetFormData] = useState({
        userName : "" ,
        email : "" ,
        message : ""
    });

    const handleChange = (e) => {
        const {name , value} = e.target;
        SetFormData({
            ...FormData,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
             const response = await axios.post("http://localhost:8080/api/users/contactus" , FormData);

             alert(response.data.message);

             // Reset the fields
             SetFormData({
                userName : "" ,
                email : "" ,
                message : ""
             })

             
        } catch (error) {
            alert("Failed to send message. Please try again later.");
        }
    }

    return(
        <>
        <section>
            <main>
                <div className="contact">
                    <div className="contactgrid">
                        <div className="contactimg">
                            <img src="/Images/contact.png" alt="contact Image"/>
                        </div>
                        <br/>
                        
                        <div className="contactform">
                            <h1 className="contactheading">Contact Us</h1>
                            <hr/>
                            <hr/>
                            <br/>

                        <form onSubmit={handleSubmit}>
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
                          <label>email :</label>
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
                         <label>message : </label>
                         <textarea 
                             type="textarea"
                             name="message"
                             placeholder="message"
                             cols={30}
                             rows={5}
                             value={FormData.message}
                             onChange={handleChange}
                             required
                          />
                         </div>

                         <button type="submit" className="btn-submit">Submit</button>
                        </form>
                    </div>
                  </div>
                </div>
            </main>
        </section>
        </>
    )
}