import React from 'react';
import '../styles/contactMe.css';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-me">
      <ul className="contact-list">
        <li className="contact-item">
          <a href="mailto:ilyasilkin27@gmail.com" className="contact-link" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="contact-item">
          <a href="https://t.me/ilyayaya27" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <i className="fab fa-telegram-plane"></i>
          </a>
        </li>
        <li className="contact-item">
          <a href="https://github.com/ilyayaya27" className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
