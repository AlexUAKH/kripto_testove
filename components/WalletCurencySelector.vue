<script setup lang="ts">
import { useWalletStore } from "~~/store/wallet";

const curencySelectShow = ref(false);
const store = useWalletStore();

const select = (curency: string): void => {
  store.setCurrency(curency);
  curencySelectShow.value = false;
};
</script>

<template>
  <div
    class="flex items-center relative ml-1.5 cursor-pointer select-none hover:text-primary/70"
    @click="curencySelectShow = !curencySelectShow"
  >
    {{ store.currency }}
    <img class="w-2 h-1 ml-0.5" src="../assets/img/doun.png" alt="" />
    <div
      v-if="curencySelectShow"
      class="absolute right-0 bottom-6 bg-primary text-white px-1 py-0 z-10"
    >
      <div
        v-for="currency in Object.keys(store.currencies)"
        :key="currency"
        class="uppercase hover:opacity-70"
        @click.stop="() => select(currency)"
      >
        {{ currency }}
      </div>
    </div>
  </div>
</template>
