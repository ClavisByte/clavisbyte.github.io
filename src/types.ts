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
  hideCard?: boolean;
}

export interface ProfileData {
  img?: string;
  svgs?: string[];
  about?: { title?: string; content?: string; redacted?:boolean; }[];
  name?: { first?: string; last?: string; };

  basicDetails?: {
    title?: string;
    content?: string;
    redacted?:boolean;
  }[];
  personalDetails?: {
    title?: string;
    content?: string;
    redacted?:boolean;
  }[];
  descriptions?: {
    title?: string;
    content?: string;
    redacted?:boolean;
  }[];
  characteristics?: {
    traits?: string[];
    enneagram?: string[];
    moralAlignment?: string;
    archtype?: string[];
    temperment?: string[];
    schemata?: string[];
    mannerisms?: string[];
  }

  likes?: string[];
  dislikes?: string[];
  languages?: string[];
  miscellaneous?: {
    content?: string;
    redacted?:boolean;
  }[];

  media?: {
    title?: string;
    content?: string;
    url?: string;
    badge?: string;
    target?: string;
  }[];
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
