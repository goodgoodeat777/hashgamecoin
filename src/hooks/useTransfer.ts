import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { useDispatch } from "react-redux";
import {
  fetchFarmUserDataAsync,
  updateUserStakedBalance,
  updateUserBalance,
} from "state/actions";
import { transfer } from "utils/callHelpers";
import { useHaoHaoContract, useBusdContract } from "./useContract";

export const useTransfer = (sousId: number) => {
  const dispatch = useDispatch();
  const { account } = useWeb3React();
  const haohaoContract = useHaoHaoContract(); // usdt
  const busdContract = useBusdContract();

  const handleSend = useCallback(
    async (amount: string) => {
      const txHash = await transfer(busdContract, sousId, amount, account);
      dispatch(fetchFarmUserDataAsync(account));
      console.info(txHash);
    },
    [account, dispatch, busdContract, sousId]
  );

  return { onSend: handleSend };
};

export const useATransfer = (sousId: number) => {
  const dispatch = useDispatch();
  const { account } = useWeb3React();
  const haohaoContract = useHaoHaoContract(); // usdt
  const busdContract = useBusdContract();

  const handleSend = useCallback(
    async (amount: string) => {
      const txHash = await transfer(busdContract, sousId, amount, account);
      dispatch(fetchFarmUserDataAsync(account));
      console.info(txHash);
    },
    [account, dispatch, busdContract, sousId]
  );

  return { onSend: handleSend };
};

export default useTransfer;
