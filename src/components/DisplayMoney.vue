<template>
  <div>
    <h3>Money needed: {{ moneyNeeded }} Kr</h3>
    <h3>Money saved: {{ moneySavedTotal }} Kr</h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const moneyNeeded = computed(() => {
  return store.state.moneyNeeded; //Both components have access to the moneyNeeded because of the shared Store, the computed property spots the change in the moneyNeeded and updates it, the localStore is used to make the data persistent
});


const moneySavedTotal = computed(() => store.state.moneySaved);
</script>
