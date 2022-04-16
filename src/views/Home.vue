<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import ListCalendar from '../components/listCalendar.vue';
import ListNote from '../components/listNote.vue';
import AddNote from '../components/addNote.vue';
const Notes = ref([]);
//GET
const getListNotes = async () => {
  const res = await fetch('http://localhost:5000/listNotes')
  if (res.status === 200) {
    Notes.value = await res.json()
    console.log(Notes.value)
  } else console.log('error, cannot get listNotes')
}
onBeforeMount(() => {
  getListNotes();
})
//DELETE
const removeListNotes = async (id) => {
  const res = await fetch(`http://localhost:5000/listNotes/${id}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    Notes.value = Notes.value.filter((Notes) => Notes.id !== id) // true เก็บ
    console.log('deleted successfullly')
  } else console.log('error, cannot delete')
}
//POST
const createNote = async (Note) => {
  const res = await fetch('http://localhost:5000/listNotes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(Note)
  })
  if (res.status === 201) {
    const addedNote = await res.json()
    Notes.value.push(addedNote)
    console.log('created successfully')
  } else console.log('error, cannot create')
}
const removedes = (value) => {
  let title = ''
  let descArr = []
  Notes.value.forEach(note => {
    if (note.descriptionlist.length <= 1) {
      removeListNotes(value.noteId)
      return;
    }
    if (note.id == value.noteId) {
      console.log(note.descriptionlist)
      descArr = note.descriptionlist.filter((desc) => desc.id !== value.desId)
      title = note.title;
      update(note.id, title, descArr)
    }
    
  });
}
const add = (value) => {
  let title = ''
  let descArr = []
  if (Notes.value.find(o => o.title === value.newTitle) == undefined) {
    createNote({ "title": value.newTitle, "descriptionlist": [{ "id": 1, "des": value.newDescription, "date": value.newDate }] })
    return;
  }
  Notes.value.forEach(note => {
    if (note.title == value.newTitle) {
      title = value.newTitle
      console.log("test222")
      let randomId = note.descriptionlist[note.descriptionlist.length - 1].id + 1
      note.descriptionlist.push({ "id": randomId, "des": value.newDescription, "date": value.newDate })
      descArr = note.descriptionlist
      console.log(note.descriptionlist)
      console.log(descArr)
      update(note.id, title, descArr)
      return;
    }
  })
}
//PUT 
const update = async (noteId ,title, descArr) => {
  const res = await fetch(`http://localhost:5000/listNotes/${noteId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(
      { "title": title, "descriptionlist": descArr }
    )
  })
  if (res.status === 200) {
    console.log('edited successfully')
    const editedNote = await res.json()
    Notes.value = Notes.value.map((note) =>
      note.id === editedNote.id ? { ...note, "descriptionlist": editedNote.descriptionlist } : note
    )
    // getListNotes();
  } else {
    console.log('error, cannot edit')
  }
}
</script>

<template>
  <div>
    <ListCalendar></ListCalendar>
    <h3>List</h3>
    <ListNote :listNotes="Notes" @removedes="removedes"></ListNote>
    <AddNote @addNote="add"/>
  </div>
</template>

<style>
</style>