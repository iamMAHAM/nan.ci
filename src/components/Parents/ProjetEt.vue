<template>
  <div class="casse" v-if="!started">
    <div class="casse1">
      <h2> 📂 - {{ projetInfo.theme}}</h2>
    </div>
    <div class="casse1">
      <h2><span>{{ projetInfo.note }}</span>/10</h2>
    </div>
    <div class="casse1">
      <h2><span>{{ projetInfo.rang }}</span> ème / 90</h2>
    </div>
    <!-- <div class="casse1">
      <h2>Janvier</h2>
    </div> -->
  </div>
  <p v-else class="nostarted">Pas encore demmaré ...</p>
</template>

<script>
export default {
  name: 'ProjetEtudiant',
  props: ['projetInfo'],
  data(){
    return {
      started: false
    }
  }

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
  color: var(--blanc);
  border: 1px solid var(--blanc);
  width: 220px;
  height: 100px;
  margin: auto auto;
  border-radius: 20px;
  box-shadow: 0 0 20px 8px #1b1f2b;
}
.casse1>h2{
  text-align: center;
  margin: 30px auto;
}

.nostarted{
  font-size: 30px;
}

</style>