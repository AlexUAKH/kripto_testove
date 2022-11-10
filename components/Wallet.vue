<script setup lang="ts"></script>

<template>
  <div
    class="w-[640px] max-w-[640px] min-w-[320px] shadow-wc bg-darkblue rounded mix-blend-normal"
  >
    <WalletHeader />
    <div class="px-5 py-4 text-white">
      <WalletCurencyList />
      <WalletBalance />
    </div>
  </div>
</template>
