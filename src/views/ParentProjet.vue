<template>
<div class="parent_points">
  <h1>◊ Projet</h1>
    <div class="titre">
      <h2>THEME</h2>
      <h2>POINTS</h2>
      <h2>RANG</h2>
      <h2>MOIS</h2>
    </div>
  <ProjetEt v-for="card in 9" :key="card.id"/>
</div>
  
</template>

<script>
import ProjetEt from '@/components/Parents/ProjetEt.vue'
export default {
  components: { ProjetEt },

}
</script>

<style scoped>
.parent_points{
  max-width: var(--max-width);
  background-color: var(--bg2);
  position: relative;
  margin: 100px auto;
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