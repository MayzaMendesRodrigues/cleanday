import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { pushEvent, EventAnalytics } from '../../../analytics/analytics';
import Logo from '../Logo/Logo'
import { ContactInfo } from '../../../constants/constants'

const pagesLinks = [
  { text: 'Inicio', url: '/', nav: true },
  {
    text: 'Contacto',
    url: ContactInfo.WhatsappLink + "?text=Hola,%20quiero%20información%20sobre%20un%20tratamiento"
    ,
    nav: false
  },
]

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(prevState => {
      if (!prevState) {
        pushEvent(EventAnalytics.HamburguerButton);
      }
      return !prevState;
    });
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen])

  const nav = (
    <nav>
      <ul>
        {pagesLinks.map((item) => (
          <li key={item.text} >
            {item.nav
              ? <Link className="nav-item" to={item.url}>{item.text}</Link>
              : <a className="nav-item"
                href={item.url}
                rel="noreferrer"
                target="_blank">{item.text}
              </a>}
          </li>
        ))}
      </ul >
    </nav>
  )

  return (
    <header className="header">
      <div className="header-container container">
        <Logo />
        <div className="desktop-nav">
          {nav}
        </div>

        <button className="mobile-menu-btn" onClick={handleMenuToggle} aria-label="Open menu">
          <i className="fas fa-bars"></i>
        </button>

        {isMobileMenuOpen && (
          <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {nav}
          </div>)
        }
      </div>
    </header>
  );
};

export default Header;
