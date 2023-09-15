<template>
  <h1>Saving Tracker</h1>
  <DisplayMoney :moneySavedTotal="moneySavedTotal" />
  <ConfettiExplosion v-if="showConfetti"></ConfettiExplosion>
  <SavingGoal />
  <EditGoalModal @close="showModal = false" v-if="showModal" />
  <p>Money Saved Today:</p>
  <input v-model="moneySavedToday" />
  <button @click="saveMoney()">Save</button>
  <button @click="showModal = true">Edit Goal</button>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import EditGoalModal from "./components/EditGoalModal.vue";
import DisplayMoney from "./components/DisplayMoney.vue";
import SavingGoal from "./components/SavingGoal.vue";
import { useStore } from "vuex";
import ConfettiExplosion from "vue-confetti-explosion";

const showModal = ref<boolean>(false);
const moneySavedToday = ref<string | number>("");
const moneySavedTotal = computed(() => store.state.moneySaved);

const store = useStore();

const saveMoney = () => {
  console.log("Money Saved: ", moneySavedTotal);
  store.commit("addMoneySaved", Number(moneySavedToday.value));
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
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center children horizontally */
  justify-content: center; /* Center children vertically */
  height: 100vh; /* Take the full viewport height */
  margin-top: 100px;
}
input {
  margin-bottom: 10px;
}

button {
  margin-bottom: 10px;
}
</style>
