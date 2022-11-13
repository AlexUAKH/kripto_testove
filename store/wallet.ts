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
    isLoading: (state) => state.loading,
    getFilter: (state) => state.filter,
    getBalance: (state) => state.balance,
    getBalanceInCurrentCurency: (state): Balance | null => {
      if (!Object.keys(state.wallet).length) return null;
      const balance = state.wallet[state.currency as Currencies];
      if (!balance) return null;
      delete balance.currency;

      const formated = Object.fromEntries(
        Object.keys(balance).map((key) => {
          const bal = balance[key as Currencies];
          if (!bal) return [key, null];
          const isFiat = state.currencies[key as Currencies]?.fiat;
          const rateToCurrentCurrency =
            state.currencies[state.currency as Currencies]?.rate[
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
              converted: state.currencies[state.currency as Currencies]?.fiat
                ? formatFiat(converted)
                : formatCripto(converted),
            },
          ];
        })
      );

      if (state.filter === "fiat") {
        return Object.keys(formated)
          .filter((cur) => state.currencies[cur as Currencies]?.fiat)
          .reduce((acc, cur) => {
            acc[cur] = formated[cur as Currencies];
            return acc;
          }, {} as any);
      }

      return formated;
    },
    getTotal: (state) => state.total,
  },
  actions: {
    setFilter(filter: string) {
      this.filter = filter;
    },
    setCurrency(currency: string) {
      this.currency = currency;
    },
    async fetchBalance() {
      this.loading = true;
      try {
        this.wallet = await getUserBalance();
        this.currencies = getCurrencies();
        // this.formatBalance()
      } catch (error) {
        this.error = "Somthing went wrong";
      } finally {
        this.loading = false;
      }
    },
    formatBalance(balance: Balance, state: IState) {
      return Object.fromEntries(
        Object.keys(balance).map((key) => {
          const bal = balance[key as Currencies];
          if (!bal) return [key, null];
          const isFiat = state.currencies[key as Currencies]?.fiat;
          const rateToCurrentCurrency =
            state.currencies[state.currency as Currencies]?.rate[
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
              converted: state.currencies[state.currency as Currencies]?.fiat
                ? formatFiat(converted)
                : formatCripto(converted),
            },
          ];
        })
      );
    },
  },
});
