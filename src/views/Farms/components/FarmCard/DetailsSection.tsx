import React from "react";
import { useTranslation } from "contexts/Localization";
import styled from "styled-components";
import { Text, Flex, Link, LinkExternal } from "@pancakeswap-libs/uikit";

export interface ExpandableSectionProps {
  bscScanAddress?: string;
  bscScanAddress2?: string;
  removed?: boolean;
  totalValueFormated?: string;
  lpLabel?: string;
  addLiquidityUrl?: string;
}

const Wrapper = styled.div`
  margin-top: 24px;
`;

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  bscScanAddress2,
  removed,
  totalValueFormated,
  lpLabel,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{t("Game:")}:</Text>
        <Text>{lpLabel}</Text>
        {/* <StyledLinkExternal href={addLiquidityUrl}>{lpLabel}</StyledLinkExternal> */}
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text>{t("Total Bet:")}:</Text>
          <Text>{totalValueFormated}</Text>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Link external href={bscScanAddress} bold={false}>
          {t("View Home Bet")}
        </Link>
        <Link external href={bscScanAddress2} bold={false}>
          {t("View Away Bet")}
        </Link>
      </Flex>
    </Wrapper>
  );
};

export default DetailsSection;
