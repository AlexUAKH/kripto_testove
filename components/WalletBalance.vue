<script setup lang="ts">
import { useWalletStore } from "~~/store/wallet";

const store = useWalletStore();
</script>

<template>
  <section
    class="h-[60px] bg-primary/[0.06] rounded-sm flex flex-col justify-center items-center"
  >
    <div class="flex items-center text-[18px] text-primary tracking-wider">
      <img class="w-4 h-3.5 mr-1.5" src="../assets/img/coins.png" alt="coins" />
      {{ store.getTotal }}
      <WalletCurencySelector />
    </div>
    <div class="font-raleway font-semibold text-sm text-white">
      Total balance
    </div>
  </section>
</template>
