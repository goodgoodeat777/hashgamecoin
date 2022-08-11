import { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { useWeb3React } from "@web3-react/core";
import {
  getBep20Contract,
  getCakeContract,
  getHgctContract,
  getHgctBusdLpContract,
} from "utils/contractHelpers";
import useWeb3 from "./useWeb3";
import useRefresh from "./useRefresh";

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0));
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress, web3);
      const res = await contract.methods.balanceOf(account).call();
      setBalance(new BigNumber(res));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, tokenAddress, web3, fastRefresh]);

  return balance;
};

export const useTotalSupply = () => {
  const { slowRefresh } = useRefresh();
  const [totalSupply, setTotalSupply] = useState<BigNumber>();

  useEffect(() => {
    async function fetchTotalSupply() {
      const cakeContract = getHgctContract();
      const supply = await cakeContract.methods.totalSupply().call();
      setTotalSupply(new BigNumber(supply));
    }

    fetchTotalSupply();
  }, [slowRefresh]);

  return totalSupply;
};

export const useBurnedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0));
  const { slowRefresh } = useRefresh();
  const web3 = useWeb3();

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress, web3);
      const res = await contract.methods
        .balanceOf("0x000000000000000000000000000000000000dEaD")
        .call();
      setBalance(new BigNumber(res));
    };

    fetchBalance();
  }, [web3, tokenAddress, slowRefresh]);

  return balance;
};

export const useGetReserves = () => {
  const { slowRefresh } = useRefresh();
  const [totalReserves, setGetReserves] = useState<BigNumber>();

  useEffect(() => {
    async function fetchGetReserves() {
      const HgctBusdLpContract = getHgctBusdLpContract();
      const {
        _reserve0,
        _reserve1,
      } = await HgctBusdLpContract.methods.getReserves().call();
      setGetReserves(new BigNumber(_reserve1));
    }

    fetchGetReserves();
  }, [slowRefresh]);

  return totalReserves;
};

export const useBetAddrBalance = (account1: string, tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0));
  const account = account1;
  const web3 = useWeb3();
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getBep20Contract(tokenAddress, web3);
      const res = await contract.methods.balanceOf(account).call();
      setBalance(new BigNumber(res));
    };

    if (account) {
      fetchBalance();
    }
  }, [account, tokenAddress, web3, fastRefresh]);

  return balance;
};

export default useTokenBalance;
