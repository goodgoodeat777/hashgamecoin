import React from "react";
import styled from "styled-components";
import BigNumber from "bignumber.js";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  AddIcon,
  MinusIcon,
  useModal,
} from "@pancakeswap-libs/uikit";
import { useTranslation } from "contexts/Localization";
import useStake from "hooks/useStake";
import useUnstake from "hooks/useUnstake";
import useFarmTransfer from "hooks/useFarmTransfer";
import useTokenBalance from "hooks/useTokenBalance";
import { getBalanceNumber } from "utils/formatBalance";
import DepositModal from "../DepositModal";
import WithdrawModal from "../WithdrawModal";
import SendModal from "../SendModal";

interface FarmCardActionsProps {
  stakedBalance?: BigNumber;
  tokenBalance?: BigNumber;
  tokenName?: string;
  pid?: number;
  addLiquidityUrl?: string;
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`;

const StakeAction: React.FC<FarmCardActionsProps> = ({
  stakedBalance,
  tokenBalance,
  tokenName,
  pid,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation();
  const { onStake } = useStake(pid);
  const { onUnstake } = useUnstake(pid);
  const { onSend } = useFarmTransfer(pid);

  const rawStakedBalance = getBalanceNumber(stakedBalance);
  const displayBalance = rawStakedBalance.toLocaleString();

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
      addLiquidityUrl={addLiquidityUrl}
    />
  );
  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />
  );
  const [onPresentSend] = useModal(
    <SendModal max={stakedBalance} onConfirm={onSend} tokenName={tokenName} />
  );

  const renderStakingButtons = () => {
    return rawStakedBalance === 0 ? (
      <Button onClick={onPresentSend}>{t("Home Team")}</Button>
    ) : (
      <IconButtonWrapper>
        <IconButton variant="tertiary" onClick={onPresentSend} mr="6px">
          <MinusIcon color="primary" width="14px" />
        </IconButton>
        <IconButton variant="tertiary" onClick={onPresentSend}>
          <AddIcon color="primary" width="14px" />
        </IconButton>
      </IconButtonWrapper>
    );
  };

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading color={rawStakedBalance === 0 ? "textDisabled" : "text"}>
        {displayBalance}
      </Heading>
      {renderStakingButtons()}
    </Flex>
  );
};

export default StakeAction;
