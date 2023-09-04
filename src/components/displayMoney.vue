<template>
    <div>
     <h3>Money needed: </h3>
     <h3>Money saved: </h3>
    
    </div>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'MyComponent',
    setup() {
      const message = ref<string>('Hello from Vue 3 with TypeScript!')
  
      return {
        message
      }
    }
  })
  </script>