import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <span className="footer__logo-name">Sama</span>
          <span className="footer__logo-sub">Hair Extensions</span>
          <p className="footer__tagline">Transforming hair, boosting confidence.<br />Expert extensions in the UK.</p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/services">Services &amp; Pricing</Link>
            <Link to="/contact">Book Appointment</Link>
          </nav>
        </div>

        <div className="footer__contact">
          <h4>Get In Touch</h4>
          <a href="tel:+447000000000">+44 700 000 0000</a>
          <a href="mailto:hello@samahairextensions.co.uk">hello@samahairextensions.co.uk</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__insta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            @samahairextensions
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {year} Sama Hair Extensions. All rights reserved.</p>
        <p>Proudly serving clients across the UK</p>
      </div>
    </footer>
  );
}
