<script setup>
import { ref } from 'vue'
import ListCalendar from '../components/listCalendar.vue';
// import ListNote from '../components/listNote.vue';
// import AddNote from '../components/addNote.vue';
const Notes = ref([]);

</script>

<template>
  <div>
    <ListCalendar/>
    <!-- <ListNote :listNotes="Notes" @removedes="removedes"></ListNote>
    <AddNote @addNote="add"/> -->
  </div>

</template>

<style></style>