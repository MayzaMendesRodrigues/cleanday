import HeroSection from './components/HeroSection/HeroSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import ContactSection from './components/ContactSection/ContactSection'
import Header from '../../components/ui/Header/Header'

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ReviewsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
