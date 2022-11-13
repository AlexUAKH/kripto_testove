<script setup lang="ts">
import { useWalletStore } from "~~/store/wallet";

const store = useWalletStore();
</script>

<template>
  <Loader v-if="store.isLoading" />
  <template v-else-if="store.getFilteredBalance">
    <WalletCurencyListItem
      class="mb-2 last-of-type:mb-0"
      v-for="(currency, title) of store.getFilteredBalance"
      :key="title"
      :currency="currency"
      :title="title"
    />
  </template>
  <div v-else class="">error</div>
</template>
