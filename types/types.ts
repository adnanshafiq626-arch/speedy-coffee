export interface Product {
  id: string;
  category: string;
  title: string;
  image: string;
  details: {
    left: string;
    right: string;
  };
  rotation: 'left' | 'center' | 'right';
  backgroundColor: string;
  isBestseller?: boolean;
  description?: string;
}

export interface Feature {
  icon: string;
  iconColor: string;
  iconBgColor: string;
  hoverIconBg: string;
  hoverIconText: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  variant: 'rose-quote' | 'white-review' | 'yellow-video' | 'white-rating' | 'large-white' | 'product-designer' | 'image-overlay' | 'rose-long' | 'yellow-small' | 'white-date' | 'yellow-product';
  content: string;
  author: {
    name: string;
    role?: string;
    handle?: string;
    avatar: string;
  };
  rating?: number;
  likes?: number;
  comments?: number;
  date?: string;
  platform?: string;
  productImage?: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
