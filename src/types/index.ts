export interface Review {
  images: string[];
  published_at: number;
  rating: number;
  reviewer_name: string;
  reviewer_picture_url: string;
  text: string;
  title: string | null;
}

export { };

declare global {
  interface Window {
    goatcounter?: {
      count: (params: { path: string; title?: string }) => void;
    };
  }
}
