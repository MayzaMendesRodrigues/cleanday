const EventAnalytics = {
  NewsLetterSubscription: "NewsLetterSubscription",
  NavLinkContact: "NavLinkContact",
  HamburguerButton: "HamburguerButton",
  FloatingWhatsappButton: "FloatingWhatsappButton",
  HeroWhatsappButton: "HeroWhatsappButton",
  FooterInstagramLink: "FooterInstagramLink",
  FooterFacebookLink: "FooterFacebookLink",
  FooterGoogleMapsLink: "FooterGoogleMapsLink",
  FooterWhatsappLink: "FooterWhatsappLink",
};

const EventCategory = {
  Navigation: "Navigation",
  Contact: "Contact",
  Discovery: "Discovery",
  Social: "Social",
  Lead: "Lead",
};

const EventType = {
  FormSubmission: "FormSubmission",
  Whatsapp: "Whatsapp",
  MainNavigation: "MainNavigation",
  Mobile: "Mobile",
  Phone: "Phone",
  GoogleMaps: "GoogleMaps",
  ProductView: "ProductView",
  HomeInteraction: "HomeInteraction",
  Instagram: "Instagram",
  Facebook: "Facebook",
};

const eventMap = {
  [EventAnalytics.NewsLetterSubscription]: {
    category: EventCategory.Lead,
    type: EventType.FormSubmission,
    label: "Envio Formulario Newsletter",
  },
  [EventAnalytics.NavLinkContact]: {
    category: EventCategory.Lead,
    type: EventType.Whatsapp,
    label: "Nav Link Whatsapp",
  },
  [EventAnalytics.FooterWhatsappLink]: {
    category: EventCategory.Lead,
    type: EventType.Whatsapp,
    label: "Link Whatsapp Footer",
  },
  [EventAnalytics.HeroWhatsappButton]: {
    category: EventCategory.Lead,
    type: EventType.Whatsapp,
    label: "Boton Whatsapp Hero",
  },
  [EventAnalytics.FloatingWhatsappButton]: {
    category: EventCategory.Lead,
    type: EventType.Whatsapp,
    label: "Boton Whatsapp Flotante",
  },
  [EventAnalytics.HamburguerButton]: {
    category: EventCategory.Navigation,
    type: EventType.Mobile,
    label: "Menú Móvil Abierto",
  },
  [EventAnalytics.FooterGoogleMapsLink]: {
    category: EventCategory.Contact,
    type: EventType.GoogleMaps,
    label: "Link GoogleMaps Footer",
  },
  [EventAnalytics.FooterInstagramLink]: {
    category: EventCategory.Social,
    type: EventType.Instagram,
    label: "Link Instagram Footer",
  },
  [EventAnalytics.FooterFacebookLink]: {
    category: EventCategory.Social,
    type: EventType.Facebook,
    label: "Link Facebook Footer",
  },
};

function pushEvent(eventId) {
  const meta = eventMap[eventId];
  if (!meta) {
    console.error("ID de evento no encontrado:", eventId);
    return;
  }

  const path = `event/${meta.category}/${meta.type}/${meta.label}`;
  const title = `${meta.category} -> ${meta.type} -> ${meta.label}`;

  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path, title });
    console.log("Evento enviado a GoatCounter:", title);
  } else {
    console.warn(
      "GoatCounter no está cargado. ¿Olvidaste el script de analytics?",
    );
  }
}

window.pushEvent = pushEvent;
window.EventAnalytics = EventAnalytics;
