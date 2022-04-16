<script setup></script>

<template>

  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKdJREFUSEtjZKAxYKSx+QyELPgPdQAudYTk6W+BAwMDw3wGBgYFMoPuAQMDQyIDA8MBmH50r4MUyJNpOEwbyAxFXBbAwpRCOxBBj+4DgpFGwGYM/QNmAc2DaPhYAIsj9MjDxcdInbgiGV0hzSwgNy7gDifkA5pbMBoHGPUBzQu7DwwMDPzkxixU30Pk+gQ9FYEqnAUU1AkgwxPwVTgUOh5TO6FKn2ILAT6uKhlJWfgFAAAAAElFTkSuQmCC"/>
  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
 <h2>Calendar</h2>
  </a>
 

      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
           <router-link :to="{ name: 'Home' }">Home</router-link>

      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <router-link :to="{ name: 'Notes' }">Notes</router-link>

      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            <router-link :to="{ name: 'AboutUs' }">AboutUs</router-link>

      </a>

<!-- 
    <router-link :to="{ name: 'Home' }">Calendar</router-link>
    <router-link :to="{ name: 'Notes' }">Notes</router-link>
    <router-link :to="{ name: 'AboutUs' }">AboutUs</router-link> -->

    <div>
      <router-view></router-view>
    </div>
</template>

<style scoped>
a{
  color: rgb(255, 255, 255)
}
.router-link-active {
  color:blue
}
</style>