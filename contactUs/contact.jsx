import React from 'react';
import '../contactUs/contact.css'

const ContactUs = () => {
  function ClearForm(){
    document.formcontact.reset();
}
  return (
    <section className="contact">
      <div className="section__container contact__container">
        <h2 className="section__header1">Contact Us</h2>
        <p>We'd love to hear from you!</p>
        <form className="contact-form" id='formcontact' action="https://api.web3forms.com/submit" method="POST" onLoad={ClearForm}>
        <input type="hidden" name="access_key" value=""/>
          <div className="form-group">

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
