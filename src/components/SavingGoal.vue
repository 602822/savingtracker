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
let progress = ref(0);

const calculateProgress = () => {
  progress.value = Math.round((moneySaved.value / moneyNeeded.value) * 100);
};

watch([moneySaved, moneyNeeded], calculateProgress);

watch(progress, (newProgress) => {
  if (newProgress >= 100) {
    store.commit("showConfetti");
  }
});
</script>

<style scoped>
.progress-section {
  display: flex;
  align-items: center; /* Vertically align children if they have different heights */

  gap: 10px; /* Provides space between children. If 'gap' is not supported in your target browsers, use margin-right on the ProgressBar instead */
}

.progress-text {
  padding-top: 29px;
  margin: 0; /* Remove default paragraph margins */
}

img {
  height: 183px;
  width: 275px;
}

span.saving-goal {
  font-weight: bold;
}
</style>
