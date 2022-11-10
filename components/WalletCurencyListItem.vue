<script setup lang="ts">
import WalletListItemIcon from "./WalletListItemIcon.vue";
import WalletWithdrawBtn from "./WalletWithdrawBtn.vue";
</script>

<template>
  <div
    class="flex justify-between pb-3.5 border-b border-b-primary/20 border-dashed last-of-type:border-none rounded"
  >
    <div class="">
      <div class="flex items-center">
        <WalletListItemIcon name="euro" color="textdark" />
        <div class="ml-1.5 font-raleway font-medium tracking-wide">
          Dollar <span class="text-textblur">(USD)</span>
        </div>
      </div>
      <div class="flex flex-col gap-2.5 mt-2.5 sm:flex-row">
        <WalletWithdrawBtn />
        <WalletDepositBtn />
      </div>
    </div>
    <div class="flex flex-col items-end justify-center text-sm">
      <div class="mb-1.5">Bcero: 0.00001 EUR</div>
      <div class="mb-1.5">B заявках: 0.00000 EUR</div>
      <div class="text-primary">1.98 EUR</div>
    </div>
  </div>
</template>
