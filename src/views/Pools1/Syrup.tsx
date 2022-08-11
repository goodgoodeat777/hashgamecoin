import React, { useState, useMemo } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Heading } from "@pancakeswap-libs/uikit";
import orderBy from "lodash/orderBy";
import partition from "lodash/partition";
import useI18n from "hooks/useI18n";
import { usePools, useBlock } from "state/hooks";
import FlexLayout from "components/layout/Flex";
import Page from "components/layout/Page";
import Coming from "./components/Coming";
import PoolCard from "./components/PoolCard";
import PoolTabButtons from "./components/PoolTabButtons";
import Divider from "./components/Divider";

const Farm: React.FC = () => {
  const { path } = useRouteMatch();
  const TranslateString = useI18n();
  const { account } = useWeb3React();
  const pools = usePools(account);
  const { blockNumber } = useBlock();
  const [stackedOnly, setStackedOnly] = useState(false);

  const [finishedPools, openPools] = useMemo(
    () =>
      partition(
        pools,
        (pool) => pool.isFinished || blockNumber > pool.endBlock
      ),
    [blockNumber, pools]
  );
  const stackedOnlyPools = useMemo(
    () =>
      openPools.filter(
        (pool) =>
          pool.userData &&
          new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)
      ),
    [openPools]
  );

  return (
    <Page>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px">
            {TranslateString(738, "HASH BIg SMALL")}
          </Heading>
          <ul>
            <li>{TranslateString(580, "111.")}</li>
            <li>{TranslateString(486, "456.")}</li>
            <li>{TranslateString(406, "789.")}</li>
          </ul>
        </div>
        <img
          src="/images/syrup.png"
          alt="SYRUP POOL icon"
          width={410}
          height={191}
        />
      </Hero>

      <Divider />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {stackedOnly
              ? orderBy(stackedOnlyPools, ["sortOrder"]).map((pool) => (
                  <PoolCard key={pool.sousId} pool={pool} />
                ))
              : orderBy(openPools, ["sortOrder"]).map((pool) => (
                  <PoolCard key={pool.sousId} pool={pool} />
                ))}
          </>
        </Route>
      </FlexLayout>
    </Page>
  );
};

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`;

export default Farm;
