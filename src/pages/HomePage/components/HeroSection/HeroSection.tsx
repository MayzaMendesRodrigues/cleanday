import './HeroSection.css'
import Button from '../../../../components/ui/Button'
import { ContactInfo } from '../../../../constants/constants'
import { pushEvent, EventAnalytics } from '../../../../analytics/analytics';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Belleza que trasciende</h2>
          <p>
            Descubrí tu mejor versión en nuestro exclusivo centro de estética en
            el corazón de Villa Luro
          </p>
          <Button
            href={ContactInfo.WhatsappLink + "?text=Hola,%20quiero%20información%20sobre%20un%20tratamiento"}
            text="Reservá tu primera sesión"
            onClick={() => pushEvent(EventAnalytics.BookButton)}
          />
        </div>
      </div>
    </section>
  )
};

export default HeroSection;
