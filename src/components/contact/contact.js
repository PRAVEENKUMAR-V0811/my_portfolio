import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import email from '../../assets/email.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import './contact.css';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bss2a6h', 'template_8coa6ns', form.current, {publicKey: 'Gw41erOgGgrGjyrIh',})
      .then(
        () => {
          console.log('SUCCESS!');
          document.getElementById('innerID').innerHTML = "Message Sent!";
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id='contact'>
      <h1 className='contactPageTitle'>
        Contact Me
      </h1>
      <span className='contactDesc'>Please fill form</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='name' className='name' placeholder='Your Name' name='your_name' required/>
        <input type='email' className='email' placeholder='Your Email' name='your_email' required/>
        <textarea className='msg' name='message' rows="5" placeholder='Your Message' required/>
        <p className='alertText' id='innerID'></p>
        <button type='submit' value='Send' className='submitBtn'>Submit</button>
        <div className='links'>
          <a className='anchor' href="https://www.linkedin.com/in/praveenkumar-v08/" target='blank'><img src={linkedin} alt='LinkedIn' className='link' /></a>
          <a className='anchor' href="mailto:praveenkumarv0811@gmail.com" target='blank'><img src={email} alt='Email' className='link' /></a>
          <a className='anchor' href="https://api.whatsapp.com/send?phone=9123563252&text=Hi, Praveen" target='blank'><img src={whatsapp} alt='Email' className='link' /></a>
          <a className='anchor' href="https://github.com/PRAVEENKUMAR-V0811/" target='blank'><img src={github} alt='Github' className='link' /></a>
        </div>
      </form>
    </div>
  )
}

export default Contact