<template>
  <div>
    <img src="../assets/noImage.jpg">
    <p>{{ savingGoal }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {useStore} from 'vuex'

const store = useStore();
const savingGoal = computed(() => store.state.savingGoal);

</script>

<style scoped>

</style>
