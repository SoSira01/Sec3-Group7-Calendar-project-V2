<script setup>
import { ref, computed } from 'vue'
defineEmits(['addNote','updateNote'])
let newTitle = ref('')
let newDescription = ref('')
let newDate = ref('')

</script>
<template>
    <div class="m-20 h-fit w-10/12 justify-self-center mr-auto ml-auto flex">
        <div class="flex-col">
            <p>Title</p><input type="text"  v-model="newTitle">
            <p>Description</p><input type="text"   v-model="newDescription">
            <p>Date</p><input type="date"  v-model="newDate">
            <button class="btn" @click="$emit('addNote', {newTitle, newDescription, newDate})">Add</button>
        </div> 
    </div>
</template>

<style>
</style>