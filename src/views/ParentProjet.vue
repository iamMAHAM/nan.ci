<template>
<div class="parent_points">
  <h1> Liste des projets</h1>
    <div class="titre">
      <h2>THEME</h2>
      <h2>POINTS</h2>
      <h2>RANG</h2>
      <h2>MOIS</h2>
    </div>
 <ProjetEt  v-for="cad in 11" :key="cad.id"/>
</div>
  
</template>

<script>
import ProjetEt from '@/components/ProjetEt.vue'
export default {
  components: { ProjetEt },

}
</script>

<style scoped>
.parent_points{
  max-width: var(--max-width);
  position: relative;
   background-color: var(--bg2);
   left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  margin-top: 1000px;
}
h1{
  text-align: center;
  font-size: var(--titre);
  color: white;
}
.titre{
  display: flex;
  justify-content: space-around;
  
}
</style>