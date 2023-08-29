import { Flex, Text, Button, Link, NextLinkFromReactRouter as RouterLink } from '@pancakeswap/uikit'
import ColoredWordHeading from '../ColoredWordHeading'

import Image, { ImageProps } from 'next/legacy/image'

const borderstyle = {
  border:"2px solid #fff",
  borderRadius:"50px",
}

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: ImageProps
}

const SalesSection: React.FC<React.PropsWithChildren<SalesSectionProps>> = (props) => {
  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  return (
    
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
    {images ? <Image src={images.src} priority  width={230} height={199} /> : '' }

          <ColoredWordHeading text={headingText} />
          <Text color="textSubtle" mb="24px">
            {bodyText}
          </Text>
          <Flex>
            <Button mr="16px" style={borderstyle}>
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </RouterLink>
              )}
            </Button>
            
          </Flex>

          
    </Flex>
  )
}

export default SalesSection
