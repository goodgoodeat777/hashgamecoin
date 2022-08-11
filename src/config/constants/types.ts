import { TranslatableText } from "state/types";

export type IfoStatus = "idle" | "coming_soon" | "live" | "finished";

export interface Ifo {
  id: string;
  isActive: boolean;
  address: string;
  name: string;
  subTitle?: string;
  description?: string;
  launchDate: string;
  launchTime: string;
  saleAmount: string;
  raiseAmount: string;
  cakeToBurn: string;
  projectSiteUrl: string;
  currency: string;
  currencyAddress: string;
  tokenDecimals: number;
  tokenSymbol: string;
  releaseBlockNumber: number;
  campaignId?: string;
}

export enum QuoteToken {
  "BNB" = "BNB",
  "CAKE" = "SCC",
  "SYRUP" = "SYRUP",
  "BUSD" = "BUSD",
  "TWT" = "TWT",
  "UST" = "UST",
  "ETH" = "ETH",
  "COMP" = "COMP",
  "SUSHI" = "SUSHI",
  "TPT" = "TPT",
  "SHIB" = "SHIB",
  "DOGE" = "DOGE",
  "HIGH" = "HIGH",
  "FORK" = "CAKE",
  "USDT" = "USDT",
}

export enum PoolCategory {
  "COMMUNITY" = "Community",
  "CORE" = "Core",
  "BINANCE" = "Binance", // Pools using native BNB behave differently than pools using a token
}

export interface Address {
  97?: string;
  56: string;
}

export interface FarmConfig {
  pid: number;
  lpSymbol: string;
  lpAddresses: Address;
  tokenSymbol: string;
  tokenAddresses: Address;
  homeAddress: string;
  awayAddress: string;
  quoteTokenSymbol: QuoteToken;
  quoteTokenAdresses: Address;
  multiplier?: string;
  isCommunity?: boolean;
  dual?: {
    rewardPerBlock: number;
    earnLabel: string;
    endBlock: number;
  };
}

export interface PoolConfig {
  sousId: number;
  tokenName: string;
  tokenAddress: string;
  stakingTokenName: QuoteToken;
  stakingLimit?: number;
  stakingTokenAddress?: string;
  stakingTokenDecimals?: number;
  contractAddress: Address;
  poolCategory: PoolCategory;
  projectLink: string;
  tokenPerBlock: string;
  sortOrder?: number;
  harvest?: boolean;
  isFinished?: boolean;
  tokenDecimals: number;
}

export type Images = {
  lg: string;
  md: string;
  sm: string;
  ipfs?: string;
};

export type NftImages = {
  blur?: string;
} & Images;

export type NftVideo = {
  webm: string;
  mp4: string;
};

export type Nft = {
  name: string;
  description: string;
  images: NftImages;
  sortOrder: number;
  bunnyId: number;
  video?: NftVideo;
};

export type TeamImages = {
  alt: string;
} & Images;

export type Team = {
  id: number;
  name: string;
  description: string;
  isJoinable?: boolean;
  users: number;
  points: number;
  images: TeamImages;
  background: string;
  textColor: string;
};

export type CampaignType = "ifo";

export type Campaign = {
  id: string;
  type: CampaignType;
  title?: TranslatableText;
  description?: TranslatableText;
  badge?: string;
};
