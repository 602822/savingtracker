<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  progress: {
    type: Number,
    required: true,
    validator: (value: number): boolean => {
      return value >= 0 && value <= 100;
    },
  },
});
</script>

<style scoped>
.progress-container {
  width: 400px;
  background-color: #f3f3f3;
  border-radius: 4px;
  display: flex;
  margin-left: 420px;
  margin-top: 30px;
}

.progress-bar {
  height: 20px;
  background-color: #4caf50;
  border-radius: 4px;
}
</style>
