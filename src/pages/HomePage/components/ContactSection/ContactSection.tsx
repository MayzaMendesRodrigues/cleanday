import './ContactSection.css'
import Newsletter from '../../../../components/feature/Newsletter/Newsletter'

const ContactSection: React.FC = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="section-title">
          <h2>
            Enterate de promociones exclusivas y consejos de belleza
          </h2>
        </div>
        <div className="newsletter">
          <Newsletter />
        </div>
      </div>
    </section >
  )
};

export default ContactSection;
