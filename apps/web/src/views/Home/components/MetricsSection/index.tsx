import { Heading, Flex, Text, Skeleton, /* ChartIcon, CommunityIcon, SwapIcon, Logo  */ darkColors } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from '@pancakeswap/utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import Image from 'next/legacy/image'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import { LogoWithTextIcon } from "../../../../../../../packages/uikit/src/components/Svg";
import usersicon from '../../../../../public/images/home/images/usersicon.png'
import tradesicon from '../../../../../public/images/home/images/tradesicon.png'
import stakedicon from '../../../../../public/images/home/images/stakedicon.png'


const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <Image src={usersicon} priority placeholder="blur" alt={t('Lunar bunny')} />,
  }

  const TradesCardData: IconCardData = {
    icon: <Image src={tradesicon} priority placeholder="blur" alt={t('Lunar bunny')} />,
  }

  const StakedCardData: IconCardData = {
    icon: <Image src={stakedicon} priority placeholder="blur" alt={t('Lunar bunny')} />,
  }

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null,  'row']}
        alignItems={['center', null, null, 'center']}
        justifyContent="center"
      >
         <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          //flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          display={'contents !important'}
        >
          <Flex
            flexDirection={['column-reverse', null, null,  'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="center"
            mr={10}
          >
            <IconCard background={darkColors.input} {...StakedCardData}>
              <StatCardContent
                headingText={t('$%tvl% staked', { tvl: tvlString })}
                bodyText={t('Total Value Locked')}
                highlightColor={theme.colors.failure}
              />
            </IconCard>
          </Flex>
          <Flex
            flexDirection="column"
            flex="1">

            <IconCard background={darkColors.input} {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
              <StatCardContent
                headingText={t('%users% users', { users })}
                bodyText={t('in the last 30 days')}
                highlightColor={theme.colors.secondary}
              />
            </IconCard><br/>
            <IconCard background={darkColors.input} {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
              <StatCardContent
                headingText={t('%trades% trades', { trades })}
                bodyText={t('made in the last 30 days')}
                highlightColor={theme.colors.primary}
              />
            </IconCard>
          </Flex>
          
        </Flex>
        <Flex
          flexDirection="column"
          alignItems='center'
          flex="1"
          ml={[null, null, null, '64px']}
          mr={[null, null, null, '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <LogoWithTextIcon  width="198px" mb="44px" /><br/>
          <Heading textAlign="center" scale="xl">
            {t('Used by millions.')}
          </Heading>
          <Heading textAlign="center" scale="xl" mb="32px">
            {t('Trusted with billions.')}
          </Heading>
          <Text textAlign="center" color="textSubtle">
            {t('RICH Swap has the most users of any decentralized platform, ever.')}
          </Text>
          <Flex flexWrap="wrap">
            <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
              {entrusting}
              <>{tvl ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
              {inFunds}
            </Text>
          </Flex>

          <Text textAlign="center" color="textSubtle" bold mb="32px">
            {t('Will you join them?')}
          </Text>

        </Flex>

       
      </Flex>
    </Flex>
    
  )
}

export default Stats
