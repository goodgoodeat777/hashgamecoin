import { MenuEntry } from "@pancakeswap-libs/uikit";
import { ContextApi } from "contexts/Localization/types"; // new

const config: (t: ContextApi["t"]) => MenuEntry[] = (t) => [
  // const config: MenuEntry[] = [  // old

  {
    label: t("Home"),
    icon: "HomeIcon",
    href: "/",
  },

  /*
  {
    label: 'xxxxxx',
    icon: 'FarmIcon',
    items: [
      {
        label: 'Play',
        href: '/bigsmall',
      },
      {
        label: 'How To Play',
        href: 'https://dex.siacashcoin.com/#/pool',
      },
    ],
  },
  */

  {
    label: t("Hash Game"),
    icon: "PoolIcon",
    items: [
      {
        label: t("Play"),
        href: "/niuniu",
      },
      {
        label: t("How To Play"),
        href: "/",
      },
    ],
  },
  {
    label: t("Sports"),
    icon: "InfoIcon", // MoreIcon
    href: "/sports",
  },

  {
    label: t("Trade $HCG"),
    icon: "TradeIcon",
    href:
      "https://pancakeswap.finance/swap?outputCurrency=0x4e4d71B17C5553DdEd4a7BE215d22506E855d29a",
  },
  /*
      {
        label: 'Liquidity',
        href: 'https://dex.siacashcoin.com/#/pool',
      },
      */
  {
    label: t("Info"),
    icon: "IfoIcon",
    href: "https://fire81147.gitbook.io/hash-game-1/",
  },

  /*
  {
    label: 'LaunchPad',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Create Token ',
        href: 'https://createtoken.siacashcoin.com/',
      },
      {
        label: 'Safemoon Fork',
        href: 'https://createsafemoon.siacashcoin.com',
      },
    ],
  },
  {
    label: 'Win Tokens',
    icon: 'TicketIcon',
    items: [
      {
        label: 'Prediction',
        href: 'https://dogebets.siacashcoin.com/',
      },
      {
        label: 'CoinFlip',
        href: 'href:https://tokenpvp.com/tokens/0xc26EaFC627624baDf990f8d30116892eD204DB51',
      },
    ],
  },
  */

  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  //
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.siacashcoin.com',
  //     // },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.siacashcoin.com',
  //     },
  //     // {
  //     //   label: 'Blog',
  //     //   href: 'https://pancakeswap.medium.com',
  //     // },
  //   ],
  // },
];

export default config;
