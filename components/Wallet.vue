<script setup lang="ts">
import { useWalletStore } from "~~/store/wallet";

const store = useWalletStore();
</script>

<template>
  <div
    class="w-[640px] max-w-[640px] min-w-[320px] md:shadow-wc bg-darkblue rounded mix-blend-normal"
  >
    <WalletHeader />

    <Loader v-if="store.isLoading" class="mx-auto" />
    <section
      v-else-if="Object.keys(store.wallet).length > 0"
      class="px-5 py-4 text-white"
    >
      <WalletCurencyList />
      <WalletBalance />
    </section>
    <h3 v-else>Your balance is empty</h3>
  </div>
</template>
