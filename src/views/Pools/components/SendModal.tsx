import BigNumber from "bignumber.js";
import React, { useCallback, useMemo, useState } from "react";
import { Button, Modal } from "@pancakeswap-libs/uikit";
import ModalActions from "components/ModalActions";
import TokenInput from "../../../components/TokenInput";
import useI18n from "../../../hooks/useI18n";
import useWeb3 from "../../../hooks/useWeb3";
import useTokenBalance from "../../../hooks/useTokenBalance";
import { getFullDisplayBalance } from "../../../utils/formatBalance";

interface SendModalProps {
  max: BigNumber;
  onConfirm: (amount: string, decimals: number) => void;
  onDismiss?: () => void;
  tokenName?: string;
  addr?: string;
  stakingTokenDecimals?: number;
}

const SendModal: React.FC<SendModalProps> = ({
  max,
  onConfirm,
  onDismiss,
  tokenName = "",
  stakingTokenDecimals = 18,
}) => {
  const [val, setVal] = useState("");
  const [pendingTx, setPendingTx] = useState(false);
  const TranslateString = useI18n();
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max, stakingTokenDecimals);
  }, [max, stakingTokenDecimals]);

  const fullBalance1 = useTokenBalance(
    "0xe9e7cea3dedca5984780bafc599bd69add087d56"
  );
  const fullBalance2 = getFullDisplayBalance(fullBalance1);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value);
    },
    [setVal]
  );

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance2);
  }, [fullBalance2, setVal]);

  return (
    <Modal
      title={`${TranslateString(316, "BET")} ${tokenName} `}
      onDismiss={onDismiss}
    >
      <TokenInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance2}
        symbol={tokenName}
      />
      <ModalActions>
        <Button width="100%" variant="secondary" onClick={onDismiss}>
          {TranslateString(462, "Cancel")}
        </Button>
        <Button
          width="100%"
          disabled={
            pendingTx ||
            fullBalance2 === "0" ||
            val === "0" ||
            val > fullBalance2
          }
          onClick={async () => {
            setPendingTx(true);
            await onConfirm(val, stakingTokenDecimals);
            setPendingTx(false);
            onDismiss();
          }}
        >
          {pendingTx
            ? TranslateString(488, "Pending Confirmation")
            : TranslateString(464, "Confirm")}
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default SendModal;
