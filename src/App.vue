<script setup></script>

<template>
  <div>
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'ShowNote' }">ShowNote</router-link>
      <router-link :to="{ name: 'AboutUs' }">AboutUs</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
a{
  color: gray
}
.router-link-active {
  color:blue
}
</style>