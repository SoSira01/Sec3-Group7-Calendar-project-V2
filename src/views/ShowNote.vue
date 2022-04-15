<script setup>
import { ref, onBeforeMount } from 'vue'
import listNote from '../components/listNote.vue'
const notes = ref([])

onBeforeMount(async () =>{
    await getNotes()
})

//GET
const getNotes = async () => {
    const res = await fetch(' http://localhost:5000/listNotes')
    if (res.status === 200) {
    notes.value = await res.json()
    console.log( notes.value)
} else console.log('error, cannot get listNotes')

}

//DELETE
const deleteNote = async (deleteNoteId) => {
  const res = await fetch(` http://localhost:5000/listNotes/${deleteNoteId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    notes.value = notes.value.filter((note) => note.id !== deleteNoteId)
    console.log('deleted successfullly')
  } else console.log('error, cannot delete')
}

//PUT
const modifyNote = async (noteItem) => {
  const res = await fetch(` http://localhost:5000/listNotes/${noteItem.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      titles:noteItem.titles,
      descriptions : noteItem.descriptions,
      date:noteItem.date
    })
  })

  if (res.status === 200) {
    const updateNote = await res.json()
    notes.value = notes.value.map((note) =>
      note.id === updateNote.id
        ? { ...note, titles: updateNote.titles, descriptions:updateNote.descriptions, date : updateNote.date }
        : note
    )

    console.log('edited successfully')
  } else console.log('error, cannot edit')
}
</script>
 
<template>

<listNote :listNotes="notes" @delete="deleteNote" @edit = "modifyNote"></listNote>
</template>
 
<style>

</style>