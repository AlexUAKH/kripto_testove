<script setup lang="ts">
import { useClickOutside } from "~~/composable/clickOutside";

defineProps(["currencies"]);
const emits = defineEmits(["select", "close"]);
const menu = ref(null);
const close = () => {
  emits("close");
};
useClickOutside(menu, close);
</script>

<template>
  <nav
    ref="menu"
    class="absolute right-0 bottom-6 bg-primary text-white px-1 py-0 z-10"
  >
    <ul class="list-none">
      <li
        v-for="currency in Object.keys(currencies)"
        :key="currency"
        class="uppercase hover:opacity-70 text-center"
        @click.stop="$emit('select', currency)"
      >
        {{ currency }}
      </li>
    </ul>
  </nav>
</template>
