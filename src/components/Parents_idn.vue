<template>
  <div class="parents_contenaire">
   <h1>PORTAIL PARENT</h1>
    
    <form class="sous_cadre_parents_id">
      <h2>IDENTIFICATION</h2>
       <div class="parents_id_input">
         <input type="text" placeholder="Code_parent" class="saisie" required>
         <input type="text" placeholder="N_Etudiant" class="saisie" required>
       </div>

      <button type="submit" class="btn">Connexion</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.parents_contenaire{
   position: relative;
   background-color: var(--bg);
   width: 100%;
   height: 100vh;
   object-fit: cover;
 }
 h1{
   text-align: center;
 }
 .sous_cadre_parents_id{
   border: 1px solid white;
   width: 50%;
   height: 400px;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
 }
 .sous_cadre_parents_id>h2{
 text-align: center;
 }
 .sous_cadre_parents_id .parents_id_input{
    width: 360px;
    margin: 80px auto;
 }
 .parents_id_input .saisie{
   width: 350px;
   height: 50px;
   margin-top: 20px;
   border-radius: 8px;
 }
 .btn{
  width: 150px;
  height: 40px;
  position: relative;
  left: 50%;
  top: 10%;
  transform: translate(-50%,-50%);
  border-radius: 8px;
 }
</style>