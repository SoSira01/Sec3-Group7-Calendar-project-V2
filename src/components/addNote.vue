<script setup>
import { ref, computed } from 'vue'
defineEmits(['addNote','updateNote'])
let newTitle = ref('')
let newDescription = ref('')
let newDate = ref('')

const props = defineProps({
  listNotes: {
    type: Object,
    default: {}
  }
})

const newNote = computed(() => {
  return {
    id: props.listNotes.id,
    descriptionlist: props.listNotes.descriptionlist.des
  }
})

</script>
<template>
    <div class="flex">
        <div class="flex items-center ">
            <p>Title</p><input type="text" class="input input-bordered input-accent w-full max-w-xs" v-model="newTitle">
            <p>Description</p><input type="text" class="input input-bordered input-accent w-full max-w-xs"  v-model="newDescription">
            <p>Date</p><input type="date" class="input input-bordered input-accent w-full max-w-xs" v-model="newDate">
            <button @click="$emit('addNote', {newTitle, newDescription, newDate})">Add</button>

            <button class="btn btn-outline btn-info" v-if="newNote.id > 0" @click="$emit('addNote', {newTitle, newDescription, newDate})">Add</button>
            <button v-else @click="$emit('UpdateNote',newNote.des )">Update</button>
        </div> 

    </div>
</template>

<style>
</style>