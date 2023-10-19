import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useAccount } from 'wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData, rateSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
// import WinSection from './components/WinSection'
// import FarmsPoolsRow from './components/FarmsPoolsRow'
// import Footer from './components/Footer' 
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper /* , WedgeTopRight */ } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'

// import MultipleBanner from './components/Banners/MultipleBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  margin-top:-20px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta  />
      <style jsx global>{`
        #home-1 .page-bg {
          background-image: url("/images/home/images/slider.png");
        }
        [data-theme='dark'] #home-1 .page-bg {
          background-image: url("/images/home/images/slider.png");
        }
        #home-2 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #201335 100%);
        }
        [data-theme='dark'] #home-2 .page-bg {
          background: linear-gradient(180deg, #09070c 22%, #201335 100%);
        }
        #home-3 .page-bg {
          background: linear-gradient(180deg, #6fb6f1 0%, #eaf2f6 100%);
        }
        [data-theme='dark'] #home-3 .page-bg {
          background: linear-gradient(180deg, #0b4576 0%, #091115 100%);
        }
        #home-4 {
          background:linear-gradient(83.55deg, #0653B0 14.95%, #56D6E2 84.15%);
        }
        #home-4 ::before {
          opacity: 0.1;
          content: "";
          height: 100%;
          width: 100%;
          background-image: url("/images/home/images/registration-bg.png");
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
        }
        
        #home-4 .inner-wedge svg {
          fill: #d8cbed;
        }
        #home-5 {
          background-color: #10102D !important;
        }
        #home-5 ::before {
          opacity: 0.1;
          content: "";
          height: 100%;
          width: 100%;
          background-image: url("/images/home/images/earn-bg.png");
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
        }
        [data-theme='dark'] #home-4 .inner-wedge svg {
          fill: #201335;
        }
      `}</style>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        {account && chainId === ChainId.BSC && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        {/* <MultipleBanner /> */}
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-2',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        containerProps={{
          id: 'home-4',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        // background={theme.colors.gradientCardHeader}
        index={2}
        hasCurvedDivider={false}
        containerProps={{
          id: 'home-5',
        }}
      >
        {/* <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper> */}
        <SalesSection {...earnSectionData(t)} />
        {/* TODO: until we are enable fetch multi-chain farms */}
        {/* {chainId === ChainId.BSC && <FarmsPoolsRow />} */}
      </PageSection>
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        containerProps={{
          id: 'home-3',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection> */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        containerProps={{
          id: 'home-4',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        {/* <OuterWedgeWrapper>
          <InnerWedgeWrapper top>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper> */}
        <SalesSection {...rateSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
        <CakeDataRow />
      </PageSection>
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #7645D9 0%, #5121B1 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection> */}
    </>
  )
}

export default Home
