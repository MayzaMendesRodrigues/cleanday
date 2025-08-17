import './Footer.css'
import { EventAnalytics, pushEvent } from '../../../analytics/analytics';
import { SocialMedia, ContactInfo } from '../../../constants/constants'

const socialLinks = [
  {
    href: SocialMedia.Facebook,
    icon: "fab fa-facebook-f",
    analyticsEvent: EventAnalytics.FooterFacebookLink,
  },
  {
    href: SocialMedia.Instagram,
    icon: "fab fa-instagram",
    analyticsEvent: EventAnalytics.FooterInstagramLink,
  },
  {
    href: ContactInfo.WhatsappLink + "?text=Hola,%20quiero%20información%20sobre%20un%20tratamiento",
    icon: "fab fa-whatsapp",
    analyticsEvent: EventAnalytics.FooterWhatsappLink,
  },
  {
    href: SocialMedia.Location,
    icon: "fas fa-map-marker-alt",
    analyticsEvent: EventAnalytics.FooterGoogleMapsLink,
  },
]

const footerLinks = [
  "Lunes a Viernes: 09:00 - 20:00",
  "Sábados: 09:00 - 13:00",
  "Domingos: Cerrado",
  "Feriados: Consultar",
];

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    text: ContactInfo.Address,
  },
  {
    icon: "fas fa-phone",
    text: ContactInfo.PhoneNumber,
  },
  {
    icon: "fas fa-envelope",
    text: ContactInfo.Email,
  },
];

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>CleanDay Estética</h3>
            <p>
              Tu centro de bienestar y belleza premium en Villa Luro. Ofrecemos tratamientos avanzados con tecnología de última generación y profesionales altamente capacitados.
            </p>
            <div className="social-links">
              {socialLinks.map(({ href, icon }, index) => (
                <a key={index} href={href}
                  onClick={() => pushEvent(socialLinks[index].analyticsEvent)}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Horario de atención</h3>
            <ul className="footer-links">
              {footerLinks.map((link, index) => (<li key={index}>{link}</li>))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <ul className="contact-info">
              {contactInfo.map(({ icon, text }, index) => (
                <li key={index}>
                  <i className={icon}></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Cleanday - Centro de estética, Villa Luro, CABA</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
