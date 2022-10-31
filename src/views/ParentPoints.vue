<template>
  <div class="parent_points">
    <PetudiantPoints v-for="item in 11" :key="item.id"/>
  </div>
</template>

<script>
import PetudiantPoints from '@/components/PetudiantPoints.vue'
import ProjetEt from '@/components/ProjetEt.vue'
export default {
  components: { PetudiantPoints},

}
</script>

<style scoped>
.parent_points{
   position: relative;
   background-color: var(--bg);
   width: 100%;
   height: 100vh;
   object-fit: cover;  
}
</style>