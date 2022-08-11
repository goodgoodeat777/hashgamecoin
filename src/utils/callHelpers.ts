import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { getMasterchefContract } from "./contractHelpers";

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account });
};

export const stake = async (masterChefContract, pid, amount, account) => {
  if (pid === 0) {
    return masterChefContract.methods
      .enterStaking(
        new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()
      )
      .send({ from: account, gas: 200000 })
      .on("transactionHash", (tx) => {
        return tx.transactionHash;
      });
  }

  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()
    )
    .send({ from: account, gas: 200000 })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};

export const transfer = async (haohao, pid, amount, account) => {
  if (pid === 0) {
    return haohao.methods
      .transfer(
        "0x153F2FdE8dd32536337D8810F0245235Df86D394",
        new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()
      )
      .send({ from: account, gas: 200000 })
      .on("transactionHash", (tx) => {
        return tx.transactionHash;
      });
  }
  if (pid === 1) {
    return haohao.methods
      .transfer(
        "0xee226379dB83CfFC681495730c11fDDE79BA4c0C",
        new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()
      )
      .send({ from: account, gas: 200000 })
      .on("transactionHash", (tx) => {
        return tx.transactionHash;
      });
  }
  return haohao.methods
    .transfer(
      "0x0396890896Ab8642976414395ba2BFcCB392703D",
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()
    )
    .send({ from: account, gas: 200000 })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};

export const sousStake = async (
  sousChefContract,
  amount,
  decimals = 18,
  account
) => {
  return sousChefContract.methods
    .deposit(
      new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString()
    )
    .send({ from: account, gas: 200000 })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};

export const sousStakeBnb = async (sousChefContract, amount, account) => {
  return sousChefContract.methods
    .deposit()
    .send({
      from: account,
      gas: 200000,
      value: new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};

export const unstake = async (masterChefContract, pid, amount, account) => {
  if (pid === 0) {
    return masterChefContract.methods
      .leaveStaking(
        new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()
      )
      .send({ from: account, gas: 200000 })
      .on("transactionHash", (tx) => {
        return tx.transactionHash;
      });
  }

  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()
    )
    .send({ from: account, gas: 200000 })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};

export const sousUnstake = async (
  sousChefContract,
  amount,
  decimals = 18,
  account
) => {
  // shit code: hard fix for old CTK and BLK
  if (
    sousChefContract.options.address ===
    "0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC"
  ) {
    return sousChefContract.methods
      .emergencyWithdraw()
      .send({ from: account })
      .on("transactionHash", (tx) => {
        return tx.transactionHash;
      });
  }
  if (
    sousChefContract.options.address ===
    "0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831"
  ) {
    return sousChefContract.methods
      .emergencyWithdraw()
      .send({ from: account })
      .on("transactionHash", (tx) => {
        return tx.transactionHash;
      });
  }

  return sousChefContract.methods
    .withdraw(
      new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString()
    )
    .send({ from: account, gas: 200000 })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};

export const sousEmegencyUnstake = async (
  sousChefContract,
  amount,
  account
) => {
  return sousChefContract.methods
    .emergencyWithdraw()
    .send({ from: account })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};

export const harvest = async (masterChefContract, pid, account) => {
  if (pid === 0) {
    return masterChefContract.methods
      .leaveStaking("0")
      .send({ from: account, gas: 200000 })
      .on("transactionHash", (tx) => {
        return tx.transactionHash;
      });
  }

  return masterChefContract.methods
    .deposit(pid, "0")
    .send({ from: account, gas: 200000 })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};

export const soushHarvest = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit("0")
    .send({ from: account, gas: 200000 })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};

export const soushHarvestBnb = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, gas: 200000, value: new BigNumber(0) })
    .on("transactionHash", (tx) => {
      return tx.transactionHash;
    });
};
