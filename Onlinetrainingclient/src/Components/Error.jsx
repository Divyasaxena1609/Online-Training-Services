export const Error = () => {
    return(
        <>
         <section className="error">
         <div className="error-content">
            <h2>404</h2>
            <h4>Sorry! Page Not Found</h4>
         </div>

         <div className="btn-group">
            <a href="/">
                <button>Return Home</button>
            </a>

            <a href="/contact">
                <button>Report Problem</button>
            </a>
         </div>
         </section>
        </>
    )
}