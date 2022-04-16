<script setup>
import { ref } from 'vue'
defineEmits(['addNote'])
let newTitle = ref('')
let newDescription = ref('')
let newDate = ref('')
</script>
<template>
    <div>
        <div>
            <p>Title</p><input type="text" v-model="newTitle">
            <p>Description</p><input type="text" v-model="newDescription">
            <p>Date</p><input type="date" v-model="newDate">
            <br>
            <button @click="$emit('addNote', {newTitle, newDescription, newDate})">Add</button>
            
        </div> 
        <div>
            <p></p>
        </div>
    </div>
</template>

<style>
</style>