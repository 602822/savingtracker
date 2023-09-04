<template>
  <h1>Saving Tracker</h1>
  <displayMoney/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import displayMoney from "./components/displayMoney.vue"


export default defineComponent({
  name: 'App',
  components: {
  displayMoney
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
