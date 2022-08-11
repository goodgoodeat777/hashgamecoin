import React, { useState, useCallback } from "react";
import BigNumber from "bignumber.js";
import styled from "styled-components";
import { provider as ProviderType } from "web3-core";
import { getAddress } from "utils/addressHelpers";
import { getBep20Contract } from "utils/contractHelpers";
import { Button, Flex, Text } from "@pancakeswap-libs/uikit";
import { Farm } from "state/types";
import { useFarmFromSymbol, useFarmUser } from "state/hooks";
import { useTranslation } from "contexts/Localization";
import useWeb3 from "hooks/useWeb3";
import { useApprove } from "hooks/useApprove";
import UnlockButton from "components/UnlockButton";
import SendAction from "./SendAction";
import StakeAction from "./StakeAction";
import HarvestAction from "./HarvestAction";

const Action = styled.div`
  padding-top: 16px;
`;
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber;
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue;
  provider?: ProviderType;
  account?: string;
  addLiquidityUrl?: string;
}

const CardActions: React.FC<FarmCardActionsProps> = ({
  farm,
  account,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation();
  const [requestedApproval, setRequestedApproval] = useState(false);
  const { pid, lpAddresses } = useFarmFromSymbol(farm.lpSymbol);
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid);
  const lpAddress = getAddress(lpAddresses);
  const lpName = farm.lpSymbol.toUpperCase();
  const isApproved = account && allowance && allowance.isGreaterThan(0);
  const web3 = useWeb3();

  const lpContract = getBep20Contract(lpAddress, web3);

  const { onApprove } = useApprove(lpContract);

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true);
      await onApprove();
      setRequestedApproval(false);
    } catch (e) {
      console.error(e);
    }
  }, [onApprove]);

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <SendAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
      />
    ) : (
      <Button
        mt="8px"
        width="100%"
        disabled={requestedApproval}
        onClick={handleApprove}
      >
        {t("Approve Contract")}
      </Button>
    );
  };

  return (
    <Action>
      <Flex>
        <Text
          bold
          textTransform="uppercase"
          color="secondary"
          fontSize="12px"
          pr="3px"
        >
          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
          SCC
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t("Earned")}
        </Text>
      </Flex>
      {/*
      <HarvestAction earnings={earnings} pid={pid} />
      */}
      <SendAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
      />
      <Flex>
        <Text
          bold
          textTransform="uppercase"
          color="secondary"
          fontSize="12px"
          pr="3px"
        >
          {lpName}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t("Staked")}
        </Text>
      </Flex>
      {/* {!account ? <UnlockButton mt="8px" width="100%" /> : renderApprovalOrStakeButton()} */}
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid + 1}
        addLiquidityUrl={addLiquidityUrl}
      />
    </Action>
  );
};

export default CardActions;
