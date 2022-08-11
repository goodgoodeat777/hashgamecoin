import contracts from "./contracts";
import { FarmConfig, QuoteToken } from "./types";

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: "SCC",
    lpAddresses: {
      // home addr
      97: "",
      56: "0xac109C8025F272414fd9e2faA805a583708A017f",
    },
    tokenSymbol: "SYRUP",
    tokenAddresses: {
      // away addr
      97: "",
      56: "0xc26EaFC627624baDf990f8d30116892eD204DB51",
    },
    homeAddress: "0x153F2FdE8dd32536337D8810F0245235Df86D394",
    awayAddress: "0x0396890896Ab8642976414395ba2BFcCB392703D",
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: "NYY-BOS ",
    lpAddresses: {
      97: "",
      56: "0x41496D9e7F1364dab33433d28962745FAaF6a577", // lp address token-bnb
    },
    tokenSymbol: "SCC",
    tokenAddresses: {
      97: "",
      56: "0xf04bc5e9EB85374DDa27DD06FEbD1fe2e0CBdB16", // token address
    },
    homeAddress: "0x8Ec615aB2Df2f2504779A0627b26B044092BD6F0",
    awayAddress: "0x0396890896Ab8642976414395ba2BFcCB392703D",
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 2,
    lpSymbol: "USA-CA ",
    lpAddresses: {
      97: "",
      56: "0x4e4d71B17C5553DdEd4a7BE215d22506E855d29a", // lp address token-bnb
    },
    tokenSymbol: "SCC",
    tokenAddresses: {
      97: "",
      56: "0xb406D37d181Ba9eb06B86dC5311FE6Df7Bcc88e1", // token address
    },
    homeAddress: "0x153F2FdE8dd32536337D8810F0245235Df86D394",
    awayAddress: "0x0396890896Ab8642976414395ba2BFcCB392703D",
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  /*
  {
    pid: 3,
    lpSymbol: 'MICROSANTA-SCC ',
    lpAddresses: {
      97: '',
      56: '0xf04bc5e9EB85374DDa27DD06FEbD1fe2e0CBdB16',   // lp address token-bnb
    },
    tokenSymbol: 'SCC',
    tokenAddresses: {
      97: '',
      56: '0xc26EaFC627624baDf990f8d30116892eD204DB51', // token address
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  */
  {
    pid: 5,
    lpSymbol: "LAA-GS ",
    lpAddresses: {
      97: "",
      56: "0xb406D37d181Ba9eb06B86dC5311FE6Df7Bcc88e1", // lp address token-bnb
    },
    tokenSymbol: "SCC",
    tokenAddresses: {
      97: "",
      56: "0xc26EaFC627624baDf990f8d30116892eD204DB51", // token address
    },
    homeAddress: "0x153F2FdE8dd32536337D8810F0245235Df86D394",
    awayAddress: "0x0396890896Ab8642976414395ba2BFcCB392703D",
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  /*
  {
    pid: 7,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xac109C8025F272414fd9e2faA805a583708A017f',   // lp address token-bnb
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  */
];

export default farms;
