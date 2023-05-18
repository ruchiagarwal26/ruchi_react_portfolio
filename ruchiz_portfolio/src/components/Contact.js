import React, { useReducer, useState }from "react";
import './styles/Contact.scss';
import validator from 'validator';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

function Contact() {

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
    }
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
 }
    return(
        <div className="contact">
            <div className="inputs">
            <h1> Contact Me </h1>
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <label>
                        <input type="text" placeholder="Name"  name="name" required/>
                        
                        <input type="text" placeholder="Email"  id="userEmail" required onChange={(e) => validateEmail(e)}>
                        </input> <br /> <span style={{fontWeight: 'bold', color: 'red',}}>{emailError}</span>   
                        <input type="text" placeholder="Meassage" className="message"  required/>
                </label>
                </fieldset>
                
                <button>Send</button>
                </form>
            </div>          
       </div>
 )
}

export default Contact;
