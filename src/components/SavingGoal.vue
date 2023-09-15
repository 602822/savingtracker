<template>
  <div>
    <img v-if="imageUrl" :src="imageUrl" alt="User selected Image" />
    <img v-else src="../assets/noImage.jpg" alt="No image selected" />
    <p>{{ savingGoal }}</p>
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
const savingGoal = computed(() => store.state.savingGoal);
const imageUrl = computed(() => store.state.selectedImageUrl);

const moneyNeeded = computed(() => store.state.moneyNeeded);
const moneySaved = computed(() => store.state.moneySaved);
let progress = ref(0);

const calculateProgress = () => {
  progress.value = Math.round((moneySaved.value / moneyNeeded.value) * 100);
};

watch([moneySaved, moneyNeeded], calculateProgress);
</script>

<style scoped>
.progress-section {
  display: flex;
  align-items: center; /* Vertically align children if they have different heights */
  margin-left: 50px;
  gap: 10px; /* Provides space between children. If 'gap' is not supported in your target browsers, use margin-right on the ProgressBar instead */
}

.progress-text {
  padding-top: 29px;
  margin: 0; /* Remove default paragraph margins */
}
</style>
