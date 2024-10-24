// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "BYTE";
export const SITE_TITLE = "BYTE";
export const SITE_DESCRIPTION = ".";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Clavis:BYTE";
export const USER_SITE = "https://clavisbyte.link"
export const USER_AVATAR = "/profile.png";

// Server and transition settings
export const SERVER_URL = "https://clavisbyte.link";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
    ],
  }, // Blog page with sub-items
  {
    id: "contact",
    text: "Contact",
    href: "mailto:contact@clavisbyte.link", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
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
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
