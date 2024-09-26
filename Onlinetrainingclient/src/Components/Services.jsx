import axios from "axios";
import { useEffect, useState } from "react"

export const Services = () => {
    
    const[services , SetServices] = useState([]);

    useEffect(() => {
        const getservices = async() => {
            try{
                const response = await axios.get("http://localhost:8080/api/users/services");
                SetServices (response.data.data);
            }
            catch(error){
                alert("something Went Wrong");
            }
        }

        getservices();

    } ,  [] );

    return (
        <>
           <section className="service">
             <div className="Grid-Three-col">
               {services.map((currentelem , index) => {
                   const {price , description , serviceName , provider} = currentelem;

                   let imgUrl ;

                   switch(index){
                    case 0 :
                    imgUrl =  "./Images/Mobiledev.webp"
                    break;
                
                    case 1:
                    imgUrl =  "./Images/UI-UXimg.png"
                    break;

                    case 2:
                    imgUrl = "./Images/responsive.jpeg"
                    break;

                    case 3:
                    imgUrl =  "./Images/wpimg.png"
                    break;

                    case 4:
                    imgUrl = "./Images/ecomwevdev.png" 
                    break;

                    case 5:
                    imgUrl = "./Images/webdev.jpeg"
                    break;
                }

                return (
             
                     <div className="card" key={index}>

                     <div className="cardImg">
                      <img src= {imgUrl}  alt="Services info" width="250" height="250"/>
                     </div>

                     <div className="card-detais">
                       <div className="grid-two-col">

                         <p>{provider}</p>
                         <p>{price}</p>

                       </div>

                         <h2>{serviceName}</h2>
                         <p>{description}</p>

                    </div>
                </div>

                 )})}
              </div>
           </section>
        </>
    )
}