<script setup>

defineProps({
   creators :{
     type: Array,
    required: true,
  },
});
</script>
 
<template>
    <div>
        <ul>
            <li v-for="(creator, index) in creators" :key="index">
            {{ creator.img}}
            {{ creator.firstname}} 
            {{ creator.lastname}} 
            {{ creator.socials}}
            </li>
            <div>
                <p></p>
            </div>
        </ul>
    </div>
</template>
 
<style>

</style>