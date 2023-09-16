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
        <p>Image:</p>
        <input type="file" @change="onImageSelected" />
        <button @click="save" class="button">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { useStore } from "vuex";

const savingGoal = ref<string>("");
const moneyNeeded = ref<string | number>(""); //Its initialized as an empty string so the inputfield dont have a 0 in them

const store = useStore();

const selectedImage = ref<string | null>(null);

const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}

const onImageSelected = (event: Event) => {
  //Method for getting a image url from file
  const fileInput = event.target as HTMLInputElement;
  const files = fileInput.files;

  if (files && files.length > 0) {
    const file = files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      selectedImage.value = e.target?.result as string;

      store.commit("setImageUrl", selectedImage.value);
    };

    reader.readAsDataURL(file);
  }
};

const save = () => {
  store.commit("setSavingGoal", savingGoal);
  store.commit("setMoneyNeeded", moneyNeeded);
  localStorage.setItem("moneyNeeded", moneyNeeded.value.toString());
  localStorage.setItem("savingGoal", savingGoal.value);
};
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
  height: 350px;
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
