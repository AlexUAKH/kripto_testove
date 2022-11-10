<script setup lang="ts">
import { useWalletStore } from "~~/store/wallet";

const open = ref(false);
const menu = ref();
const store = useWalletStore();

const show = () => {
  if (open.value) {
    open.value = false;
    return;
  }
  open.value = true;
  nextTick(() => menu.value.focus());
};
const select = (filter: string) => {
  const newFilter = filter === store.filter ? "" : filter;
  store.setFilter(newFilter);
  open.value = false;
};
</script>

<template>
  <div class="relative">
    <div
      class="uppercase flex justify-center items-center bg-aqua/20 w-[186px] h-8 select-none cursor-pointer"
      :class="[open ? 'rounded-t-md' : 'rounded-md']"
      @click="show"
    >
      <img
        class="w-[18px] h-[18px] mr-1.5"
        src="../assets/img/settings.png"
        alt="settings"
      />
      <div class="font-sans font-medium text-xs tracking-wider text-aqua">
        settings
      </div>
      <img class="w-2 h-1.5 ml-2.5" src="../assets/img/up.png" alt="menu" />
    </div>
    <div
      v-if="open"
      class="absolute z-10 top-8 left-0 right-0 bg-textdark shadow-wc rounded-b-md focus:outline-none"
      tabindex="-1"
      @keydown.esc="open = false"
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
  </div>
</template>
