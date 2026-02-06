export interface Artwork {
  id: number;
  title: string;
  category: string;
  year: string;
  size: 'small' | 'medium' | 'large' | 'tall';
}

export interface MenuItem {
  label: string;
  href: string;
}
