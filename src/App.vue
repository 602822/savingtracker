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
  <div class="moneySaved">
    <input v-model="moneySavedToday" />
    <button @click="saveMoney()">Save</button>
    <button @click="resetMoneySaved()">Reset</button>
  </div>
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
const moneySavedTotal = computed(
  () => store.state.moneySaved || localStorage.getItem("moneySaved")
);
const showConfetti = computed(() => store.state.showConfetti);

const store = useStore();

const saveMoney = () => {
  console.log("Money Saved: ", moneySavedTotal);
  store.commit("addMoneySaved", Number(moneySavedToday.value));
  localStorage.setItem("moneySaved", store.state.moneySaved.toString());
};

const resetMoneySaved = () => {
  store.commit("resetMoneySaved");
  localStorage.setItem("moneySaved", "0");
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center children horizontally */
  justify-content: center; /* Center children vertically */
  height: 100vh; /* Take the full viewport height */
}
input {
  margin-bottom: 10px;
}

button {
  margin-bottom: 10px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  width: 80px;
  height: 20px;
}

button:hover {
  cursor: pointer;
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

.moneySaved {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
