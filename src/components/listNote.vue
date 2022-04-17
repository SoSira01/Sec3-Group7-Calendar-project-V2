<script setup>
defineEmits(['removedes','editdes'])
let props = defineProps({
    listNotes: {
        type: Array,
        default: []
    }
})

</script>
<template>
    <div class="grid grid-cols-3">
        <div class="rounded-lg bg-zinc-800 text-base-200 text-center m-10 p-5 drop-shadow-xl" v-for="(note, index) in listNotes" :key='index'>
            <h1 class="mb-3 font-bold">Topic : <span class="text-accent">{{ note.title }}</span></h1>
             <p v-for="(deslist, i) in note.descriptionlist" :key="i">Description : {{ deslist.des }}<br> Date : {{ deslist.date }} <br>

            <button @click="$emit('editdes', note, deslist.id)" class="btn btn-outline btn-accent mr-2 btn-xs flex-row drop-shadow-xl my-2">Edit</button>
            <button @click="$emit('removedes', { noteId : note.id, desId : deslist.id})" class="my-2 flex-row btn btn-outline btn-error btn-xs drop-shadow-xl">x</button>
            <br>
            </p>
        </div>
    </div>
</template>
<style>
</style>