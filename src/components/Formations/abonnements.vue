<template>
  <div class="abonnements" >
    <h1>Nos abonnements</h1>
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
  /* background-color: var(--bg2); */
 
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

 .abonnement-cardre{

display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
margin: 0 auto;
padding: 40px 0;
width: 100%;
/* border: 1px solid blue; */

  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: 35px; */
}


</style>