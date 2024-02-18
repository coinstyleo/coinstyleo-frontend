import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import {
  TwitterIcon,
  TelegramIcon,
  RedditIcon,
  InstagramIcon,
  GithubIcon,
  DiscordIcon,
  MediumIcon,
  YoutubeIcon,
} from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://styleocoin.com/index.html ",
      },
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Community",
        href: "#",
      },
      {
        label: "CAKE",
        href: "#",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "#",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "#",
      },
      {
        label: "Troubleshooting",
        href: "#",
      },
      {
        label: "Guides",
        href: "#",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "#",
      },
      {
        label: "Documentation",
        href: "#",
      },
      {
        label: "Bug Bounty",
        href: "#",
      },
      {
        label: "Audits",
        href: "#",
      },
      {
        label: "Careers",
        href: "#",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/styleocoin",
  },
  // {
  //   label: "Telegram",
  //   icon: TelegramIcon,
  //   href: "#",
  //   // items: [
  //   //   {
  //   //     label: "English",
        
  //   //   },
      
  //   // ],
  // },
  {
    label: "Facebook",
    icon: RedditIcon,
    href: "https://www.facebook.com/profile.php?id=61554420863308",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/styleocoin/",
  },
  // {
  //   label: "Github",
  //   icon: GithubIcon,
  //   href: "#",
  // },
  // {
  //   label: "Discord",
  //   icon: DiscordIcon,
  //   href: "#",
  // },
  // {
  //   label: "Medium",
  //   icon: MediumIcon,
  //   href: "#",
  // },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "https://www.youtube.com/@styleocoin/videos",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
