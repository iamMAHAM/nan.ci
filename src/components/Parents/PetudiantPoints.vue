<template>
  <div class="Etudiant_infos_plus">
      <div class="infos_plus1" v-if="isAv">
        <img src="../../assets/ImagesParents/jeshoots-com-9n1USijYJZ4-unsplash.jpg" alt="">
        <h1>{{ month }}</h1>
      </div>
      <div class="infos_plus1" v-if="isAv" style="align-self: center;">
        <div class="infos_data">
          <p>quizz passé :</p>
          <span>{{pointInfo.quizzes_passed}}</span>
        </div>
        <div class="infos_data">
          <p>exercices passés :</p>
          <span>{{pointInfo.exercices_passed}}</span>
        </div>
        <div class="infos_data">
          <p>Points :</p>
          <span>{{pointInfo.total_points}}</span>
        </div>
        <div class="infos_data">
          <p>Rang :</p>
          <span>
          {{pointInfo.rank}}
          </span>
        </div>
      </div>
      <div class="nostarted" v-else="isAv" style="align-self: center;">
        Pas encore disponible
      </div>
  </div>
</template>

<script>
export default {
  props: ['pointInfo', 'month'],
  computed: {
    isAv(){
      console.log(this.pointInfo.exercices_passed !== '0/0')
      return this.pointInfo.exercices_passed !== '0/0'
    }
  }
}
</script>

<style scoped>
 .Etudiant_infos_plus{
  padding: 20px;
  background-color: var(--blanc);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 16px;
  margin: 0 auto;
  border: none;
  box-shadow: 0 10px 35px rgba(50,50,93,.1),0 2px 15px rgba(0,0,0,.07);
  border-radius:10px ;
}
.infos_plus1{
  width: 50%;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.infos_plus1>img{
    width: 100%;
    height: 100%;
    box-shadow: 0 10px 35px rgba(50,50,93,.1),0 2px 15px rgba(0,0,0,.07);
}
.infos_plus1>h1{
    position: absolute;
    color: aliceblue;
    left: 25%;
    top: 45%;
    transform: translate(-50%,-50%);
    font-size: var(--titre);
}
.infos_plus1 .infos_data{
  box-shadow: 0 10px 35px rgba(50,50,93,.1),0 2px 15px rgba(0,0,0,.07);
  padding: 10px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


p{
  font-size: 20px;
  color: var(--bg);
}



</style>