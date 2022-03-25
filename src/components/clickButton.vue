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
<button @click="$emit('clickMe',$event)">{{ buttonName }}</button>
</template>
 
<style>

</style>