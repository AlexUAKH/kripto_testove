<script setup lang="ts"></script>

<template>
  <div
    class="h-[60px] bg-primary/[0.06] rounded-sm flex flex-col justify-center items-center"
  >
    <div class="flex items-center text-[18px] text-primary tracking-wider">
      <img class="w-4 h-3.5 mr-1.5" src="../assets/img/coins.png" alt="coins" />
      0.0082243
      <WalletCurencySelector />
    </div>
    <div class="font-raleway font-semibold text-sm text-white">
      Total balance
    </div>
  </div>
</template>
