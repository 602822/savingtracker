<template>
  <div>
    <h3>Money needed: {{ moneyNeeded }} Kr</h3>
    <h3>Money saved: {{ props.moneySavedTotal }} Kr</h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  moneySavedTotal: { type: Number },
});

const store = useStore();
const moneyNeeded = computed(() => store.state.moneyNeeded);
</script>
