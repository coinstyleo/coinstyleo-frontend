import React from "react";
import styled from "styled-components";
import LogoRoundAST from "../Svg/Icons/LogoRoundAST";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors, darkColors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
}
const LogoRoundASTstyle ={
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
      href="https://hcfswap.network/swap?outputCurrency=0x2288ae34A0ea59219e53755eB24a27A313689D9A&chainId=56"
      target="_blank"
    >
      <LogoRoundAST style={LogoRoundASTstyle} width="24px" mr="8px" />
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
