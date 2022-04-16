<script setup>

import { ref, onBeforeMount } from 'vue'
import ListCreator from '../components/listCreator.vue'


const Notes = ref([])

//GET
const getListNotes = async () => {
  const res = await fetch(' http://localhost:5000/creators')
  if (res.status === 200) {
    Notes.value = await res.json()
    console.log(Notes.value)
  } else console.log('error, cannot get creators')
}
onBeforeMount(() => {
  getListNotes();
})
</script>
 
<template>
<ListCreator :creators="Notes"/>
</template>
 
<style scoped></style>