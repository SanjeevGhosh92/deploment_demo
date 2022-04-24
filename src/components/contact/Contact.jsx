import React from "react";
import "./Contact.css";
import { themeContext } from '../../Context'
import { useContext } from 'react'
// for email 
import emailjs from '@emailjs/browser';
import { useRef } from "react";



const Contact = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q2c3x4i', 'template_3p1q5iq', form.current, 'hRDr9-P5r4Cjq-YVw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
    <div className="contact-form" id='Contact'>
      <div className="w-left">
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
            <span>Contact Me</span>
            <div className="blur s-blur1"
            style={{ background: 'abf1ff94'}}
            ></div>
        </div>
      </div>

      <div className="c-right">

        {/* sendEmail  for sending function  */}
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" className="user" placeholder="Name" />
              <input type="email" name="user_email" className="user" placeholder="Email" />
              <textarea name="message" className="user" placeholder="Message"></textarea>
              <input type="submit"  value="send" className="btn"/>
              <div className="blur c-blur1"
              style={{ background : "var(--purple)" }}
              ></div>
          </form>
      </div>
    </div>
  );
};

export default Contact;
