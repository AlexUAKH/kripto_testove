import { Currencies } from "~~/services/wallet";

export type ICurrencies = {
  [P in Currencies]?: ICurrencyDescription;
};

interface ICurrencyDescription {
  title: string;
  fiat: boolean;
  rate: CurrencyRate;
}
type CurrencyRate = {
  [p in Currencies]: number;
};

export type Wallet = {
  [P in Currencies]?: Balance & { currency?: string };
};

export type Balance = {
  [P in Currencies]?: IBalanceOption;
};

interface IBalanceOption {
  total: number;
  reserved: number;
  converted?: string;
}

// USDT: {
//       ETH: {
//         total: 0,
//         reserved: 0,
//       },
//       RSD: {
//         total: 0,
//         reserved: 0,
//       },
//       EUR: {
//         total: 489.98213165,
//         reserved: 387.95361152,
//       },
//       RUB: {
//         total: 0,
//         reserved: 0,
//       },
//       USDT: {
//         total: 491.30371146,
//         reserved: 389,
//       },
//       USD: {
//         total: 467.90829663,
//         reserved: 370.47619048,
//       },
//       currency: "USDT",
//       UAH: {
//         total: 19207.27294767,
//         reserved: 15207.7605,
//       },
//       BTC: {
//         total: 0.02351803,
//         reserved: 0.01862089,
//       },
//       LTC: {
//         total: 8.76076518,
//         reserved: 6.93651926,
//       },
//     },
