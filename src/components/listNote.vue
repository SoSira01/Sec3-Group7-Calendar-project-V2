<script setup>
import { ref } from 'vue'
defineEmits(['removedes'])
let props = defineProps({
    listNotes: {
        type: Array,
        default: []
    }
})

</script>
<template>
    <div>
        <div v-for="(note, index) in listNotes" :key='index'>
            <h2>Topic : {{ note.title }}</h2>
             <p v-for="(deslist, i) in note.descriptionlist" :key="i">{{ deslist.des }}, {{ deslist.date }}<!--, {{deslist.id}} -->
            <button @click="$emit('removedes', { noteId : note.id, desId : deslist.id})">Delete</button>
            </p>
        </div>
    </div>
</template>
<style>
</style>