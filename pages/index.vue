<script lang="ts" setup>
import { useWalletStore } from "~~/store/wallet";

const store = useWalletStore();

onMounted(() => {
  store.fetchBalance();
});
</script>

<template>
  <div class="flex justify-center items-center overflow-auto md:py-4">
    <Wallet />
  </div>
</template>
