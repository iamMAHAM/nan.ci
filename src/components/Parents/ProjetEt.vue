<template>
  <div class="casse" v-if="projetInfo">
    <div class="casse1">
      <h2> 📂 - {{ projetInfo?.theme}}</h2>
    </div>
    <div class="casse1">
      <h2>{{ projetInfo?.points }} / 10</h2>
    </div>
    <div class="casse1">
      <h2>{{ projetInfo?.rank }}</h2>
    </div>
  </div>
  <p v-else class="nostarted">Pas de projet ...</p>
</template>

<script>
export default {
  name: 'ProjetEtudiant',
  props: ['projetInfo']
}
</script>

<style>
.casse{
  width: 100%;
  height: 200px;
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
}

.casse .casse1{
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--blanc);
  border: 1px solid var(--blanc);
  width: 30%;
  height: 100px;
  border-radius: 20px;
  box-shadow: 0 0 20px 8px #1b1f2b;
}
.casse1>h2{
  text-align: center;
}

.nostarted{
  font-size: 30px;
}

</style>