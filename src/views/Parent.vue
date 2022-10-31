<template>
   <Parents_idn />
   <div class="parent_Etudiant">
<ParentEtudiant />
<parent-parcours />
   </div>
   

</template>

<script>
import Parents_idn from '@/components/Parents_idn.vue'
import ParentEtudiant from '@/components/ParentEtudiant.vue'
import ParentParcours from '@/components/ParentParcours.vue'
export default {
  components: { Parents_idn, ParentEtudiant, ParentParcours },

}
</script>

<style scoped>
.parent_Etudiant{
  position: relative;
   background-color: var(--bg);
   width: 100%;
   height: 100vh;
   object-fit: cover;  
}
</style>