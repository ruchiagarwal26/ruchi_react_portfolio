import React, { useState }from "react";
import './styles/Contact.scss';
import validator from 'validator';


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
  
    return(
        <div className="contact">
            <div className="inputs">
            <h1> Contact Me </h1>
                <form >
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
