<script setup lang="ts">
const props = defineProps(["width", "height"]);
const style = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
}));
</script>

<template>
  <button :style="style" class="uppercase hover:opacity-60">
    <slot />
  </button>
</template>
