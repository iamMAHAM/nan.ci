<template>
<h1>PARCOURS NANIEN</h1>
  <div class="Etudiant_parcours">
   <div class="card1_Etudiant_parcours">
     <div class="sous_card1_1">
       <h3>TOTAL DE POINTS</h3>
       <p>60.80</p>
       <button class="details1" @click="ToseePoint"><i class="fa-solid fa-plus"></i></button>
     </div>
     <div class="sous_card1_1">
       <h3>POINT DE PROJET</h3>
       <p>12</p>
       <button class="details2" @click="ToseeProjet"><i class="fa-solid fa-plus"></i></button>
     </div>
   </div>
   <div class="card2_Etudiant_parcours">
     <div class="sous_card2">
       <button class="pers"></button>
     <p><cardParent v-for="card in 9" :key="card.id"/></p>
     </div>
   </div>
  </div>
</template>

<script>
import cardParent from './cardParent.vue'
export default {
  components: { cardParent },
data(){
  return{
    
  }
},
methods:{
  ToseePoint(){
 console.log('bonjur')
 this.$router.push('/parent/Points')
  },
  ToseeProjet(){
 console.log('bonjur')
 this.$router.push('/parent/Points_Projet')
  }
}
}
</script>

<style scoped>
h1{
  margin-bottom: 0;
color: var(--blanc);
text-align: center;
font-weight: 400;
font-size: var(--titre);
}
.Etudiant_parcours{
  max-width: var(--max-width);
  position: relative;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-50%);
  height: 805px;
  background-color: var(--bg2);
}
.Etudiant_parcours .card1_Etudiant_parcours{
  width: 60%;
  height: 300px;
  display: flex;
  left: 50%;
  top: 25%;
  transform: translate(-50%,-50%);
  position: absolute;
  justify-content: space-around;
}
.card1_Etudiant_parcours .sous_card1_1{
  border: 1px solid white;
  box-sizing: border-box;
  height: 200px;
  width: 200px;
  margin: auto auto;
  border-radius: 8px;
  text-align: center;
  background-color: var(--bg);
}
.sous_card1_1>h3{
  margin-top: 15px;
  font-size: 24px;
}
.sous_card1_1>p{
  margin-top: 15px;
  font-size: 40px;
}
.sous_card1_1>button{
  margin-top: 15px;
  width: 50px;
  height: 30px;
  background-color: var(--violet);
  border: none;
  border-radius:10px ;
}
.Etudiant_parcours .card2_Etudiant_parcours{
  width: 80%;
  height: 300px;
  background-color: var(--bg);
  left: 50%;
  top: 70%;
  transform: translate(-50%,-50%);
  position: absolute;
}
.card2_Etudiant_parcours .sous_card2{
  width: 50%;
  margin: 130px auto;
}

</style>