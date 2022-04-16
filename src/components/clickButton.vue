<script setup>
defineEmits(['clickMe'])
defineProps({
    buttonName : {
        type : String,
        require : true
    }
})
</script>
 
<template>
<button  class="btn btn-active m-10 mr-auto justify-self-center" @click="$emit('clickMe',$event)">{{ buttonName }}</button>
</template>
 
<style>

</style>