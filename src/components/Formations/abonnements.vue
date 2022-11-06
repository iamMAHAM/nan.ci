<template>
  <div class="abonnements" >
    <h1>NOS ABONNEMENTS </h1>
    <p>
       Des tarifs adaptés et flexibles selon vos besoins
    </p>
    <div class="abonnement-cardre">
      <CardAbonne/>
    </div>

  </div>
</template>

<script>
import CardAbonne from './cardAbonne.vue';
export default {
  components:{
      CardAbonne
    },
  data() {
  
    return {
      
    }
  },

}
</script>

<style scoped>
.abonnements{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.abonnement-cardre{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 40px 0;
  width: 100%;

}


</style>