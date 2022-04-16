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
<button  class="btn btn-active btn-primary mx-50" @click="$emit('clickMe',$event)">{{ buttonName }}</button>
</template>
 
<style>

</style>