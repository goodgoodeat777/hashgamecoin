import { PoolConfig, QuoteToken, PoolCategory } from "./types";

const pools: PoolConfig[] = [
  /*
  {
    sousId: 0,
    tokenName: 'SCC',
    tokenAddress: '0xc26EaFC627624baDf990f8d30116892eD204DB51',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xc26EaFC627624baDf990f8d30116892eD204DB51',  // token address
    contractAddress: {
      97: '',
      56: '0x1080450b1e26Df071c613d916055b23e8FCc6Fca',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  
  {
    sousId: 1,
    tokenName: 'SHIBA',
    tokenAddress: '0x55d398326f99059fF775485246999027B3197955',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x55d398326f99059fF775485246999027B3197955',  // token address
    contractAddress: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',    
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 18,
  },
  */
  /*
  {
    sousId: 267,
    tokenName: 'HIGH',
    tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',   // token address
    stakingTokenName: QuoteToken.FORK,
    stakingLimit: 100,
    stakingTokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',  // token address
    contractAddress: {
      97: '',
      56: '0x60c4998C058BaC8042712B54E7e43b892Ab0B0c4',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '0.09756',
    sortOrder: 2,
    isFinished: false,
    tokenDecimals: 18,
    },
  */
  {
    sousId: 0,
    tokenName: "BigSmall",
    tokenAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // token address
    stakingTokenName: QuoteToken.BUSD,
    stakingTokenAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // token address
    contractAddress: {
      97: "",
      56: "0xe9e7cea3dedca5984780bafc599bd69add087d56", /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: "/",
    harvest: true,
    tokenPerBlock: "10",
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },

  {
    sousId: 1,
    tokenName: "NiuNiu",
    tokenAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // token address
    stakingTokenName: QuoteToken.BUSD,
    stakingTokenAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // token address
    contractAddress: {
      97: "",
      56: "0xe9e7cea3dedca5984780bafc599bd69add087d56", /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: "/",
    harvest: true,
    tokenPerBlock: "10",
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
];

export default pools;
