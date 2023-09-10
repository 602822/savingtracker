<template>
  <div>
    <img v-if="imageUrl" :src="imageUrl" alt="User selected Image" />
    <img v-else src="../assets/noImage.jpg" alt="No image selected" />
    <div class="progress">
      <ProgressBar :progress="progress" />
      <div class="precentage">
        <p>{{ progress }}%</p>
      </div>
    </div>

    <p>{{ savingGoal }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ProgressBar from "./ProgressBar.vue";

const store = useStore();
const savingGoal = computed(() => store.state.savingGoal);
const imageUrl = computed(() => store.state.selectedImageUrl);

const progress = ref(50);
</script>

<style scoped>
.progress {
  display: flex;
  align-items: center;
}

.precentage {
  margin-left: 20px;
  margin-top: 30px;
}
</style>
