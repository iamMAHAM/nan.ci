<template>
   <Header :slides="slides" :textes="textes" :titres="titres" :height="60" />
  <div class="container-Apropos">
    <h1>A PROPOS DE NOUS</h1>

    <div class="container-card">
            <div class="card-image">
                <img src="https://scontent.fabj4-1.fna.fbcdn.net/v/t39.30808-6/270221587_943253462965835_4428444102021885826_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=hkvh_EFgTkcAX-jEvHj&_nc_ht=scontent.fabj4-1.fna&oh=00_AfAJUbLlF_8j4npQTEtXxTWFFcLwl5DqZbsmN1IPM-cZzQ&oe=636A7F82" alt="">
            </div>
            <div class="card-body">
                <h2 class="texte">Qui sommes-nous?</h2>
                <div >
                  <p  class="texte1" >
                    NaN est une école,une académie de formation aux métiers de développeur web, développeur Mobile,  Reseaux-voix et Makerting Digital
                    L’école met l’accent sur les projets et le travail de groupe plutôt que sur l’enseignement théorique.Un concentré de nouveautés
                     pédagogiques pour permettre aux talents de demain de se révéler.
                </p>
                </div>
               
            </div>
    </div>

    <div class="container-card">
            <div class="card-image">
                <img src="https://scontent.fabj4-1.fna.fbcdn.net/v/t39.30808-6/235454809_858329174791598_5573216885781059755_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=nehZ3E3lkx0AX-i8VMU&_nc_ht=scontent.fabj4-1.fna&oh=00_AfCWfsh2MYlR1BwNXOeLfLRF4MX0QvKvrz_hXXUMJ5DeXA&oe=636C1D3C" alt="">
            </div>
            <div class="card-body">
                <h2 class="texte">Notre vision</h2>
                <span class="texte2" >OFFRIR UNE FORMATION DÈS AUJOURD’HUI POUR DEMAIN</span>
                <div >
                  <p class="texte1" >
                   Depuis sa création en 2016, NaN a toujours eu à cœur de proposer la meilleure formation
                    en informatique au plus grand nombre avec des méthodes de travail innovantes. La vision
                     de NaN repose sur ce que doit être l’avenir de l'Afrique francophone. L'Afrique doit 
                     devenir un des endroits de la terre où il fait le mieux-vivre.
                </p>
                </div>
                
            </div>
    </div>

    <div class="container-card-valeurs">
            <h2>Nos valeurs</h2>
            <p>
                Dans l'optique de devenir l'une des meilleures ecole de formation africaine, NaN se fonde sur ces 
                expériences en tant qu’ école semi-gratuite
            </p>
            <div class="card-content">
                <div class="card-content-un">
                     <div class="card-content-card">
                        <div class="image">
                          <img src="@/assets/apropos/equality.svg" alt="">
                        </div>
                        <span>
                            POUR TOUS, POUR TOUTES
                        </span>
                        <p>
                            Tout le monde peut apprendre à coder et en faire son métier. Nous refusons 
                            les stéréotypes de genre, facilitons la venue de profils atypiques, 
                            en reconversion ou de milieux défavorisés, et luttons au quotidien contre les discriminations.
                        </p>
                     </div>
                   
                     <div class="card-content-card">
                        <div class="image">
                            <img src="@/assets/apropos/no-certificate.svg" alt="">
                        </div>
                        <span>
                          AUCUN DIPLÔME REQUIS
                        </span>
                        <p>
                          La sélection d’entrée à 42 est un test de positionnement qui ne repose ni sur 
                          un dossier scolaire, ni sur un test standard, ni encore sur des diplômes obtenus
                           ou non. Nous proposons à la place aux candidats et aux candidates qui ont validé
                            les premières étapes d’admission de passer un mois avec nous pour découvrir notre
                             mode de fonctionnement.
                        </p>
                     </div>
                </div>

                <div class="card-content-un">
                    <div class="card-content-card">
                       <div class="image">
                        <img src="@/assets/apropos/teacher.svg" alt="">
                       </div>
                       <span>
                            PAS DE PROFS. PAS DE CLASSES
                       </span>
                       <p>
                           Grâce à sa pédagogie innovante, NAN est en mesure de proposer une formation d’excellence sans avoir
                            recours à des cours magistraux. L’équipe pédagogique accompagne les étudiants et les étudiantes 
                            dans la recherche de leurs propres solutions. Pour progresser à NaN, il faut travailler en groupe,
                             faire appel à la communauté pour se dépasser puis partager ses enseignements avec ses camarades. 
                       </p>
                    </div>
                  
                    <div class="card-content-card">
                       <div class="image">
                           <img src="@/assets/apropos/programming.svg" alt="">
                       </div>
                       <span >
                            PAS BESOIN DE SAVOIR DÉJÀ CODER
                       </span>
                       <p>
                        La formation à NaN part de zéro pour tous les étudiants et toutes les étudiantes. Il n’est pas nécessaire
                         d’avoir déjà programmé pour postuler à NaN.
                       </p>
                    </div>
               </div>
                
            

            </div>
    </div>
    <div class="newletter">
 
      <h2 class="newletterH2">Inscrivez-vous à la newsletter</h2>
      <p>
        Soyez le premier à être informé des nouveautés et des actualités de NaN Digital academy.
      </p>
      <form action="">
        <input id="input" type="email" placeholder="Entrez votre email">
        <button id="button"> S'ABONNER</button>
      </form>







    </div>

  </div>
