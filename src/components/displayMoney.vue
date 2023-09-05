<template>
  <div>
    <h3>Money needed: {{ moneyNeeded }}</h3>
    <h3>Money saved: {{ moneySaved }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const moneySaved = ref<number>(0);
const moneyNeeded = ref<number>(0);
</script>
