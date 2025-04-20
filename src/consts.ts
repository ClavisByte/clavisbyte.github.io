// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { MenuItems, SocialItems } from "./types";

// Site title and description
export const SITE_TAB = "BYTE";
export const SITE_TITLE = "BYTE";
export const SITE_DESCRIPTION = "TETRA Type-01/B";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "B Y T E";
export const USER_SITE = "https://clavisbyte.link"
export const USER_AVATAR = "/profile.png";
export const BRAND_LOGO = "logo/emb_o";
export const BRAND_LOGO_SUB = "logo/emb_b";

// Server and transition settings
export const SERVER_URL = "https://clavisbyte.link";

// Menu items for navigation
export const menuItems: MenuItems[] = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  /*{ id: "about", text: "About", href: "/about", svg: "about", target: "_self" },*/ // About page
  /*{
    id: "about",
    text: "About",
    href: "/about",
    svg: "about",
    target: "_self",
  },*/
  /*{ id: "iv", text: "IV", href: "/iv", svg: "blog", target: "_self" }, 
  { id: "clavis", text: "Clavis", href: "/clavis", svg: "blog", target: "_self" }, 
  { id: "byte", text: "BYTE", href: "/byte", svg: "blog", target: "_self" }, */
  {
    id: "oc_profiles",
    text: "OC Profiles",
    href: "#",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "clavis",
        text: "Clavis",
        href: "/clavis",
        svg: "blog",
        target: "_self",
      },
      {
        id: "iv",
        text: "IV",
        href: "/iv",
        svg: "blog",
        target: "_self",
      },
      {
        id: "byte",
        text: "BYTE",
        href: "/byte",
        svg: "blog",
        target: "_self",
      },
    ],
  }, // Blog page with sub-items
  /*{
    id: "contact",
    text: "Contact",
    href: "mailto:contact@clavisbyte.link", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },*/
];

// Social media and contact icons
export const socialIcons : SocialItems[] = [
  {
    href: "https://www.youtube.com/@ClavisByte",
    ariaLabel: "Youtube @ClavisByte",
    title: "Youtube",
    svg: "youtube",
  },
  {
    href: "https://bsky.app/profile/clavisbyte.link",
    ariaLabel: "Bluesky @clavisbyte.link",
    title: "Bluesky",
    svg: "bluesky",
  },
  {
    href: "https://twitter.com/ClavisByte",
    ariaLabel: "Twitter @ClavisByte",
    title: "Twitter",
    svg: "twitter",
  },
  {
    href: "https://www.instagram.com/clavisbyte",
    ariaLabel: "Instagram @clavisbyte",
    title: "Instagram",
    svg: "instagram",
  }
  /*{
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },*/
];
