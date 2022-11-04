<template>
  <Header :slides="slides" :textes="textes" :titres="titres" :height="60"/>

  <div class="nan">
      <h1>parcours d'Admission</h1>
      <div class="container">
     
        <div class="droit">
          <p>Droit de participassion <span>10.000 FCFA 
            <p> Inscription via </p>
          </span><span class="pan"><a href="#">https://concours.nan.ci/auth/rigister</a></span></p>
        </div>
       
        <div class="cours">
          <div class="en-ligne"><img src="../assets/images/registration.svg" alt=""></div>
          <h2>concours en ligne</h2>
          <p><a href="#">Janvier</a>:1ère rentrée <br>
            <a href="#">Juillet </a>: 2ème rentrée
          </p>
        </div>      
        <div class="ph">
          <img  class="php" src="../assets/images/n2.png" alt="">
        </div>  
        <div class="phs">
          <img  class="php" src="../assets/images/n1.png" alt="">
        </div>
        <div class="choix">
           <h2>Choix du parcours</h2>
           <p class="pol">
                  <a href="#"> En ligne</a> : 360 places
            <br> <a href="#">Présentiel</a> : 160 places
          </p>
        </div>
        
        <div class="ths">
          <img  class="thp" src="../assets/images/n1.png" alt="">
        </div>
        <div class="piscine">
           <h2>Choix de specialité</h2>
           <div class="im">
            <a href="">
            <img src="../assets/formations/php01.png" alt="">

            </a>
           <a href="https://192.168.88.15:3001/api/specialities"><img src="../assets/formations/flutter.png" alt=""></a>
           <a href="">
           <img src="../assets/formations/js1.png" alt="">

           </a>
           <a href="#"><img src="../assets/formations/py1.png" alt=""></a>
          </div>
           
        </div>
        <div class="phss">
          <img  class="php" src="../assets/images/n2.png" alt="">
        </div>

        <div class="piscines">
           <h2>la piscine</h2>
           <p>
            traditionnellement organisées chaque année en Janvier et en Juillet. Les places sont limitées et un système de 
            file d’attente redistribue les places non réclamées en fonction de l’ordre d’inscription.
           </p>
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
import Header from '@/components/Accueil/header.vue';
 export default {
  name: 'Admission',
  components:{
    Header
  },
  data(){
    return {
      slides:[
          
          "inform.jpeg",
          "ImagesAccueil/im3.jpg",
          "ImagesAccueil/im4.jpg",
          "ImagesAccueil/im6.jpg",
          
      ],
      textes: [  
              
          ` la motivation reste toujours source du coder`,
          'Un environnement motivant et inspirant',
          'Coder pour devenir des professionnelles en programmation',
          '',
      ],
      titres: [
          'Apprendre l \' avenir',
          'Un cadre agréable',
          'Apprendre le code ',
          'NaN forme des professionnelles',
      ],
    }
  }

}
</script>

<style scoped>

 
.Admission{
  background: url('@/assets/inform.jpeg') center no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
}
p{
  color: rgb(204, 202, 202) !important;
}
  .nan{
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 10px;
    height: auto;
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
    padding: 5px;
    text-align: center;
  }
  .cours{
   position: relative;
    border: 1px solid;
   margin: auto;
   margin-top: 100px;
   margin-left: 100px;
   width: 98%;
   max-width: 450px;
   padding: 10px;
    
   border-radius: 10px;
   display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  .cours:hover{
    background-color: var(--bg);
    color: white;
  }
  h2{
     text-transform: uppercase;
    text-align: center;
     
  }
  .choix{
   position: relative;
    border: 1px solid;
    margin-left: 500px;
   width: 98%;
   max-width: 450px;
   height: 100px;
   margin-top:0px;
   border-radius: 10px;
  }
  .choix:hover{
    background-color: var(--bg);
    color: white !important;
  }
  .im{
    display: flex;
    border: 1px solid;
    justify-content: space-around
  }
  .im img{
    width: 40px;
    height: 40px;
    padding: 0px;
    
    border: 2px solid;
  }
  .piscine{
   position: relative;
   border: 1px solid;
   margin-left: 350px;
   width: 98%;
   max-width: 450px;
   margin-top:0px;
   border-radius: 10px;
   padding: 10px;
  }
  .piscine:hover{
    background-color: var(--bg);
    color: rgb(245, 248, 248);
     
  }
  .piscines{
    position: relative;
    border: 1px solid;
    margin-left: 100px;
   width: 98%;
   max-width: 450px;
   margin-top: 50px;
   border-radius: 10px;
   padding: 10px;
   }
  .piscines:hover{
    background-color: var(--bg);
    color: rgb(232, 231, 230);
    
  }
  .image-piscine{
   width: 100px;
   display: flex;
    padding: 10px;
    margin-left: 50px;
  }
  .en-ligne{
    width: 100px;
    padding: 10px;
    
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
  }
  .rentré{
   position: relative;
   border: 1px solid;
   margin-left: 500px;
   width: 300px;
   padding: 10px;
   top:0px;  
  }
  .rentré:hover{
    background-color: var(--bg);
  }
  .droit{
   position: relative;
   background-color: var(--violet); 
   border: 1px solid;
   width: 98%;
   max-width: 300px;
   height: 120px;
   text-align: center;
   padding: 16px;
   border-radius: 10px;
   margin-top:0px; 
   margin: auto;
   
  }
  span{
    color: var(--rouge);
  }
  .pan{
    color: var(--blanc);
  }
  .ph{
    position: absolute;
    top: 100px;
    left: 300px;
   
  }
  .ph .php{
    width: 100px;
    height: 130px;
    transform: rotate(-0.78turn);
  }
  .phs .php{
    position: relative;
    margin-top:0px;
    margin-left: 100px;
    transform: rotate(-0.200turn);
    height: 140px;
    width: 100px;
  }
  .ths .thp{
    position: relative;
    margin-top: 30px;
    margin-left: 540px;
    transform: rotate(-0.100turn);
  }
  .phss .php{
    position: relative;
    margin-top: 30px;
    margin-left:-180px;
    transform: rotate(-0.88turn);

  }.phA .php{
    position: relative;
    margin-top: 30px;
    margin-left: -260px;
    transform: rotate(-0.98turn);
  }
  .offre{
    position: relative;
     background-color: var(--bg); 
    border: 1px solid;
    width: "";
    margin: auto;
    margin-top: 80px;
  }
  
</style>