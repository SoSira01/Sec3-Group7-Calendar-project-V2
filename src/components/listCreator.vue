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
            <div class="bg-white w-7/12 rounded-lg ml-auto mr-auto h-[300px]"> 
               <div class="mt-8 ml-auto mr-auto text-center ">
                  <p class="font-bold text-xl">{{creator.firstname}}  {{creator.lastname}}</p>
                  <p class="font-bold text-xl"> {{creator.socials.fb}}</p>
                  <p class="font-bold text-xl"> {{creator.socials.github}}</p>
               </div>           
            </div> 
        </div>
    </div>
</template>
