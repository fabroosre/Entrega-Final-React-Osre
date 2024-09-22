import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Dirección: Calle La Década Ganada 123 - El Calafate - Peronia Land</p>
        <p>Teléfono: +54 03547 2547814</p>
        <p>e-mail: nosrobamosunPBI@lta.com</p>
      </div>
      <div className="social-media">
        <a href="https://facebook.com" className="social-link" aria-label="Facebook-K" target="blank">
          <FaFacebook />
        </a>
        <a href="https://x.com/p_justicialista?lang=es" className="social-link" aria-label="Twitter-K" target="blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/EJNKar/" className="social-link" aria-label="Instagram-K" target="blank">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/posts/la_cristina-kirchner-apunt%C3%B3-contra-los-dos-senadores-activity-7206982455881351172-mSHE/" className="social-link" aria-label="LinkedIn-K" target="blank">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-note">Todos los derechos reservados CFK Inc.</p>
    </footer>
  );
};

export default Footer;