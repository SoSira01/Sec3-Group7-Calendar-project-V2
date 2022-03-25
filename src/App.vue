<script setup></script>

<template>
  <div>
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link> <br>
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