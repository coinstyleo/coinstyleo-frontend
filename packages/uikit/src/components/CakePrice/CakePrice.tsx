import React from "react";
import styled from "styled-components";
import Icon from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors, darkColors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
}
const LogoRoundstyle ={
  background: darkColors.gradientBubblegum,
  borderRadius: "100%",
  margin: "0px 2px",
  padding: "3px",
  width: "38px"

}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<React.PropsWithChildren<Props>> = ({
  cakePriceUsd,
  color = "textSubtle",
  showSkeleton = true,
}) => {
  return cakePriceUsd ? (
    <PriceLink
      href="https://www.styleodex.finance/swap?outputCurrency=0xd9361d306A9e9A43f5883a064038220EF0D46fB0&chainId=56"
      target="_blank"
    >
      <Icon style={LogoRoundstyle} width="24px" mr="8px" />
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
