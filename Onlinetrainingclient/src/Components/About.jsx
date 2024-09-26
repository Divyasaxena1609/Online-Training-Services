
export const About = () => {
    return(
        <>
        <main>
           <section className="about-section">
              <div className="grid-col-about">
                 <div className="about-content">
                     <p>Welcome to our website</p>
                     <h1>Why Choose Us?</h1>
                     <p>
                      Innovation: Staying updated with the latest technological trends and advancements to offer 
                      cutting-edge solutions to clients.
                      <br/>
                      <br/>
                      Expertise: Employing skilled professionals with expertise in various IT domains, including 
                      software development, cybersecurity, networking, and more.
                      <br/>
                      <br/>
                      Customer-Centric Approach: Focusing on understanding and meeting the unique needs and 
                      requirements of clients to deliver tailored solutions and exceptional customer service.
                      <br/>
                      <br/>
                      Adaptability: Being adaptable and flexible to adapt to changing market dynamics, technological 
                      advancements, and client demands.
                      <br/>
                      <br/>
                      Collaboration and Teamwork: Encouraging collaboration and teamwork among employees to foster 
                      creativity, problem-solving, and innovation.
                     </p>
 
                     <div className="btn-group">
                         <a href="/contact">
                             <button>Connect Now</button>
                         </a>
 
                         <a href="/services">
                             <button>Learn more</button>
                         </a>
                     </div>
                 </div>
 
                 <div className="aboutImg">
                    <img src="./Images/aboutimg.png" alt="About Image"/>
                 </div>
              </div>
           </section>
        </main>
 
        <section className="sec-analytics">
                 <div className="grid-four-col">
                     <div className="div1">
                         <h2>50+</h2>
                         <p>Registered Companies</p>
                     </div>
 
                     <div className="div1">
                         <h2>10,000+</h2>
                         <p>Happy Clients</p>
                     </div>
 
                     <div className="div1">
                         <h2>150+</h2>
                         <p>Projects Done</p>
                     </div>
 
                     <div className="div1">
                         <h2>650K+</h2>
                         <p>Youtube Subscribers</p>
                     </div>
                 </div>
         </section>
      </>
    )
}