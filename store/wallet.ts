import { defineStore } from "pinia";

interface IState {
  wallet: IWalletInfo[];
  filter: string;
}

export const useWalletStore = defineStore("wallet", {
  state: (): IState => {
    return {
      wallet: [{ eur: 100 }],
      filter: "",
    };
  },
  getters: {
    getFilter: (state) => state.filter,
  },
  actions: {
    setFilter(filter: string) {
      this.filter = filter;
    },

    add(n: number) {
      this.wallet[0].eur += n;
    },
  },
});

interface IWalletInfo {
  eur: number;
}
// interface ICurency {

// }

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
