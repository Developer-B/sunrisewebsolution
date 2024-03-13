import React from "react";
import "../Styling/FormStyle.css";
import "../Styling/GlobalStyle.css";

const Contact = () => {
  return (
    <>
      <h2 className="h2_heading">Contact Us</h2>
      <div className="d-flex justify-content-around">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28283.707222109588!2d75.13152400134935!3d27.610161157950277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca52437fc67ad%3A0xbe888c4b00c3c965!2sTriveni%20Complex!5e0!3m2!1sen!2sin!4v1709206551365!5m2!1sen!2sin"
          width="850"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
        <div className="contact-form-wrapper d-flex justify-content-left justify-content-end">
          <form action="#" className="contact-form">
            <h5 className="title">Contact us</h5>
            <p className="description">
              Feel free to contact us if you need any assistance, any help or
              another question.
            </p>
            <div>
              <input
                type="text"
                className="form-control rounded border-white mb-3 form-input"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="form-control rounded border-white mb-3 form-input"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="number"
                className="form-control rounded border-white mb-3 form-input"
                placeholder="Number"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                className="form-control rounded border-white mb-3 form-text-area"
                rows="5"
                cols="30"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="submit-button-wrapper">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
