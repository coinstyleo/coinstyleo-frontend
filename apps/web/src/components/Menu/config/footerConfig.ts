import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://styleocoin.com/contact.html',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://styleocoin.com/index.html',
      },
      // {
      //   label: t('Blog'),
      //   href: '#',
      // },
      // {
      //   label: t('Community'),
      //   href: '#',
      // },
      {
        label: t('White Paper'),
        href: 'https://styleocoin.com/assets/img/STYLEOCOIN-WHITEPAPER.pdf',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://styleocoin.com/contact.html',
      },
      // {
      //   label: t('Troubleshooting'),
      //   href: '#',
      // },
      {
        label: t('Guides'),
        href: 'https://styleocoin.com/index.html',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: '#',
      },
      {
        label: t('Documentation'),
        href: 'https://styleocoin.com/index.html',
      },
      // {
      //   label: t('Bug Bounty'),
      //   href: '#',
      // },
      // {
      //   label: t('Audits'),
      //   href: '#',
      // },
      // {
      //   label: t('Careers'),
      //   href: '#',
      // },
    ],
  },
]
