<script setup lang="ts">
import { Currencies } from "~~/services/wallet";
import { useWalletStore } from "~~/store/wallet";
import WalletListItemIcon from "./WalletListItemIcon.vue";
import WalletWithdrawBtn from "./WalletWithdrawBtn.vue";

defineProps(["currency", "title"]);
const store = useWalletStore();

const withdraw = (val: string) => {
  console.log(`withdraw ${val}`);
};
const deposit = (val: string) => {
  console.log(`deposit ${val}`);
};
</script>

<template>
  <div
    class="flex justify-between pb-3.5 border-b border-b-primary/20 border-dashed last-of-type:border-none rounded"
  >
    <div>
      <div class="flex items-center">
        <WalletListItemIcon :name="title.toLowerCase()" color="textdark" />
        <div class="ml-1.5 font-raleway font-medium tracking-wide">
          {{ store.currencies[title as Currencies]?.title }}
          <span class="text-textblur">({{ title }})</span>
        </div>
      </div>
      <div class="flex flex-col gap-2.5 mt-2.5 sm:flex-row">
        <WalletWithdrawBtn @click="() => withdraw(title)" />
        <WalletDepositBtn @click="() => deposit(title)" />
      </div>
    </div>
    <div class="flex flex-col items-end justify-center text-sm">
      <div class="mb-1.5">
        Bcero: {{ currency.total }} <span class="uppercase">{{ title }}</span>
      </div>
      <div class="mb-1.5">
        B заявках: {{ currency.reserved }}
        <span class="uppercase">{{ title }}</span>
      </div>
      <div class="text-primary">
        {{ currency.converted || "-" }}
        <span class="uppercase">{{ store.currency }}</span>
      </div>
    </div>
  </div>
</template>
