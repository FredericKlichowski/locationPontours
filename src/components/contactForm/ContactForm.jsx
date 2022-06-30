import React, { useState } from 'react';
import './contactForm.css';

const ContactForm = () => {
  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setUserEmail] = useState('');

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userEmail + ' ' + userFirstname + ' ' + userLastname);
    } catch (error) {
      ('Registration error !');
    }
  };

  return (
    <form className="locationPontours__login-form" onSubmit={handleSubmit}>
      {/* ********************************email input******************************* */}
      <label className="locationPontours__login-form-label" htmlFor="email">
        Email
      </label>
      <input
        type="text"
        className="locationPontours__login-form-input"
        id="email"
        autoComplete="on"
        onChange={(e) => setUserEmail(e.target.value)}
        value={userEmail}
        required
      />
      {/* ********************************firstName input******************************* */}
      <label className="locationPontours__login-form-label" htmlFor="email">
        Prénom
      </label>
      <input
        type="text"
        className="locationPontours__login-form-input"
        id="firstName"
        autoComplete="on"
        onChange={(e) => setUserFirstname(e.target.value)}
        value={userFirstname}
        required
      />
      {/* ********************************lastName input******************************* */}
      <label className="locationPontours__login-form-label" htmlFor="email">
        Nom
      </label>
      <input
        type="text"
        className="locationPontours__login-form-input"
        id="lastName"
        autoComplete="on"
        onChange={(e) => setUserLastname(e.target.value)}
        value={userLastname}
        required
      />{' '}
      <button className="locationPontours__login-form-button" type="submit">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
