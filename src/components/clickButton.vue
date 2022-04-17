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
<button class="btn-sm btn btn-ghost m-5 mr-auto text-center animate-pulse drop-shadow-xl" @click="$emit('clickMe',$event)">{{ buttonName }}</button>
</template>
 
<style>

</style>