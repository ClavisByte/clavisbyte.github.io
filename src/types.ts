export interface Post {
  [x: string]: any;
  data: {
    [x: string]: any;
    title: string;
    image: string;
    description: string;
    pubDate: Date;
    badge: string;
    categories: string[];
    tags: string[];
  };
  remarkPluginFrontmatter: {
    totalCharCount: string;
    readingTime: string;
  };
  slug: string;
}

export interface Page {
  url: {
    prev?: string;
    next?: string;
  };
  data: Post[];
  total: number;
  size: number;
  current: string;
}

export interface CardInfo {
  title: string;
  image?: string;
  pubDate?: Date;
  badge?: string;
  categories?: string[];
  tags?: string[];
  word?: string;
  time?: string;
  isBlog: boolean;
  url?: string;
  showBorder?: boolean;
  class_?: string;
}

export interface LinkListData {
  showBorder?: boolean;
  class_?: string;
  menu?: boolean;
  linklist?: boolean;
  sideCard?: boolean;
}

export interface ProfileData {
  title?: string;
  img?: string;
  desc?: string;
  url?: string;
  badge?: string;
  target?: string;
}

export interface LinkCard {
  title?: string;
  img?: string;
  desc?: string;
  url?: string;
  badge?: string;
  target?: string;
}

export interface EnvelopeInfo {
  title: string;
  desc: string;
  image?: string;
  pubDate?: Date;
  badge?: string;
  categories?: string[];
  tags?: string[];
  word?: string;
  time?: string;
  isBlog: boolean;
  url: string;
}

export type MenuItems =
{
  id: string;
  text: string;
  href: string;
  svg?: string;
  target?: string;
  subItems?: {
    id: string;
    text: string;
    href: string;
    svg?: string;
    target?: string;
  }[];
}

export type SocialItems =
{
  id?: string;
  href?: string;
  ariaLabel?: string;
  title?: string;
  svg?: string;
  target?: string;
  subItems?: {
    id?: string;
    href?: string;
    ariaLabel?: string;
    title?: string;
    svg?: string;
    target?: string;
  }[];
}
