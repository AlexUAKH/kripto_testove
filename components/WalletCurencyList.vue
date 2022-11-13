<script setup lang="ts">
import { useWalletStore } from "~~/store/wallet";

const store = useWalletStore();
console.log("list");
</script>

<template>
  <Loader v-if="store.isLoading" />
  <template v-else-if="store.getBalanceInCurrentCurency">
    <WalletCurencyListItem
      class="mb-2 last-of-type:mb-0"
      v-for="(currency, title) of store.getBalanceInCurrentCurency"
      :key="title"
      :currency="currency"
      :title="title"
    />
  </template>
  <div v-else class="">error</div>
</template>
