<script setup lang="ts">
import { useWalletStore } from "~~/store/wallet";

const curencySelectShow = ref(false);

const store = useWalletStore();

const toggle = () => {
  curencySelectShow.value = !curencySelectShow.value;
};

const close = () => {
  curencySelectShow.value = false;
};

const select = (curency: string): void => {
  store.setCurrency(curency);
  close();
};
</script>

<template>
  <div
    class="flex items-center relative ml-1.5 cursor-pointer select-none hover:text-primary/70"
    @click.stop="toggle"
  >
    {{ store.currency }}
    <img class="w-2 h-1 ml-0.5" src="../assets/img/doun.png" alt="" />
    <WalletCurencySelectorOptions
      v-if="curencySelectShow"
      :currencies="store.currencies"
      @select="select"
      @close="close"
    />
  </div>
</template>
