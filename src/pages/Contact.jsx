import React from "react";

function Contact(){
    return(
        <div className="Contact">
            <h1>Contact Us</h1>
            <form action='/contact' method="POST">
                Name:<input type="text" name="name"/>
                <br />
                Email:<input type="text" name="email"/>
                <br />
                Number:<input type="number" name="number"/>
                <br />
                <button type="submit">Submit Info?</button>
            </form>
        </div>
    )
};

export default Contact;