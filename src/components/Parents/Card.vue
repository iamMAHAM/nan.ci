<template>
  <div class="Etudiants_infos1">
    <h1>INFORMATIONS DE L’ETUDIANT</h1>
    <fieldset class="e-container">
      <legend>
        <img src="../../assets/ImagesParents/christopher-campbell-rDEOVtE7vOs-unsplash.jpg">
      </legend>
      <div class="card_infos">
        <div class="libel">
          <p>Nom et prenoms</p>
          <p>E-mail</p>
          <p>Télephone</p>
          <p>Spécialité</p>
          <p>Promotion</p>
          <p>Formation</p>
        </div>
        <div class="values">
          <p>Kabore Abdul Mahamoudou</p>
          <p>abdulkabore@gmail.com</p>
          <p>+2250101010101</p>
          <p>Javascript</p>
          <p>5.22</p>
          <p>Présentiel</p>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.e-container{
  display: flex;
  padding: 50px;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: var(--bg2);
}


legend{
  width: 226px;
  height: 200px;
  border: 1px solid white;
  text-align: center;
  border-radius: 60px;
  overflow: hidden;
}

legend>img{
  width: 230px;
  height: 195px;
  border-radius: 20px;
  margin: 0px auto;

}
.card_infos{
  display: flex;
  justify-content: space-around;
  width: 80%;
}

.card_infos div{
  text-align:left;
}
.card_infos p{
  font-size: 20px;
  padding: 10px;
}
</style>