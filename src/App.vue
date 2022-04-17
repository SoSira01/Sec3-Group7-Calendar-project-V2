<script setup></script>

<template>
<div class="navbar bg-secondary text-black">
  <div class="flex-1">  
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKdJREFUSEtjZKAxYKSx+QyELPgPdQAudYTk6W+BAwMDw3wGBgYFMoPuAQMDQyIDA8MBmH50r4MUyJNpOEwbyAxFXBbAwpRCOxBBj+4DgpFGwGYM/QNmAc2DaPhYAIsj9MjDxcdInbgiGV0hzSwgNy7gDifkA5pbMBoHGPUBzQu7DwwMDPzkxixU30Pk+gQ9FYEqnAUU1AkgwxPwVTgUOh5TO6FKn2ILAT6uKhlJWfgFAAAAAElFTkSuQmCC"/>
    <span class="normal-case pl-5 font-bold text-xl">Calendar</span>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0 text-lg">
      <li><router-link :to="{ name: 'Home' }">Home </router-link></li>
      <li><router-link :to="{ name: 'Notes' }">Notes </router-link></li>
      <li><router-link :to="{ name: 'AboutUs' }">AboutUs </router-link></li>
    </ul>
  </div>
</div>

  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
a{
  color: rgb(19, 19, 19)
}
.router-link-active {
  color:rgb(255, 255, 255)
}

</style>