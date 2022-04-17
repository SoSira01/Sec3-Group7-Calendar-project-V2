<script setup>
import { ref, computed } from 'vue'

defineEmits(['addNote', 'updateNote'])
let newTitle = ref('')
let newDescription = ref('')
let newDate = ref('')

</script>
<template>
  <div class="mt-8 mx-20 flex">
    <div class="form-control w-full max-w-xs mx-7 drop-shadow-xl">
      <label class="label">
        <span class="label-text text-lg">Title : </span>
      </label>
      <input type="text" v-model="newTitle" placeholder="Type here"
        class="input input-bordered input-primary input-sm w-full max-w-xs ">
    </div>
    <div class="form-control w-full max-w-xs mx-7 drop-shadow-xl">
      <label class="label">
        <span class="label-text text-lg">Description : </span>
      </label>
      <input type="text" v-model="newDescription" placeholder="Type here"
        class="input input-bordered input-warning input-sm w-full max-w-xs ">
    </div>
    <div class="form-control w-full max-w-xs mx-7 drop-shadow-xl">
      <label class="label">
        <span class="label-text text-lg">Date : </span>
      </label>
      <input type="date" v-model="newDate" placeholder="Type here"
        class="input input-bordered input-error input-sm w-full max-w-xs">
    </div>
    <button class="btn btn-sm btn-active btn-success mt-10 mx-7 drop-shadow-xl" @click="$emit('addNote', { newTitle, newDescription, newDate })">Add</button>
    <br><br><hr><br><br>
  </div>

</template>
 
<style>
</style>