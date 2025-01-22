import React, { useState } from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import About from '../components/About';
import ExamGuide from '../components/ExamGuide';
import Forms from '../components/Forms';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <Slider />
      <About />
      <ExamGuide />
      <div className='allForms'>
      <Forms />
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
