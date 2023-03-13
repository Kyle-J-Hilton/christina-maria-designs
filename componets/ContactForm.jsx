import React, { useState } from 'react';
import Link from 'next/link';




const ContactForm = () => {
    
    const [contactInfo, setContactInfo] = useState({
        customer: "",
        email: "",
        message: "",
      });

      const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contactInfo);
        setContactInfo({ customer: "", email: "", message: "" });
      };

  return (
    <div className="contactForm-container">
        <div className=".contactForm-container-left">  
        <img
          src='../%PUBLIC_URL%/girlInPink.png'
          className="contactForm-image"
        />
        </div>
        <div className=".contactForm-container-right">
            <form className='contactForm' onSubmit={handleSubmit}>
                <label className='contactForm-name'>
                    Name:
                    <input type="text" name="customer" onChange={handleChange} value={contactInfo.customer}  />
                </label>
                <label className='contactForm-email'>
                    Email:
                    <input type="text" name="email" onChange={handleChange} value={contactInfo.email} />
                </label>
                <label className='contactForm-message-label'>
                    Message:
                    <textarea className='contactForm-message' type="text" name="message" onChange={handleChange} value={contactInfo.message}  />
                </label>
                    <button type="submit" className='contactForm-button' >
                        Connect
                    </button>
            </form>    
        </div>
    </div>
  )
}

export default ContactForm
