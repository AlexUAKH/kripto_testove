<script setup lang="ts">
import { useWalletStore } from "~~/store/wallet";

const open = ref(false);
const store = useWalletStore();

const show = () => {
  if (open.value) {
    open.value = false;
    return;
  }
  open.value = true;
};
</script>

<template>
  <div class="relative">
    <div
      class="uppercase flex justify-center items-center bg-aqua/20 w-[186px] h-8 select-none cursor-pointer"
      :class="[open ? 'rounded-t-md' : 'rounded-md']"
      @click.stop="open = !open"
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
    <WalletSettingsMenu v-if="open" @close="open = false" />
  </div>
</template>
