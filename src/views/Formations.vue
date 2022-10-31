<template>
  <div class="general">
    <div class="image">
    </div>

    <div class="formation-container" >

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

    </div>

    <div class="footer">
    </div>
  </div> 
</template>

<script>

import Card from '@/components/Formations/card.vue';
import axios from 'axios'

export default {
  name:"formations",
  components:{
    Card
  },
  data() {
    return {
      formation:""
    }
  },
mounted() {
  axios
  .get('http://192.168.88.15:3001/api/specialities')
  .then(response =>{ 
    this.formation = response.data.specialities
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
  background: url('@/assets/formations/microsoft-edge-RoaneQUy84A-unsplash.jpg') no-repeat center;
  background-size: cover;
}
.footer{
  width: 100%;
  height: 350px;
  background: url('@/assets/formations/microsoft-edge-RoaneQUy84A-unsplash.jpg') no-repeat center;
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

</style>