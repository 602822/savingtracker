<template>
  <div>
    <img v-if="imageUrl" :src="imageUrl" alt="User selected Image" />
    <img v-else src="../assets/noImage.jpg" alt="No image selected" />
    <p>
      Goal: <span class="saving-goal">{{ savingGoal }} </span>
    </p>

    <div class="progress-section">
      <ProgressBar :progress="progress" />
      <p class="progress-text">{{ progress }}%</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useStore } from "vuex";
import ProgressBar from "./ProgressBar.vue";

const store = useStore();

const savingGoal = computed(() => {
  return store.state.savingGoal;
});
const imageUrl = computed(() => store.state.selectedImageUrl);

const moneyNeeded = computed(() => store.state.moneyNeeded);
const moneySaved = computed(() => store.state.moneySaved);

const progress = computed(() => store.state.progress);

const calculateProgress = () => {
  store.commit(
    "setProgress",
    Math.round((moneySaved.value / moneyNeeded.value) * 100)
  );
};

watch([moneySaved, moneyNeeded], calculateProgress); //if moneySaved or moneyNeeded changes then the method that calculates the progress gets triggerd

watch(progress, (newProgress) => {
  //checks if the progress changes, if the new progress is equal or greater than 100 the confetti is triggered
  if (newProgress >= 100) {
    store.commit("setShowConfetti", true);
    setTimeout(() => {
      //sets it back to false so you can trigger it multible times
      store.commit("setShowConfetti", false);
    }, 5000);
  }
});
</script>

<style scoped>
.progress-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-text {
  padding-top: 29px;
  margin: 0;
}

img {
  height: 183px;
  width: 275px;
}

span.saving-goal {
  font-weight: bold;
}
</style>
