import React from "react";
import { useState } from "react";
import { createContact } from "../utilities/contact-api";

function Contact(){
    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        number: ""
    });

    const handleChance = (evt) => {
        setNewContact({...newContact, [evt.target.name]: evt.target.value, error: ""})
    };

    const handleSubmit = async (e) => {
        console.log('Button Clicked');
        e.preventDefault();

        try {
            console.log(newContact);
            const contactData = {
                name: newContact.name,
                email: newContact.email,
                number: newContact.number
            }
            const response = await createContact(contactData);
            console.log(response);
            alert('Contact Recieved in database!');

        } catch(error){
            console.log('Error happened in Catch');
            console.log(error);
            setNewContact({...newContact, error: 'Problem saving Contact Info'});
        };
    };
    return(
        <div className="Contact">
            <h1>Contact Us</h1>
            <form action='/contact' method="POST" >
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