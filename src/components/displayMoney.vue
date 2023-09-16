<template>
  <div>
    <h3>Money needed: {{ moneyNeeded }} Kr</h3>
    <h3>Money saved: {{ props.moneySavedTotal }} Kr</h3>
    //Gets the value from the parent component (App)
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref, watch } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  moneySavedTotal: { type: Number },
});

const store = useStore();

const moneyNeeded = computed(() => {
  return store.state.moneyNeeded || localStorage.getItem("moneyNeeded" || "0"); //Both components have access to the moneyNeeded because of the shared Store, the computed property spots the change in the moneyNeeded and updates it, the localStore is used to make the data persistent
});
</script>
