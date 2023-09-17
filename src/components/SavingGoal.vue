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
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import ProgressBar from "./ProgressBar.vue";

const store = useStore();

const savingGoal = computed(() => {
  if (store.state.savingGoal === "Enter your Saving Goal") {
    return localStorage.getItem("savingGoal");
  } else {
    return store.state.savingGoal;
  }
});
const imageUrl = computed(
  () => store.state.selectedImageUrl || localStorage.getItem("imageUrl")
);

const moneyNeeded = computed(
  () => store.state.moneyNeeded || localStorage.getItem("moneyNeeded" || "0")
);
const moneySaved = computed(() => store.state.moneySaved);

const progress = computed(
  () =>
    store.state.progress || parseInt(localStorage.getItem("progress") || "0")
);

const calculateProgress = () => {
  if (localStorage.getItem("moneyNeeded") === "0") {
    //Prevents the progress from becoming NAN when i reset
    store.commit("setProgress", "0");
  } else {
    store.commit(
      "setProgress",
      Math.round((moneySaved.value / moneyNeeded.value) * 100)
    );
    localStorage.setItem(
      "progress",
      Math.round((moneySaved.value / moneyNeeded.value) * 100).toString()
    );
  }
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
