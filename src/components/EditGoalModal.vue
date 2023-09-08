<template>
  <div class="modal-backdrop">
    <div class="modal">
      <button class="btn-close" @click="closeModal">x</button>
      <h3>Edit Saving Goal</h3>

      <p>Enter what you are saving for:</p>
      <div class="input-container">
        <input class="input" v-model="savingGoal" />
        <p>Enter how much money you need:</p>
        <input class="input" v-model.number="moneyNeeded" />
        <button @click="save"  class="button">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import {useStore} from 'vuex'

const savingGoal = ref<string>("");
const moneyNeeded = ref<number>(0);

const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}

const store = useStore();

const save = () => {
  store.commit('setSavingGoal', savingGoal)
  store.commit('setMoneyNeeded', moneyNeeded )
}

</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  position: relative;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.button {
  margin-top: 10px;
}

.input {
  width: 200px;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
