<template>
  <h1>Saving Tracker</h1>
  <DisplayMoney />
  <EditGoalModal @close="showModal = false" v-if="showModal"></EditGoalModal>
  <button @click="showModal = true">Edit Goal</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EditGoalModal from "./components/EditGoalModal.vue";
import DisplayMoney from "./components/DisplayMoney.vue";

const showModal = ref<boolean>(false);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
