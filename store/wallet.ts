import { defineStore } from "pinia";
import { formatCripto, formatFiat } from "~~/helpers/formatCurrency";
import { Balance, ICurrencies, Wallet } from "~~/types/balance";
import { Currencies, getCurrencies, getUserBalance } from "../services/wallet";

interface IState {
  filter: string;
  currencies: ICurrencies;
  currency: string;
  balance: Balance;
  total: number;
  wallet: Wallet;
  loading: boolean;
  error: string;
}

export const useWalletStore = defineStore("wallet", {
  state: (): IState => {
    return {
      filter: "",
      currencies: {} as ICurrencies,
      currency: "EUR",
      balance: {} as Balance,
      total: 0,
      wallet: {} as Wallet,
      loading: true,
      error: "",
    };
  },
  getters: {
    isLoading: (state): boolean => state.loading,
    getFilter: (state): string => state.filter,
    getBalance: (state): Balance => state.balance,
    getFilteredBalance: (state): Balance => {
      if (state.filter === "fiat") {
        return Object.keys(state.balance)
          .filter((cur) => state.currencies[cur as Currencies]?.fiat)
          .reduce((acc, cur) => {
            acc[cur] = state.balance[cur as Currencies];
            return acc;
          }, {} as any);
      } else return state.balance;
    },
    getTotal(state): string {
      const total = Object.values(this.getFilteredBalance).reduce(
        (acc: number, val) => {
          return (acc += Number(val.converted) || 0);
        },
        0
      );

      return state.currencies[state.currency as Currencies]?.fiat
        ? formatFiat(total)
        : formatCripto(total);
    },
  },
  actions: {
    setFilter(filter: string) {
      this.filter = filter;
    },
    setCurrency(currency: string) {
      this.currency = currency;
      this.formatBalance();
    },
    async fetchBalance() {
      this.loading = true;
      try {
        this.wallet = await getUserBalance();
        this.currencies = getCurrencies();
        this.formatBalance();
      } catch (error) {
        this.error = "Somthing went wrong";
      } finally {
        this.loading = false;
      }
    },
    formatBalance() {
      if (!Object.keys(this.wallet).length) return null;
      const balance = this.wallet[this.currency as Currencies];
      if (!balance) return null;
      delete balance.currency;

      this.balance = Object.fromEntries(
        Object.keys(balance).map((key) => {
          const bal = balance[key as Currencies];
          if (!bal) return [key, null];
          const isFiat = this.currencies[key as Currencies]?.fiat;
          const rateToCurrentCurrency =
            this.currencies[this.currency as Currencies]?.rate[
              key as Currencies
            ] || 1;
          const converted = bal.total / rateToCurrentCurrency;
          return [
            key,
            {
              total: isFiat ? formatFiat(bal.total) : formatCripto(bal.total),
              reserved: isFiat
                ? formatFiat(bal.reserved)
                : formatCripto(bal.reserved),
              converted: this.currencies[this.currency as Currencies]?.fiat
                ? formatFiat(converted)
                : formatCripto(converted),
            },
          ];
        })
      );
    },
  },
});
