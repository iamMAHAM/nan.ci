<template>
   <Header :slides="slides" :textes="textes" :titres="titres" :height="60" />

  <div class="general">
    <Loader v-if="loading"></Loader>
    <div class="formation-container" v-else>

      <div class="formation-hearder">
        <p>
            L’informatique est la science du traitement automatique de l’information. Elle permet d’automatiser plusieurs tâches et continue à
            évoluer pour devenir indispensable dans beaucoup de domaines. Les branches de l’informatique ont également évolué et de nouvelles
              naissent tout le temps.
        </p>  
      </div>

      <div class="formation-cadre">
        <Card  :formation="formation" />
      </div>
      <div  class="abonnement">
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
          "https://images.unsplash.com/photo-1637563680361-3e7ee7599318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          "https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80",
          "https://scontent.fabj4-1.fna.fbcdn.net/v/t39.30808-6/270221587_943253462965835_4428444102021885826_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=t87Dm3q5PZcAX-k5UUT&_nc_ht=scontent.fabj4-1.fna&oh=00_AfAfqlGe7BnsB_w3w3Oo8v3-mT-QBAFm0lY10yXmIjormg&oe=63688542",
          "ImagesAccueil/im6.jpg",
          
      ],
      textes: [      
          ` Travailler avec le sourire et sans stress, c'est sourire à l'avenir`,
          'Un environnement motivant et inspirant',
          'Coder pour devenir des professionnelles en programmation',
          '',
      ],
      titres: [
          'Une Pédagogie inspirée de 42',
          'Un cadre agréable',
          'Apprendre le code ',
          'NaN forme des professionnelles',
      ],
    }
    
  },
mounted() {
  
  fetch('http://192.168.88.15:3001/api/specialities')
  .then(response => response.json())
  .then((response)=>{
    console.log(response);
     this.formation = response.specialities
     this.loading = false
  })
  .catch((error) =>{
    this.$router.push('/')

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