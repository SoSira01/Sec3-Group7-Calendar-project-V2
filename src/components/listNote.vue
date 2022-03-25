<script setup>
defineEmits(['delete'])
defineProps({
    listNotes: {
        type: Object,
        default: {}
    }
})
</script>
 
<template>
    <div>
        <ul>
            <li v-for="(listNote, index) in listNotes" :key="index">
               {{listNote.title}} , {{listNote.description}}, {{listNote.date}} 
            <button @click="$emit('delete',listNote.id)"></button>
            </li>
        </ul>

    </div>
</template>
 
<style></style>