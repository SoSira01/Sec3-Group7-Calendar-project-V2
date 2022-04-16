<script setup>

let props = defineProps({
  creators: {
    type: Array,
    default: []
  }
})
console.log(props.creators)
</script>
 
<template>
  <div>
    <div v-for="(creator, index) in creators" :key="index">
      <div class="bg-white w-7/12 rounded-lg place-content-center">
        <div class="mt-8 text-center m-20">
          <p class="font-bold text-xl">{{ creator.firstname }} {{ creator.lastname }}</p>
          <a :href="creator.socials.fb" ><p class="font-bold text-xl">Click Facebook</p></a>
          <a :href="creator.socials.github"><p class="font-bold text-xl">Click Github</p> </a>
        </div>
      </div>
    </div>
    <div class="text-center">
      <img class="place-content-center" src="../assets/git.png" alt="git" width="50" height="50">
       <a href="https://github.com/SoSira01/Calendar-Project">Calendar-project-V1</a>
       <a href="https://github.com/SoSira01/Sec3-Group7-Calendar-project-V2">Calendar-project-V2</a>      
    </div>

  </div>
</template>
