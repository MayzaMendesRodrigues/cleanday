import './StickyWhatsappButton.css';
import { pushEvent, EventAnalytics } from '../../../analytics/analytics';
import { ContactInfo } from '../../../constants/constants'

const StickyWhatsappButton: React.FC = () => {
  return (
    <a href={ContactInfo.WhatsappLink + "?text=Hola,%20quiero%20información%20sobre%20un%20tratamiento"}
      className="sticky-whatsapp-button btn-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => pushEvent(EventAnalytics.FloatingWhatsappButton)}>
      <i className="fab fa-whatsapp"></i>
    </a >
  );
};

export default StickyWhatsappButton;
