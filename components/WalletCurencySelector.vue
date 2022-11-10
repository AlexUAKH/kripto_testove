<script setup lang="ts">
const curencySelectShow = ref(false);

const select = (curency: string): void => {
  console.log("cur: ", curency);
  curencySelectShow.value = false;
};
</script>

<template>
  <div
    class="flex items-center relative ml-1.5 cursor-pointer select-none hover:text-primary/70"
    @click="curencySelectShow = !curencySelectShow"
  >
    EUR
    <img class="w-2 h-1 ml-0.5" src="../assets/img/doun.png" alt="" />
    <div
      v-if="curencySelectShow"
      class="absolute right-0 bottom-6 bg-primary text-white px-1 py-0 z-10"
    >
      <div class="uppercase hover:opacity-70" @click.stop="() => select('usd')">
        usd
      </div>
      <div class="uppercase">uah</div>
    </div>
  </div>
</template>
