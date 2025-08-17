import './Logo.css'
import logoImage from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <Link to="/" className="logo-container">
    <img className="logo-img" src={logoImage} alt="Cleanday estetica y belleza" />
    <h1 className="logo-title">CleanDay<span className="logo-dot">.</span></h1>
  </Link>
);

export default Logo;

