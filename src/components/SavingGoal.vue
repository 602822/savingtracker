<template>
  <div>
    <img v-if="imageUrl" :src="imageUrl" alt="User selected Image" />
    <img v-else src="../assets/noImage.jpg" alt="No image selected" />

    <p>{{ savingGoal }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const savingGoal = computed(() => store.state.savingGoal);
const imageUrl = computed(() => store.state.selectedImageUrl);
</script>

<style scoped></style>
