 
 export const Home = () => {
    return(
    <>
        <main>
            <section className="home">
                <div className="grid-col-home">
                    <div className="content">
                        <p>We are one of the best Training Institutes </p>
                        <h1>Welcome { `Sir Or Madam`}</h1>
                        <p>
                           Are you ready to take your carrier to the next level with XYZ institute?
                           Look no further! At XYZ solutions, We specislise in providing innovative IT services and 
                           solutions tailored to meet your unique needs.
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

                {/* Images*/}
                <div className="homeImg">
                    <img src="/Images/Home.png" alt="Source Image"/>
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
                    <h2>500+</h2>
                    <p>Well Known Developers</p>
                </div>

                <div className="div1">
                    <h2>24/7</h2>
                    <p>Services</p>
                </div>
            </div>
        </section>

        <section className="section-home">
            <div className="grid-col-home">
                    <div className="homeImg2">
                       <img src="/Images/homepage.png" alt="section 3 image" height="363" width="521"/>
                    </div>

                <div className="content2">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                         Ready to take the first step towards your carrier?
                         Contact us today for free consultation and let us discuss 
                         how we can help you.   
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
            </div>
        </section>
    </>
    )
 }