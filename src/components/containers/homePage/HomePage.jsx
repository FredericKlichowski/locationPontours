import React from 'react';
import './homePage.css';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import ContactForm from '../../contactForm/ContactForm';

const HomePage = () => {
  return (
    <div className="locationPontours__homePage-container">
      <Navbar />
      <section className="locationPontours__homePage-section intro">Top section</section>
      <section className="locationPontours__homePage-section infos">Mid section</section>
      <section className="locationPontours__homePage-section contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
