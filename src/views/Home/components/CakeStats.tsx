import React from "react";
import { Card, CardBody, Heading, Text } from "@pancakeswap-libs/uikit";
import styled from "styled-components";
import { getBalanceNumber } from "utils/formatBalance";
import {
  useTotalSupply,
  useBurnedBalance,
  useGetReserves,
} from "hooks/useTokenBalance";
import useI18n from "hooks/useI18n";
import { getCakeAddress, getHgctAddress } from "utils/addressHelpers";
import CardValue from "./CardValue";

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CakeStats = () => {
  const TranslateString = useI18n();
  const totalSupply = useTotalSupply();
  const burnedBalance = getBalanceNumber(useBurnedBalance(getHgctAddress()));
  const cakeSupply = totalSupply
    ? getBalanceNumber(totalSupply) - burnedBalance
    : 0;

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, "HGC Stats")}
        </Heading>
        <Row>
          <Text fontSize="14px">
            {TranslateString(536, "Total HGC Supply")}
          </Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">
            {TranslateString(538, "Total HGC Burned")}
          </Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        {/* <Row>
          <Text fontSize="14px">{TranslateString(540, 'New HGC/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={200} />
          </Row> */}
      </CardBody>
    </StyledCakeStats>
  );
};

export default CakeStats;
