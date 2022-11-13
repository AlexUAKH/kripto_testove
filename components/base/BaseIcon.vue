<script setup>
import { computed } from "vue";
import { icons } from "../../icons";
const props = defineProps(["name", "size", "color"]);
const iconSize = computed(() => (props.size ? `${props.size}px` : "16"));
const path = computed(() => icons[props.name]);
const classes = computed(() => `fill-${props.color}`);
console.log("na: ", props.name);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    data-testid="base-icon"
    viewBox="0 0 12 11"
    :class="classes"
    :style="{
      width: iconSize,
      height: iconSize,
      fill: '#2D4D70',
    }"
    v-html="path"
  ></svg>
</template>
