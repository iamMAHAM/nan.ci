<template>
   <Header :slides="slides" :textes="textes" :titres="titres" :height="60" />

  <div class="general">
    <div class="formation-container" >

      <div class="formation-hearder">
        <h1>NOS  FORMATIONS</h1>
        <p>
            L’informatique est la science du traitement automatique de l’information. Elle permet d’automatiser plusieurs tâches et continue à
            évoluer pour devenir indispensable dans beaucoup de domaines. Les branches de l’informatique ont également évolué et de nouvelles
              naissent tout le temps.
        </p>  
      </div>

      <div class="formation-cadre">
    <Loader v-if="loading"  :height="120" :width="120" :bg="'var(--bg2)'"></Loader>

        <Card  :formation="formation"  v-else />
      </div>
      <div  class="abonnement" id="abonner" >
        <Abonnements/>
      </div>

    </div>

   
  </div> 
</template>

<script>

import Card from '@/components/Formations/card.vue';
import Loader from '@/components/Global/Loader.vue';
import Header from '@/components/Accueil/header.vue';
import Abonnements from '@/components/Formations/abonnements.vue';
export default {
  name:"formations",
  components:{
    Card, Loader , Header,Abonnements
  },
  data() {
    return {
      formation:"",
      loading:true,
      slides:[
          "formations/forma1.jpeg",
          "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          
          
          
      ],
      textes: [      
          'Coder pour devenir des professionnelles en programmation',
        
          
      ],
      titres: [
          'Apprendre le code ',
          'NaN forme des professionnelles',
      ],
    }
    
  },
mounted() {
  
  fetch('http://192.168.88.15:3001/api/specialities')
  .then(response => response.json())
  .then((response)=>{
     this.formation = response.specialities
     this.loading = false
  })
  .catch((error) =>{
    // this.$router.push('/')
    this.loading = false
  })
},



}
</script>

<style scoped>

.general{
  /* background: var(--bg2); */
}
.image{
  width: 100%;
  height: 500px;
  background: url('@/assets/ImagesAccueil/im4.jpg') no-repeat center;
  background-size: cover;
}
.footer{
  width: 100%;
  height: 350px;
  background: url('@/assets/ImagesAccueil/im4.jpg') no-repeat center;
  background-size: cover;
}
.formation-container{
  float: none;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: var(--bg2); */
  height: auto;
}

.formation-container  .formation-hearder{
  margin-bottom: 30px;
  padding: 15px;
  max-width: 1000px;
  width: 98%;
  text-align: center;
}

.formation-container .formation-cadre{

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 35px;
  margin: 0 auto;
  padding: 40px 0;
  width: 100%;
}

.abonnement{
  width: 100%;
}

</style>