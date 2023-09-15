<template>
  <div class="header">
    <h1>Saving Tracker</h1>
    <img src="./assets/piggyBankIcon.png" alt="piggybankIcon" class="icon" />
  </div>
  <DisplayMoney :moneySavedTotal="moneySavedTotal" />
  <ConfettiExplosion :duration="5000" v-if="showConfetti"></ConfettiExplosion>
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
const showConfetti = computed(() => store.state.showConfetti);

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

img.icon {
  width: 50px;
  height: 50px;
}

.header {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
