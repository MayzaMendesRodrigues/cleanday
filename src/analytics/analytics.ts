
export enum EventAnalytics {
  HamburguerButton = "HamburguerButton",
  BookButton = "BookButton",
  FooterWhatsappButton = "FooterWhatsappButton",
  SubscribeButton = "SubscribeButton",
  FloatingWhatsappButton = "FloatingWhatsappButton",
  FooterInstagramLink = "FooterInstagramLink",
  FooterFacebookLink = "FooterFacebookLink",
  FooterGoogleMapsLink = "FooterGoogleMapsLink",
  FooterWhatsappLink = "FooterWhatsappLink",
}

type EventMeta = {
  category: string;
  type: string;
  label: string;
};

const eventMap: Record<EventAnalytics, EventMeta> = {
  [EventAnalytics.BookButton]: { category: "Book", type: "Whatsapp", label: "Boton Primera Sesion" },
  [EventAnalytics.HamburguerButton]: { category: "Navegation", type: "HamburguerButton", label: "Menu Mobile" },
  [EventAnalytics.FooterWhatsappButton]: { category: "Contacto", type: "Whatsapp", label: "Boton Whatsapp Footer" },
  [EventAnalytics.SubscribeButton]: { category: "Newsletter", type: "Subscription", label: "Boton Suscribirse" },
  [EventAnalytics.FloatingWhatsappButton]: { category: "Contacto", type: "Whatsapp", label: "Boton Whatsapp Flotante" },
  [EventAnalytics.FooterInstagramLink]: { category: "RedSocial", type: "Instagram", label: "Link Instagram Footer" },
  [EventAnalytics.FooterFacebookLink]: { category: "RedSocial", type: "Facebook", label: "Link Facebook Footer" },
  [EventAnalytics.FooterWhatsappLink]: { category: "RedSocial", type: "Whatsapp", label: "Link Whatsapp Footer" },
  [EventAnalytics.FooterGoogleMapsLink]: { category: "Contacto", type: "GoogleMaps", label: "Link GoogleMaps Footer" },
};

export function pushEvent(eventId: EventAnalytics) {
  const meta = eventMap[eventId];
  if (!meta) return;

  const path = `event/${meta.category}/${meta.type}/${meta.label}`;
  const title = `${meta.category} -> ${meta.type} -> ${meta.label}`;

  if (typeof window !== "undefined" && window.goatcounter?.count) {
    window.goatcounter.count({ path, title });
  } else {
    console.warn("GoatCounter script not loaded yet.");
  }
}
