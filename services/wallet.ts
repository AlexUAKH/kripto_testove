import { Wallet } from "~~/types/balance";

export const getUserBalance = (): Promise<Wallet> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(res), 1500);
  });
};

export const getCurrencies = (): typeof currencies => {
  return currencies;
};

export type Currencies = keyof typeof currencies;

const currencies = {
  USDT: {
    title: "Tether",
    fiat: false,
    rate: {
      USDT: 1,
      EUR: 0.96,
      RSD: 112.36,
      ETH: 0.000815,
      UAH: 37.04,
      USD: 1,
      BNB: 0.0036,
      LTC: 0.0174,
      BTC: 0.0000602,
      RUB: 58.82,
    },
  },
  EUR: {
    title: "Euro",
    fiat: true,
    rate: {
      USDT: 1.042,
      EUR: 1,
      RSD: 117.32,
      ETH: 0.00084,
      UAH: 37.96,
      USD: 1.04,
      BNB: 0.0037,
      LTC: 0.018,
      BTC: 0.000063,
      RUB: 62.74,
    },
  },
  RSD: {
    title: "Serbian Dinar",
    fiat: true,
    rate: {
      USDT: 0.0089,
      EUR: 0.0085,
      RSD: 1,
      ETH: 0.0000072,
      UAH: 0.32,
      USD: 0.0088,
      BNB: 0.000032,
      LTC: 0.00015,
      BTC: 0.0000005344,
      RUB: 0.54,
    },
  },
  ETH: {
    title: "Ethereum",
    fiat: false,
    rate: {
      USDT: 1227.28,
      EUR: 1190.48,
      RSD: 138888.9,
      ETH: 1,
      UAH: 44971.16,
      USD: 1227.39,
      BNB: 4.4,
      LTC: 21.55,
      BTC: 0.074,
      RUB: 74240.96,
    },
  },
  UAH: {
    title: "Gryvna",
    fiat: true,
    rate: {
      USDT: 0.027,
      EUR: 0.026,
      RSD: 3.125,
      ETH: 0.00002224,
      UAH: 1,
      USD: 0.027,
      BNB: 0.000098,
      LTC: 0.00048,
      BTC: 0.0000017,
      RUB: 1.651,
    },
  },
  USD: {
    title: "Dollar",
    fiat: true,
    rate: {
      USDT: 1,
      EUR: 0.96,
      RSD: 113.64,
      ETH: 0.000815,
      UAH: 37.04,
      USD: 1,
      BNB: 0.0036,
      LTC: 0.018,
      BTC: 0.00006,
      RUB: 60.55,
    },
  },
  BNB: {
    title: "Binance Coin",
    fiat: false,
    rate: {
      USDT: 277.61,
      EUR: 270.27,
      RSD: 31250,
      ETH: 0.227,
      UAH: 10204.1,
      USD: 277.78,
      BNB: 1,
      LTC: 4.9,
      BTC: 0.017,
      RUB: 16859.73,
    },
  },
  LTC: {
    title: "Litecoin",
    fiat: false,
    rate: {
      USDT: 57.33,
      EUR: 55.56,
      RSD: 6666.67,
      ETH: 0.0464,
      UAH: 2083.33,
      USD: 55.56,
      BNB: 0.204,
      LTC: 1,
      BTC: 0.0034,
      RUB: 3444.08,
    },
  },
  BTC: {
    title: "Bitcoin",
    fiat: false,
    rate: {
      USDT: 16608.78,
      EUR: 15873.02,
      RSD: 1871257.48,
      ETH: 13.51,
      UAH: 588235.29,
      USD: 16666.67,
      BNB: 58.82,
      LTC: 294.12,
      BTC: 1,
      RUB: 1002005.62,
    },
  },

  RUB: {
    title: "Rubl",
    fiat: true,
    rate: {
      USDT: 0.017,
      EUR: 0.016,
      RSD: 1.85,
      ETH: 0.0000135,
      UAH: 0.61,
      USD: 0.0165,
      BNB: 0.0000593,
      LTC: 0.00029,
      BTC: 0.000000998,
      RUB: 1,
    },
  },
};

