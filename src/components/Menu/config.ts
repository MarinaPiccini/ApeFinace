import { MenuEntry } from '../Pancakeswap/uikit/src'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://swap.apefinance.org/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.apefinance.org/#/pool',
      },
      // {
      //   label: 'LP Migration',
      //   href: 'https://v1exchange.pancakeswap.finance/#/migrate',
      // },
      // {
      //   label: 'V1 Liquidity (Old)',
      //   href: 'https://v1exchange.pancakeswap.finance/#/pool',
      // },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: '/prediction',
    // status: {
    //   text: 'BETA',
    //   color: 'warning',
    // },
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
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
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://apefinance.info',
      },
      {
        label: 'Tokens',
        href: 'https://bscscan.com/token/0x6f69B679dd51CDc50991DA0b2dc9712d57d4B095',
      },
      {
        label: 'Pairs',
        href: 'https://apefinance.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://apefinance.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.apefinance.org.finance/contact-us',
      },
      {
        label: 'Voiting',
        href: 'https://github.com/apefinance',
      },
      {
        label: 'Github',
        href: 'https://docs.apefinance.org',
      },
      {
        label: 'Docs',
        href: 'https://docs.apefinance.finance/',
      },
      {
        label: 'Blog',
        href: 'https://apefinance.medium.com/',
      },
      {
        label: 'Merch',
        href: 'https://apefinance.creator-spring.com/',
      },
    ],
  },
]

export default config
