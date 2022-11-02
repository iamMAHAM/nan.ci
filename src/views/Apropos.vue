<template>
  <div class="container-Apropos">
    <h1>A PROPOS DE NOUS</h1>
    <div class="container-card">
            <div class="card-image">
                <img src="@/assets/ImagesAccueil/im3.jpg" alt="">
            </div>
            <div class="card-body">
                <h2 class="texte">Qui sommes-nous?</h2>
                <p class="texte1">
                    NaN est une école,une académie de formation aux métiers de développeur web, développeur Mobile,  Reseaux-voix et Makerting Digital
                    L’école met l’accent sur les projets et le travail de groupe plutôt que sur l’enseignement théorique.Un concentré de nouveautés
                     pédagogiques pour permettre aux talents de demain de se révéler.
                </p>
            </div>
    </div>

    <div class="container-card">
            <div class="card-image">
                <img src="@/assets/ImagesAccueil/im3.jpg" alt="">
            </div>
            <div class="card-body">
                <h2 class="texte">Notre vision</h2>
                <p >OFFRIR UNE FORMATION DÈS AUJOURD’HUI POUR DEMAIN</p>
                
                <p class="texte1">
                   Depuis sa création en 2016, NaN a toujours eu à cœur de proposer la meilleure formation
                    en informatique au plus grand nombre avec des méthodes de travail innovantes. La vision
                     de NaN repose sur ce que doit être l’avenir de l'Afrique francophone. L'Afrique doit 
                     devenir un des endroits de la terre où il fait le mieux-vivre.
                </p>
            </div>
        </div>

  </div>
</template>

<script>
export default {

}
</script >

<style scoped>
.container-Apropos{
  max-width: var(--max-width);
    margin: 0 auto;
    border: 1px solid red; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-card{
    margin: 30px 0;
    width: 100%;
    height: 350px;
    background-color:var(--bg2) ;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.card-image{
    /* border: 1px solid blue; */
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
    color: white;
}
.card-body .texte ,.texte1{
  padding:  20px;
  border: 1px solid red;
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
    }

    .card-body{
       
        max-width: 400px;
        width: 98%;
    }
    .card-body  .texte1{
        padding: 0 20px;
    }
    .card-image img{
        max-width: 400px;
        width: 98%;
    }
}

 

</style>