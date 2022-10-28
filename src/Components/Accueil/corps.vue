<template>
    <div class="Acc-corps">
        <div class="corps-titre">
            <h2>Le Programme</h2>
            <p>
                <span>Nan</span>, c’est une formation en informatique d’excellence pour tous et toutes. 
                Au programme de cette école différente et innovante: une approche par projets pour progresser et développer 
                descompétences techniques et humaines recherchées sur le marché du travail.

            </p>
            <div class="corps-pro">
                <div class="coprs-pro1">
                    <img src="@/assets/ImagesAccueil/teacher-white11.svg" alt="">
                    <p>PAS DE COURS , PAS DE PROFS , PAS DE CLASSE.</p>
                </div>
                <div class="coprs-pro1">
                    <img src="@/assets/ImagesAccueil/projects-white11.svg" alt="">
                    <p>UNE PÉDAGOGIE PAR PROJETS</p>
                </div>
                <div class="coprs-pro1">
                    <img src="@/assets/ImagesAccueil/peer-to-peer-white11.svg" alt="">
                    <p>UN APPRENTISSAGE PEER-TO-PEER</p>
                </div>
                <div class="coprs-pro1">
                    <img src="@/assets/ImagesAccueil/elearning.svg" alt="">
                    <p>UN APPRENTISSAGE EN LIGNE</p>
                </div>
                <div class="coprs-pro1">
                    <img src="@/assets/ImagesAccueil/books.svg" alt="">
                    <p>LES BATTLES</p>
                </div>
            </div>
        </div>
        <div class="corps-val">
            <div class="corps-val1">
                <h2>Nos Valeurs</h2>
                <p>
                    La position de NaN est unique en Côte d’ivoire 
                     de l’enseignement supérieur : elle repose sur des valeurs fortes pour une insertion professionnelle durable sur le marché de l’emploi.
                </p>
                <a href="">Concept Unique</a>
            </div>
            <div class="corps-val2">
                <div class="corps-val21">
                    <div class="corps-val211">
                        <img src="@/assets/ImagesAccueil/no-money-grey.svg" alt="">
                        <p>GRATUITE</p>
                    </div>
                    <div class="corps-val211">
                       <img src="@/assets/ImagesAccueil/certificate.png" alt="">
                        <p>POUR TOUS, POUR TOUTES</p>
                    </div>
                </div>
                <div class="corps-val21">
                    <div class="corps-val211">
                       <img src="@/assets/ImagesAccueil/no-certificate-grey.svg" alt="">
                        <p>AUNCUN DIPLÔME REQUIS</p>
                    </div>
                    <div class="corps-val211">
                       <img src="@/assets/ImagesAccueil/programming-grey.svg" alt="">
                        <p>PAS BESOIN DE SAVOIR DÉJA CODER OU D'AIMER LES MATHS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"corpsComponent"

}
</script>

<style scoped>
.Acc-corps{
  
    
    
}
.corps-titre{
  max-width: var(--max-width);
  margin: 47px auto;
  height: 450px;
  /* border: 1px solid red; */
  /* border: 1px solid blue; */

}
.corps-titre h2{
    text-align: center;
    padding: 20px;
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    color: var(--blanc);
    text-transform: uppercase; 
}
.corps-titre span{
    color: var(--blanc);
    font-weight: bold;
    font-size: 30px;
}
.corps-titre p{
    text-align:left;
    letter-spacing: 2;
    line-height: 41px;
}
.corps-pro{
    display: flex;
    margin-right: -17px;
}
.coprs-pro1{
    border: 1px solid var(--violet);
    margin-top: 60px;
    margin-right: 20px;
    text-align: center;
    width: 250px;
    color: var(--violet);
    padding: 10px;
    animation: rotate 5000ms infinite;
}
.coprs-pro1 img{
    height: 70px;
    width: 70px;
    color: var(--violet);
    
}
.coprs-pro1 p{
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    line-height: 30px;
}
@keyframes rotate {
    50% {
      box-shadow: 0 0 1em 0.5em var(--violet);
    }
}
.corps-val{
    max-width: var(--max-width);
    margin: 47px auto;
    /* border: 1px solid red; */
    height: 500px;
    background-color: var(--bg2);
    border-radius: 20px;
    display: flex;
}
.corps-val1{
    background-color: var(--blanc);
    /* height: 400px; */
    width: 500px;
    margin: 50px 0 50px 50px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: space-evenly;
    border-radius: 30px;

}
.corps-val2{
    /* background-color: var(--blanc); */
    /* height: 400px; */
    width: 500px;
    margin: 50px; 
    border-radius: 30px;   
}
.corps-val21{
    display: flex;
    /* margin-top: 20px; */
}
.corps-val211{
    height: 180px;
    width: 250px;
    background-color: var(--blanc);
    margin:30px;
    padding-top: 20px;
    text-align: center;
    border-radius: 15px;
    color: var(--noir);
   
}
.corps-val211 img{
    height: 75px;
   
}
.corps-val211 p{
    padding-top: 20px;
   text-align: center;
    color: var(--bg);
    font-size: 16px;

}
.corps-val1 h2{
    font-size: 30px;
    color: var(--bg);
}
.corps-val1 p{
    color: var(--noir);
    text-align: justify;
    line-height: 29px;

}
.corps-val1 a{
    padding: 10px;
    background-color: var(--violet);
    text-decoration: none;
    color: var(--blanc);
    width: 150px;
    border-radius: 10px;
    font-weight: bold;
    
}
@media (max-width:768px) {
    .corps-titre{
        height: 450px;
    }
    .corps-titre span{
        font-size: 23px;
    }
    .corps-titre p{
        text-align: center;
        font-size: 17px;   
    }
    .corps-pro{

    }
    .coprs-pro1{
        border: none;
        animation: none;
        width: 180px;
        margin-right: none;
        
    }
    .coprs-pro1 img{
        height: 50px;
        width: 50px;
        color: var(--violet);
    }
    .coprs-pro1 p{
        font-size: 11px;
    }
    .corps-val{
        display: flex;
        flex-direction: column;
        margin: 0 0px 0 20px;
        height: 100vh;
    }
    .corps-val1{
        width: 85%;
        height: 1000px;
       
    }
    .corps-val2{
        width: 85%;
        height: 1000px;
    }

    
}


</style>