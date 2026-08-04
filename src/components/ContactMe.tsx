import React from 'react';
import '../styles/contactMe.css';

const ContactMe: React.FC = () => (
  <ul className="contact-list">
    <li>
      <a href="mailto:ilyasilkin27@gmail.com" className="contact-link" aria-label="Email">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M4 4h16v16H4z" />
          <path d="m4 6 8 7 8-7" />
        </svg>
      </a>
    </li>
    <li>
      <a href="https://t.me/ilyayaya27" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Telegram">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.5 4.5 2.7 11.9c-1.2.5-1.2 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.4.8.9.8s.7-.2 1-.5l2.4-2.3 4.9 3.6c.9.5 1.5.2 1.8-.9l3.3-15.6c.3-1.4-.5-2-1.9-1.6Z" />
        </svg>
      </a>
    </li>
    <li>
      <a href="https://github.com/ilyayaya27" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.3 1.1 2.9.9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.9 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.5.2 2.6.1 2.9.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z" />
        </svg>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/ilya-silkin-front-dev/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5ZM.24 8.25h4.5V23H.24V8.25ZM8.25 8.25h4.3v2h.06c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V23h-4.5v-6.7c0-1.6 0-3.7-2.2-3.7s-2.6 1.8-2.6 3.6V23h-4.5V8.25Z" />
        </svg>
      </a>
    </li>
  </ul>
);

export default ContactMe;
