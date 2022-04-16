<script setup>
import { ref, computed } from 'vue'
defineEmits(['addNote','updateNote'])
let newTitle = ref('')
let newDescription = ref('')
let newDate = ref('')

// const props = defineProps({
//   listNotes: {
//     type: Object,
//     default: {}
//   }
// })

// const newNote = computed(() => {
//   return {
//     id: props.listNotes.id,
//     descriptionlist: props.listNotes.descriptionlist
//   }
// })

</script>
<template>
    <div>
        <div>
            <p>Title</p><input type="text"  v-model="newTitle">
            <p>Description</p><input type="text"   v-model="newDescription">
            <p>Date</p><input type="date"  v-model="newDate">
            <button @click="$emit('addNote', {newTitle, newDescription, newDate})">Add</button>
            <!-- <button v-if="newNote.id > 0" @click="$emit('addNote', {newTitle, newDescription, newDate})">Add</button> -->
        </div> 

    </div>
</template>

<style>
</style>