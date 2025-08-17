import './Newsletter.css'
import React, { useState } from 'react';
import { pushEvent, EventAnalytics } from '../../../analytics/analytics';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter">
      <input type="email"
        id="newsletter-input"
        placeholder="Tu email"
        className="newsletter-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => pushEvent(EventAnalytics.SubscribeButton)}
        type="submit"
        className="button newsletter-button">
        Suscribirme
      </button>
    </form>
  )
};

export default Newsletter;