</template>

<script>
import Header from '@/components/Accueil/header.vue'
export default {
  components:{
    Header
  },
  data() {
    return {
      slides:[
          "ImagesAccueil/im3.jpg",
          "https://images.unsplash.com/photo-1665686304312-16e3a16be0ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
          
      ],
      textes: [      
          'Un environnement motivant et inspirant',
          'Coder pour devenir des professionnelles en programmation',
      ],
      titres: [
          'Un cadre agréable',
          'Apprendre le code ',
      ],
    }
  },

}
</script >

<style scoped>
.container-Apropos{
  max-width: var(--max-width);
    margin: 0 auto;
    /* border: 1px solid red;  */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-card{
    margin: 30px 0;
    width: 100%;
    height: 350px;
    background-color:var(--bg2) ;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.card-image{
    border: 5px solid var(--blanc);
    height: 100%;
    /* width: 30%; */
}
.card-image img{
    width: 100%;
    height: 100%;
}
.card-body{
    /* border: 1px solid rgb(0, 255, 238); */
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--blanc);
}
.card-body .texte ,.texte1{
  padding:  20px;
  /* border: 1px solid red; */
}
.card-body span{
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
}

@media (max-width:800px) {
  .card-body .texte1 {
      padding:  10px;
      font-size: 16px;
    }
}

@media (max-width:650px) {
    .container-card{
        flex-direction: column;
        height: auto;
        align-items: center;
        padding: 8px;
    }
    h2{
      font-size: 18px;
    }
    .card-body .texte1 {
     width: 560px;
    }

    .card-body{
       
        max-width: 400px;
        width: 98%;
    }
  
    .card-image img{
        max-width: 400px;
        width: 98%;
    }
}

@media (max-width:560px) {

  .card-body .texte1 {
      font-size: 14px;
      padding: 6px;
       width: auto;
    }

}

/* card fin  mission */

.container-card-valeurs{
    margin: 30px 0;
    width: 100%;
    background-color:var(--bg2) ;
    display: flex;
   flex-direction: column;
   align-items: center;
    padding: 10px;
    color: var(--blanc);
    text-align: center;
    border-radius: 5px;
}

.container-card-valeurs h2{
  padding: 20px 10px;
}
.card-content{
    /* border: 1px solid red; */
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
}

.card-content-un{
    /* border: 1px solid rgb(0, 255, 47); */
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

}
.card-content-card{
    border: 1px solid var(--violet);
    max-width: 400px;
    width: 98%;
    height: 300px;
    padding: 10px;border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    box-shadow: 0 2px 5px hsl(242deg 88% 66%);
   
}
.card-content-card p{
  font-size: 16px;
}
.card-content-card span{
  font-weight: bold;

}
.image{
    /* border: 1px solid rgb(0, 255, 47); */
    width: 80px;
    /* height: 100px;  */
    position: absolute;
    top: -50px;
}
.image img{
  width: 100%;
    height: 100%; 
}

@media (max-width:1085px) {
    .card-content{
        width: 85%;
    }
}

@media (max-width:1028px) {
    .card-content {
        width: 90%;
    }
}

@media (max-width:971px) {
    .card-content-card{
        margin-left: 10px;
    }
}
@media (max-width:817px) {
  .card-content-card p{
  font-size: 15px;
}
}

@media (max-width:768px) {
    .card-content-un{
        flex-direction: column;
        margin-top: 0px;
    }
    .card-content-card p{
  font-size: 15px;
}
    .card-content-card{
        margin-top: 60px;
    }
}
@media (max-width:480px) {
    .card-content{
        width: 100%;
    }
    .card-content-card span{
      font-size: 13px;
    }
    .card-content-card p{
      font-size: 14px;
    }
}
 

/* newletter */
.newletter{
    margin: 30px 0;
    width: 100%;
    height: 35vh;
    background-color:var(--bg2) ;
    display: flex;
   flex-direction: column;
   align-items: center;
    padding: 30px;
    color: var(--blanc);
    text-align: center;
    justify-content: space-evenly;
    border-radius: 5px;
}
form{
  /* border: 1px solid blue; */
  padding: 10px;
  width: 100%;

}

#input{
  max-width: 450px;
  width: 98%;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 20px;
  outline-color: var(--violet);
}
#button{
  
    text-transform: uppercase;
    font-weight: 700;
    padding: 12px 32px;
    border-radius: 4px;
    font-size: 14px;
    display: inline-block;
    line-height: 1.2;
    text-align: center;
    cursor: pointer;
    border: none;
    background-color: var(--violet);
    color: var(--blanc);
   
}

@media (max-width:699px) {

  .newletter{
    padding: 15px;
  }
  .newletterH2{
    font-size: 1.2rem;
  }
  .newletter p{
    font-size: 16px;
  }
  .newletter  #input{
    padding: 10px 22px;

  }
.newletter  #button{
    margin-top: 20px;
    padding: 10px 30px;
    font-size: 12px;
  }

}

</style>