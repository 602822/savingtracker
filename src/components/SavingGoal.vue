<template>
  <div>
    <img v-if="imageUrl" :src="imageUrl" alt="User selected Image" />
    <img v-else src="../assets/noImage.jpg" alt="No image selected" />
    <p>{{ savingGoal }}</p>
    <div class="progress">
      <ProgressBar :progress="progress" />
      <div class="precentage">
        <p>{{ progress }}%</p>
      </div>
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
.progress {
  display: flex;
  align-items: center;
  margin-left: 300px;
}

.precentage {
  margin-left: 20px;
  margin-top: 30px;
}
</style>
