import React from 'react';
import Logo from '../assets/svg/logo.svg';
import Github from '../assets/svg/Github - Negative.svg';
import Linkedin from '../assets/svg/LinkedIn - Negative.svg';
import Instagram from '../assets/svg/Instagram - Negative.svg';
import Discord from '../assets/svg/Discord - Negative.svg';
import Telegram from '../assets/svg/Telegram - Negative.svg';

import { getAnalytics, logEvent } from 'firebase/analytics';
import { app } from '../utils/firebase-config.js';
import MiniLabel from './MiniLabel';

const Footer = () => {
  // const analytics = getAnalytics(app);

  const social = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/shridhar-chavan/',
      icon: <Linkedin className="social-icon" />,
    },
    {
      name: 'Github',
      link: 'https://github.com/shridhar03',
      icon: <Github className="social-icon" />,
    },
    {
      name: 'Instagram',
      link: '#',
      icon: <Instagram className="social-icon" />,
    },
    {
      name: 'Discord',
      link: '#',
      icon: <Discord className="social-icon" />,
    },
    {
      name: 'Telegram',
      link: '#',
      icon: <Telegram className="social-icon" />,
    },
  ];
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="copyright">
          <span className="text">© {new Date().getFullYear()} Shridhar-Chavan</span>
        </div>
        <div className="version">
          v2.0
          <MiniLabel label="Beta" />
        </div>

        <div className="social">
          {social.map((site) => {
            return (
              <a
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-container"
               // onClick={() => logEvent(analytics, `social_${site.name}`)}
                >
                {site.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
