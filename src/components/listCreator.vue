<script setup>

let props = defineProps({
   creators :{
    type: Array,
    default: []
  }
})
console.log(props.creators)
</script>
 
<template>
    <div>
            <div v-for="(creator, index) in creators" :key="index">
            {{creator.img}}
            <br>
            {{creator.firstname}}  {{creator.lastname}}
            <br>
            {{creator.socials.fb}}   {{creator.socials.fbname}} 
            <br>
            {{creator.socials.github}}   {{creator.socials.githubname}}
            </div>
    </div>
</template>
