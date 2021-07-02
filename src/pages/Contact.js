import React from 'react';
import Button from '../components/Button';

function Contact()
{
    return (
        <section className="contact"> 
           <div className="container">
           <div className="contact-circle">
              <p className="text-muted footer-title">Contact me!</p>
              <p className="text-muted">Subject</p>
              <input className="input" placeholder="Subject"></input>
              <br></br>
              <br></br>
              <p className="text-muted">Email</p>
              <input className="input" placeholder="Email"></input>
              <br></br>
              <br></br>
              <p className="text-muted">Name</p>
              <input className="input" placeholder="Name"></input>
              <br></br>
              <br></br>
              <p className="text-muted">Message</p>
              <textarea className="input" placeholder="Message"></textarea>
              <br></br>
              <br></br>
              <Button to="/contact/" text="Contact" class="btn" />
           </div>
            </div>
        </section>
    );
}
export default Contact