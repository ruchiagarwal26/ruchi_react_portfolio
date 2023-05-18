import React, { useState }from "react";
import './styles/Contact.scss';
import { ArrowBack } from "@material-ui/icons";
import { Link } from 'react-router-dom';



const Contact =() => {

//   const [Name, setName] = useState('');
//   const [Email, setEmail] = useState('');
//   const [Message, setMessage] = useState('');
//   const [Errors, setErrors] = useState({});
 

//     if (Name.trim() === '') {
//       newErrors.name = 'Name is required';
//     }

//     if (!/^\S+@\S+\.\S+$/.test(Email)) {
//       newErrors.email = 'Email is invalid';
//     }

  
//   if (Message.trim() === '') {
//     newErrors.message = 'Message is required';
//   }

//   setErrors(newErrors);

//   return Object.keys(newErrors).length === 0;
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (validateForm()) {
//     // Perform form submission or API call here
//     alert('Form submitted successfully!');
//   }
// };

    return(
        <div className="contact">
            <Link to = "/">
                <ArrowBack className="arrow"/>
            </Link>
            <div className="inputs">
                <h1> Contact Me </h1>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Meassage" className="message"/>
                <button>Send</button>
            </div>          
       </div>

                
    )
}


export default Contact;
