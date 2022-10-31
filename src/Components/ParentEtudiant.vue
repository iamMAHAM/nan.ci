<template>
  <div class="parent_Etudiant">
    <h1>INFORMATIONS DE L’ETUDIANT</h1>
   <div class="Etudiants_infos1">
       <fieldset class="Etudiants_infos1_data">
         <legend></legend>
         <div class="card_infos">
           <p>Nom :   <span>Kone</span></p>
           <p>Prenom :   <span>sekou</span></p>
           <p>E-mail :   <span>degv@gmail.com</span></p>
           <p>Télephone :   <span>000 0000 0000</span></p>
           <p>Spécialité :   <span>Javascript</span></p>
           <p>Promotion :   <span>5.22</span></p>
           <p>Formation :   <span>Presentiel</span></p>
         </div>
       </fieldset>
   </div>
  </div>

</template>

<script>
export default {

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
.Etudiants_infos1{
  max-width: var(--max-width);
  /* margin: 0 auto; */
  position: relative;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-50%);
  height: 805px;
  background-color: var(--bg2);
}
.Etudiants_infos1_data{
  height: 550px;
  width: 646px;;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 53px;
}
legend{
  width: 226px;
  height: 200px;
  border: 1px solid white;
  text-align: center;
  border-radius: 60px;
}
.card_infos{
  margin: 20px auto;
  width: 500px;
}
.card_infos p{
  margin-top: 17px;
}
</style>