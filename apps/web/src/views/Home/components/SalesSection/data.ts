import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'
import registrationicon from '../../../../../public/images/home/images/registration.png'
import earnicon from '../../../../../public/images/home/images/earn.png'
import worldicon from '../../../../../public/images/home/images/crypto-world.png'
import exchangeicon from '../../../../../public/images/home/images/crypto-exchange.png'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('TRADE ANYTHING. NO REGISTRATION, NO HASSLE.'),
  bodyText: t('Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: t('Learn'),
    external: true,
  },
  images: {
    src : registrationicon,
    // attributes: [
    //   { src: 'BNB', alt: t('BNB token') },
    //   { src: 'BTC', alt: t('BTC token') },
    //   { src: 'CAKE', alt: t('CAKE token') },
    // ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('EARN PASSIVE INCOME WITH CRYPTO.'),
  bodyText: t('Rich Swap makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    src : earnicon,
    // path: '/images/home/earn/',
    // attributes: [
    //   { src: 'pie', alt: t('Pie chart') },
    //   { src: 'stonks', alt: t('Stocks chart') },
    //   { src: 'folder', alt: t('Folder with cake token') },
    // ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('CRYPTO MAKES OUR WORLD GO ROUND.'),
  bodyText: t(
    'Rich token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x88e7F1AC8258a355Dfe71d0Cb740057394144d94&chainId=56',
    text: t('Buy Rich'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    src : exchangeicon,
    // path: '/images/home/cake/',
    // attributes: [
    //   { src: 'bottom-right', alt: t('Small 3d pancake') },
    //   { src: 'top-right', alt: t('Small 3d pancake') },
    //   { src: 'coin', alt: t('CAKE token') },
    //   { src: 'top-left', alt: t('Small 3d pancake') },
    // ],
  },
})

export const rateSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('BEST RATES CRYPTO EXCHANGE'),
  bodyText: t(
    'We work with multiple cryptocurrency trading platforms and exchange partners to guarantee the best rates to our clients',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x88e7F1AC8258a355Dfe71d0Cb740057394144d94&chainId=56',
    text: t('Buy Rich'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    src : worldicon,
    // path: '/images/home/cake/',
    // attributes: [
    //   { src: 'bottom-right', alt: t('Small 3d pancake') },
    //   { src: 'top-right', alt: t('Small 3d pancake') },
    //   { src: 'coin', alt: t('CAKE token') },
    //   { src: 'top-left', alt: t('Small 3d pancake') },
    // ],
  },
})
