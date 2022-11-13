<script setup lang="ts">
import { useClickOutside } from "~~/composable/clickOutside";
import { useWalletStore } from "~~/store/wallet";

const emits = defineEmits(["close"]);
const store = useWalletStore();
const menu = ref();

const close = () => {
  emits("close");
};
const select = (filter: string) => {
  const newFilter = filter === store.filter ? "" : filter;
  store.setFilter(newFilter);
  close();
};
onMounted(() => menu.value.focus());
useClickOutside(menu, close);
</script>

<template>
  <div
    class="absolute z-10 top-8 left-0 right-0 bg-textdark shadow-wc rounded-b-md focus:outline-none"
    tabindex="-1"
    @keydown.esc="close"
    ref="menu"
  >
    <div
      class="flex items-center py-2.5 px-3 cursor-pointer"
      :class="{ 'bg-aqua/40': store.filter === 'fiat' }"
      @click.stop="() => select('fiat')"
    >
      <img class="w-[12px] h-[7px]" src="../assets/img/show.png" alt="show" />
      <div class="ml-1.5 text-xs text-white">Show only Fiat</div>
    </div>
    <div>
      <div class="flex items-center py-2.5 px-3">
        <div class="ml-1.5 text-xs text-white">...</div>
      </div>
    </div>
  </div>
</template>
