<script setup>
import {ref} from 'vue'
defineEmits(['delete','edit' ])
defineProps({
    listNotes: {
        type: Object,
        default: {}
    }
})
const newTitle = ref('')
const newNote = ref('')
</script>
 
<template>
    <div>

    <p>Show Notelist </p>
    <!-- Title : <input type="text" placeholder="Typing..." v-model="newTitle">
    Note : <input type="text" placeholder="Typing..." v-model="newNote"> -->
        <ul>
            <li v-for="(listNote, index) in listNotes" :key="index">
               {{listNote.titles}} , {{listNote.descriptions}}, {{listNote.date}} 
            <button @click="$emit('delete',listNote.id)">delete</button>
            <button @click="$emit('edit',{id : listNote.id, titles:newTitle ,descriptions: newNote, date: listNote.date })">edit</button>
            </li>
        </ul>

    </div>
</template>
 
<style></style>