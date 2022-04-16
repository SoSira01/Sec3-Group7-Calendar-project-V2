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
            <p v-for = "(social, i) in creators.socials" :key="i">
            {{social.fb}} {{social.fbname}} {{social.github}} {{social.githubname}}
            </p>
            {{creator.socials}}
            </div>
    </div>
</template>
