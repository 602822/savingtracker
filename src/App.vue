<template>
  <h1>Saving Tracker</h1>
  <DisplayMoney :moneySavedTotal="moneySavedTotal" />
  <SavingGoal/>
  <EditGoalModal @close="showModal = false" v-if="showModal" />
  <p>Money Saved Today:</p>
  <input v-model="moneySavedToday" />
  <button @click="saveMoney()">Save</button>
  <button @click="showModal = true">Edit Goal</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EditGoalModal from "./components/EditGoalModal.vue";
import DisplayMoney from "./components/DisplayMoney.vue";
import SavingGoal from "./components/SavingGoal.vue";

const showModal = ref<boolean>(false);
const moneySavedToday = ref<number>(0);
const moneySavedTotal = ref<number>(0);

const saveMoney = () => {
  moneySavedTotal.value += moneySavedToday.value;
  console.log("Money Saved: ", moneySavedTotal);
};
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
