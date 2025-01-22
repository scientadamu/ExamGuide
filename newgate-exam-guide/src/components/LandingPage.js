import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [matricNumber, setMatricNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const slideImages = [
    '/images/slider1.jpeg', // Ensure these images are in the public folder
    '/images/slider2.jpg',
    '/images/slider3.jpeg',
    '/images/slider4.jpeg',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideImages.length); // Change slide every 3 seconds
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email === 'scientadamu@gmail.com' && password === 'Admin') {
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } else {
      alert('Invalid email or password');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    // Validate Matric Number format
    const matricNumberRegex = /^[A-Za-z]{3}\/25\/[A-Za-z]{3}\/\d{3}$/;
    if (!matricNumberRegex.test(matricNumber)) {
      setErrorMessage('Matric number should be in the format NUM/25/DTP/012');
      return;
    }

    // Validate Password Confirmation
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setErrorMessage('');
    alert('Registration Successful!');
    // Add further registration logic here
  };

  const showForgotPasswordForm = () => {
    setShowLogin(false);
    setShowForgotPassword(true);
    setShowSignUp(false);
  };

  const showSignUpForm = () => {
    setShowLogin(false);
    setShowForgotPassword(false);
    setShowSignUp(true);
  };

  const showLoginForm = () => {
    setShowLogin(true);
    setShowForgotPassword(false);
    setShowSignUp(false);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slideImages.length);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo"></div>
          <div className="site-name">New Gate Exam Guide</div>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <div className={`links ${menuVisible ? 'show' : ''}`}>
            <a href="#about">About</a>
            <a href="#exam-guide">Exam Guide</a>
            <a href="#contact">Login</a>
          </div>
        </nav>
        <p>Your guide to academic excellence and exam preparation.</p>
      </header>

      {/* Mobile Menu */}
      {menuVisible && (
        <div className="mobile-menu">
          <a href="#about">About</a>
          <a href="#exam-guide">Exam Guide</a>
          <a href="#contact">Contact</a>
          <a href="#login" onClick={(e) => e.preventDefault()}>Login</a>
        </div>
      )}

      {/* Slider Section */}
      <section className="slider-container">
        <div className="slider">
          <div
            className="slide"
            style={{ backgroundImage: `url(${slideImages[slideIndex]})` }}
          >
            <div className="text">
              {/* You can change the text here for each slide */}
              {slideIndex === 0 && <div>Newgate Uni</div>}
              {slideIndex === 1 && <div>Best Solution</div>}
              {slideIndex === 2 && <div>Perfect Environment</div>}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="slider-nav">
          <button onClick={handlePrevSlide}>&lt;</button>
          <button onClick={handleNextSlide}>&gt;</button>
        </div>
      </section>

      {/* About Newgate University */}
      <section id="about" className="about-section">
        <h2>About Newgate University Minna</h2>
        <div className="about-section-container">
          <div className="map-details">
            <p>Newgate University Minna (NUM) promotes equal opportunity and uses technology to enhance students' critical thinking, creativity, and problem-solving. With the motto "Explore to Excel," NUM fosters intellectual growth and innovation, preparing graduates for success in their careers and communities.</p>
          </div>
          <div className="map-container">
            <h3>Find Us on the Map:</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Exam Guide Section */}
      <section id="exam-guide" className="exam-guide-section">
        <h2>Exam Guide</h2>
        <p>Our comprehensive exam guide offers you all the necessary resources to excel in your exams. From detailed study materials to past exam papers and strategies, we are here to guide you every step of the way.</p>
        <button>Access Exam Guide</button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="form-section">
        {/* Login Form Section */}
        {showLogin && (
          <div className="form-container" id="login-container">
            <h3>Login</h3>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Username or Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
              <button type="button" onClick={showForgotPasswordForm}>
                Forgot your password?
              </button>
            </form>
            <p>
              <a href="#" onClick={showSignUpForm}>Don't have an account? Register</a>
            </p>
          </div>
        )}

        {/* Forgot Password Form Section */}
        {showForgotPassword && (
          <div className="form-container" id="forgot-password-container">
            <h3>Reset Password</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Send Reset Link</button>
            </form>
            <p>
              <a href="#" onClick={showLoginForm}>Remember your password? Login</a>
            </p>
          </div>
        )}

        {/* Sign Up Form Section */}
        {showSignUp && (
          <div className="form-container" id="signup-container">
            <h3>Register</h3>
            <form onSubmit={handleSignUpSubmit}>
              <input
                type="text"
                placeholder="Matric Number (NUM/25/DTP/012)"
                required
                value={matricNumber}
                onChange={(e) => setMatricNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <button type="submit">Register</button>
            </form>
            <p>
              <a href="#" onClick={showLoginForm}>Already have an account? Login</a>
            </p>
          </div>
        )}

        {/* Contact Us Form Section */}
        <div className="form-container">
          <h3>Contact Us</h3>
          <form onSubmit={handleContactSubmit} id="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Newgate University Minna. All Rights Reserved. | Privacy Policy</p>
      </footer>
    </div>
  );
}

export default LandingPage;