const res = {
  USDT: {
    ETH: {
      total: 0,
      reserved: 0,
    },
    RSD: {
      total: 0,
      reserved: 0,
    },
    EUR: {
      total: 489.98213165,
      reserved: 387.95361152,
    },
    RUB: {
      total: 0,
      reserved: 0,
    },
    USDT: {
      total: 491.30371146,
      reserved: 389,
    },
    USD: {
      total: 467.90829663,
      reserved: 370.47619048,
    },
    currency: "USDT",
    UAH: {
      total: 19207.27294767,
      reserved: 15207.7605,
    },
    BTC: {
      total: 0.02351803,
      reserved: 0.01862089,
    },
    LTC: {
      total: 8.76076518,
      reserved: 6.93651926,
    },
  },
  EUR: {
    ETH: {
      total: 0.10081536,
      reserved: 0.01263165,
    },
    EUR: {
      total: 160.82059226,
      reserved: 20.15,
    },
    RUB: {
      total: 0,
      reserved: 0,
    },
    USDT: {
      total: 160.15683826,
      reserved: 20.06683501,
    },
    USD: {
      total: 155.10615576,
      reserved: 19.43401025,
    },
    currency: "EUR",
    UAH: {
      total: 0,
      reserved: 0,
    },
    BTC: {
      total: 0.00779523,
      reserved: 0.0009767,
    },
    LTC: {
      total: 0,
      reserved: 0,
    },
  },
  RSD: {
    ETH: {
      total: 0,
      reserved: 0,
    },
    RSD: {
      total: 0,
      reserved: 0,
    },
    USDT: {
      total: 0,
      reserved: 0,
    },
    USD: {
      total: 0,
      reserved: 0,
    },
    currency: "RSD",
    BTC: {
      total: 0,
      reserved: 0,
    },
  },
  ETH: {
    USDT: {
      total: 0,
      reserved: 0,
    },
    RSD: {
      total: 0,
      reserved: 0,
    },
    EUR: {
      total: 42.72869174,
      reserved: 42.72714441,
    },
    RUB: {
      total: 0,
      reserved: 0,
    },
    ETH: {
      total: 0.02678597,
      reserved: 0.026785,
    },
    USD: {
      total: 42.83853396,
      reserved: 42.83698265,
    },
    currency: "ETH",
    UAH: {
      total: 1666.41897109,
      reserved: 1666.35862509,
    },
    BTC: {
      total: 0.00207136,
      reserved: 0.00207128,
    },
    LTC: {
      total: 0,
      reserved: 0,
    },
  },
  UAH: {
    ETH: {
      total: 0.02191351,
      reserved: 0,
    },
    EUR: {
      total: 0,
      reserved: 0,
    },
    RUB: {
      total: 0,
      reserved: 0,
    },
    USDT: {
      total: 35.04628173,
      reserved: 0,
    },
    USD: {
      total: 34.76305984,
      reserved: 0,
    },
    currency: "UAH",
    UAH: {
      total: 1380.8235,
      reserved: 0,
    },
    BTC: {
      total: 0.00169439,
      reserved: 0,
    },
    LTC: {
      total: 0,
      reserved: 0,
    },
  },
  USD: {
    ETH: {
      total: 0.24483767,
      reserved: 0.08875758,
    },
    RSD: {
      total: 0,
      reserved: 0,
    },
    EUR: {
      total: 390.56486769,
      reserved: 141.58602622,
    },
    RUB: {
      total: 0,
      reserved: 0,
    },
    USDT: {
      total: 391.56888889,
      reserved: 141.95,
    },
    USD: {
      total: 391.56888889,
      reserved: 141.95,
    },
    currency: "USD",
    UAH: {
      total: 15280.19275115,
      reserved: 5539.31485,
    },
    BTC: {
      total: 0.01893144,
      reserved: 0.00686295,
    },
    LTC: {
      total: 0,
      reserved: 0,
    },
  },
  BNB: {
    USDT: {
      total: 0,
      reserved: 0,
    },
    RSD: {
      total: 0,
      reserved: 0,
    },
    currency: "BNB",
    EUR: {
      total: 0,
      reserved: 0,
    },
    BNB: {
      total: 0,
      reserved: 0,
    },
  },
  LTC: {
    ETH: {
      total: 0,
      reserved: 0,
    },
    EUR: {
      total: 0,
      reserved: 0,
    },
    RUB: {
      total: 0,
      reserved: 0,
    },
    USDT: {
      total: 0,
      reserved: 0,
    },
    USD: {
      total: 0,
      reserved: 0,
    },
    currency: "LTC",
    UAH: {
      total: 0,
      reserved: 0,
    },
    BTC: {
      total: 0,
      reserved: 0,
    },
    LTC: {
      total: 0,
      reserved: 0,
    },
  },
  BTC: {
    ETH: {
      total: 0.00472631,
      reserved: 0,
    },
    RSD: {
      total: 0,
      reserved: 0,
    },
    EUR: {
      total: 7.54011946,
      reserved: 0,
    },
    RUB: {
      total: 0,
      reserved: 0,
    },
    USDT: {
      total: 7.559225,
      reserved: 0,
    },
    BTC: {
      total: 0.00036549,
      reserved: 0,
    },
    currency: "BTC",
    UAH: {
      total: 294.05385233,
      reserved: 0,
    },
    USD: {
      total: 0,
      reserved: 0,
    },
    LTC: {
      total: 0,
      reserved: 0,
    },
  },
};
