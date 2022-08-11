import React from "react";
import styled from "styled-components";
import { getBalanceNumber } from "utils/formatBalance";
import {
  Card,
  CardBody,
  Heading,
  Skeleton,
  Text,
} from "@pancakeswap-libs/uikit";
import useI18n from "hooks/useI18n";
import {
  useTotalSupply,
  useBurnedBalance,
  useGetReserves,
} from "hooks/useTokenBalance";
import { useGetStats } from "hooks/api";
// import { totalValue } from 'views/Farms/components/FarmCard/FarmCard'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`;

const TotalValueLockedCard = () => {
  const TranslateString = useI18n();
  const data = useGetReserves();
  const data1 = getBalanceNumber(data) * 2;
  // const tvl1 = totalValue()
  // const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px" color="secondary">
          {TranslateString(762, "Total Value Locked (TVL)")}
        </Heading>
        {data ? (
          <>
            <Heading size="xl">{`$ ${data1}`}</Heading>
            <Text color="textSubtle">
              {TranslateString(
                764,
                "Across all internal and external LPs and Syrup Pools"
              )}
            </Text>
          </>
        ) : (
          <>
            <Skeleton height={66} />
          </>
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  );
};

export default TotalValueLockedCard;
