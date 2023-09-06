<template>
  <div>
    <h3>Money needed: {{ moneyNeeded }} Kr</h3>
    <h3>Money saved: {{ props.moneySavedTotal }} Kr</h3>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
  moneySavedTotal: { type: Number },
});

const moneyNeeded = ref<number>(0);
</script>
