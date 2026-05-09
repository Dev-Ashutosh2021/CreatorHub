export type ContentItem = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  thumbnail: string;
  previewImage: string;
  category: string;
  tags: string[];
  level: string;
};

export type Creator = {
  name: string;
  role: string;
  bio: string;
  location: string;
  profileImage: string;
  bannerImage: string;
  socials: {
    label: string;
    href: string;
  }[];
};
