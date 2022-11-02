<template>
  <div class="Admission">
    
  </div>
  <div class="nan">
      <h1>parcours d'Admission</h1>
      <div class="container">
        <div class="cours">
          <div class="en-ligne"><img src="../assets/images/registration.svg" alt=""></div>
          <h2>concours en ligne</h2>
          <p>Janvier: 1ère rentrée <br>
            Juillet : 2ème rentrée
          </p>
        </div>
        <div class="ph">
          <img  class="php" src="../assets/images/n2.png" alt="">
        </div>
        <div class="droit">
          <p>Droit de participassion <span>10.000 FCFA 
            <p> Inscription via </p>
          </span><span class="pan">https://concours.nan.ci/auth/rigister</span></p>
        </div>
        <div class="phs">
          <img  class="php" src="../assets/images/n2.png" alt="">
        </div>
        <div class="choix">
           <h2>Choix du parcours</h2>
           <p class="pol">
            En ligne : 360 places
            <br> Présentiel : 160 places
          </p>
        </div>
        
        <div class="ths">
          <img  class="thp" src="../assets/images/n1.png" alt="">
        </div>
        <div class="piscine">
           <h2>Choix de specialité</h2>
        </div>
        <div class="phss">
          <img  class="php" src="../assets/images/n2.png" alt="">
        </div>

        <div class="piscines">
           <h2>la piscine</h2>
        </div>

              <div class="phA">
                <img  class="php" src="../assets/images/n2.png" alt="">
            </div>

              <div class="rentré">
                <img src="../assets/images/gate.svg" alt="">
                <h2>La Rentrée</h2>
                <p>Bienvenue à Nan</p>
              </div>
              <div class="offre">
                <h2>Offre special</h2>
                <p>Deux mois de cours gratuit <br> pour tous les participants au concours</p>
              </div>
      </div>
  </div>
  
</template>

<script>
 export default {

  name: 'Admission',

}
</script>

<style scoped>
.Admission{
  background: url('@/assets/inform.jpeg') center no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
}
  .nan{
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 10px;
    height: 100vh;
    background:var(--vg2);

  }
  h1{
    color: var(--blanc);
    font-size: var(--titre);
    text-align: center;
    text-transform: uppercase;
  }
  .container{
    position: relative;
    margin-top: 50px;
    background:var(--blanc);
    height: 242vh;
    padding: 5px;
  }.cours{
   position: relative;
   background-color: var(--bg); 
   border: 1px solid;
   margin: auto;
   /* margin-left: 380px; */
   width: 400px;
   padding: 30px;
   border-radius: 50px;
    
  }
  h2{
    color: var(--blanc);
    text-transform: uppercase;
    text-align: center;
  }
  .choix{
   position: relative;
   background-color: var(--bg); 
   border: 1px solid;
   /* margin: auto; */
   margin-left: 700px;
   width: 380px;
   height: 100px;
   margin-top: 20px;
   border-radius: 50px;
   padding: 10px;
  }
  .piscine{
   position: relative;
   background-color: var(--bg);
   border: 1px solid;
   /* margin: auto; */
   margin-left: 350px;
   width: 290px;
   margin-top:0px;
   border-radius: 50px;
   padding: 10px;
  }
  .piscine :hover{
    background-color: var(--violet);
  }
  .piscines{
    position: relative;
   background-color: var(--bg);
   border: 1px solid;
   /* margin: auto; */
   margin-left: 100px;
   width: 290px;
   margin-top: 50px;
   border-radius: 50px;
   padding: 10px;
  }
  .image-piscine{
   width: 100px;
   display: flex;
    padding: 10px;
    margin-left: 50px;
  }
  .en-ligne{
    width: 100px;
    display: flex;
    padding: 10px;
    margin-left: 120px;
  }
  p{
    font-size: var(--paragraphe);
    letter-spacing: .5px;
    color: var(--blanc);
    text-align: center;
  }
  .paragraph{
   position: relative;
   background-color: var(--bg); 
   border: 1px solid;
   margin-left:70px;
   width: 400px;
   padding: 20px;
   border-radius: 50px;
  }.para{
   position: relative;
   background-color: var(--bg); 
   border: 1px solid;
   margin-left:680px;
   width: 400px;
   padding: 25px;
   border-radius: 50px; 
   display: flex;
   margin-top:-110px; 
  /* }.vide{
    position: absolute;
    top: 360px;
    left: 290px;
    border-right: 1px solid;
    width: 200px;
    height: 80px;
    rotate:20deg;

  }.vides{
    position: absolute;
    top: 420px;
    left: 480px;
    border-right: 1px solid;
    width: 200px;
    height: 80px;
    transform: rotate(-10deg); */
  }
  .text{
   position: relative;
   background-color: var(--bg); 
   border: 1px solid;
   border-radius:50%;
   margin-left:500px;
   width: 150px;
   padding: 25px;
   display: flex;
   margin-top:60px; 
  }
  .clone{
   position: relative;
   background-color: var(--bg); 
   border: 1px solid;
   margin-left:70px;
   width: 400px;
   padding: 20px;
   border-radius: 50px;
  }.clause{
    position: relative;
   background-color: var(--bg); 
   border: 1px solid;
   margin-left:660px;
   width: 400px;
   padding: 20px;
   border-radius: 50px;
   margin-top:-110px; 
  }.rentré{
   position: relative;
   background-color: var(--bg); 
   border: 1px solid;
   margin-left: 500px;
   width: 300px;
   padding: 10px;
   /* height: 350px; */
   /* border-radius: 50px; */
   top:0px;
    
  }.droit{
   position: relative;
   background-color: var(--violet); 
   border: 1px solid;
   width: 289px;
   height: 120px;
   text-align: center;
   padding: 20px;
   border-radius: 50px;
   margin-top:-110px; 
   
  }
  span{
    color: var(--rouge);
  }
  .pan{
    color: var(--blanc);
  }
  .ph{
    position: absolute;
    top: 168px;
    left: 230px;
   
  }
  .ph .php{
    width: 100px;
    height: 160px;
    transform: rotate(-0.18turn);
  }
  .phs .php{
    position: relative;
    margin-top: 30px;
    margin-left: 640px;
    transform: rotate(-0.88turn);

  }
  .ths .thp{
    position: relative;
    margin-top: 30px;
    margin-left: 640px;
    
    transform: rotate(-0.100turn);
  }
  .phss .php{
    position: relative;
    margin-top: 30px;
    margin-left: 280px;
    transform: rotate(-0.88turn);

  }.phA .php{
    position: relative;
    margin-top: 30px;
    margin-left: 350px;
    transform: rotate(-0.98turn);
  }
  .offre{
    position: relative;
     background-color: var(--bg); 
    border: 1px solid;
    width: 500px;
    margin: auto;
    margin-top: 80px;
  }
  
</style>