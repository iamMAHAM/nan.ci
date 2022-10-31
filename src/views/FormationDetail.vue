<template>


  <div class="container1">
    
    <div  class='card_1'>
        <h2>javascript</h2>
        {{specialite}}
        <p>
          JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les technologies HTML et CSS, JavaScript est parfois considéré comme l'une des technologies cœur du World Wide Web3. Une grande majorité des sites web l'utilisent4, et la majorité des navigateurs web disposent d'un moteur JavaScript5 dédié pour l'interpréter, indépendamment des considérations de sécurité qui peuvent se poser le cas échéant.

C'est un langage orienté objet à prototype : les bases du langage et ses principales interfaces sont fournies par des objets. Cependant, à la différence d'un langage orienté objets, les objets de base ne sont pas des instances de classes.

Chaque objet de base (ex : l'objet document ou windows) possède son propre modèle qui lui permettra d'instancier des objets fils à l'aide de constructeurs utilisant ses propriétés. Par exemple, la propriété de prototypage va leur permettre de créer des objets héritiers personnalisés. En outre, les fonctions sont des objets de première classe. Le langage supporte le paradigme objet, impératif et fonctionnel. JavaScript est le langage possédant le plus large écosystème grâce à son gestionnaire de dépendances npm, avec environ 500 000 paquets en août 20176.


  </p>
    </div>
  
    <div class="card_2">
      <div class="box">
          <h2>Node js </h2>
          <p>Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau évènementielles hautement concurrentes qui doivent pouvoir monter en charge. Elle utilise la machine virtuelle V8, la librairie libuv pour sa boucle d'évènements, et implémente sous licence MIT les spécifications CommonJS. Parmi les modules natifs de Node.js, on retrouve http qui permet le développement de serveur HTTP. Ce qui autorise, lors du déploiement de sites internet et d'applications web développés avec Node.js, de ne pas installer et utiliser des serveurs webs tels que Nginx ou Apache. Concrètement, Node.js est un environnement bas niveau permettant l’exécution de JavaScript côté serveur.</p>
      </div>
      <div class="box">
           <h2>Frameworks</h2>
           <p>Un framework (ou infrastructure logicielle en français ) désigne en programmation informatique un ensemble d'outils et de composants logiciels à la base d'un logiciel ou d'une application.
  En javascript, nous avons une multitude de frameworks, les plus utilisés sont React JS , Vue JS et aussi Svelte</p>
      </div>
  
    </div>
  </div>
  
  <div id="image2">
    <img  src="@/assets/formations/barbecue-g82069dcb5_1920.jpg">
     <h1>Ce que vous apprendriez à NaN</h1>
  </div>
  <div class="container1">
   <h2>Consulter le programme de notre formation, etape par etape</h2>
   <div class='etape'>
    <button>etape1</button>
    <button>etape1</button>
    <button>etape1</button>
    <button>etape1</button>
    <button>etape1</button>
    <button>etape1</button>
    <button>etape1</button>
    <button>etape1</button>
   </div>
  <div class='card_etape'>
    <div class='card_etape1'>
      <p>Dans ce module ce que vpous apprendrez,les bases du langage javascript,entre autres:</p>
      <li>Qu'es ce que le javascript, les variables,</li> 
      <li>Qu'es ce que le javascript, les variables,</li> 
      <li>Qu'es ce que le javascript, les variables,</li> 
    </div>
    <div class="card_etape2" >
      <p>ce que vous allez realiser en pratique</p>
      <p>Javascript basics</p>
  
    </div>
    
  </div>
</div>
  
  
    
  </template>
  
  <script>
  import  axios  from "axios";
  export default {
    props:["specialite"],
    data() {
      return {
        
      }
    },
    mounted() {
  axios
  .get(`http://192.168.88.15:3001/api/specialities/${this.specialite}`)
  .then(response =>{ 
console.log(response.data.data)
    // this.formation = response.data.specialities
  })
  .catch((error) =>{
    this.$router.push('/')

  })
}


  }
  </script >
  
  <style scoped>
  
  .container1{
   width: var(--max-width); 
   background: var(--bg);
   margin: 0 auto;
   margin-bottom: 5%;
   
  }
  h2{
    font-size: var(--titre);
    color: var(--blanc);
  }
  .card_1{
   margin-top: 55px;
   width: var(--max-width);
   color:var(--blanc) ;
   background: var(--bg);
   font-size: 1.1em;
  width: 1094px;
  height: 381px;
  left: 90px;
  top: 507px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 5px 8px 12px 2px #6870E0;
  border-radius: 45px;
  }
  .card_1>h2{
    padding-top: 0.7em ;
  padding-left: 5em;
  }
  .card_1>p{
  padding-top: 2em ;
 padding-left: 3em;
 padding-right: 3em;
 display: flex;
 justify-content: center;

  }
  .card_2{
   display: flex;
   gap: 5%; 
  }
  .box{
   margin-top: 55px;
   width: var(--max-width);
   color:var(--blanc) ;
   background: var(--bg);
   width: 521px;
height: 456px;
left: 88px;
top: 1054px;

background: #272935;
box-shadow: 5px 8px 12px 2px #6870E0;
border-radius: 45px;
  }
  .box>h2{
    padding-top: 0.7em ;
  padding-left: 5em;
  }
  .box>p{
    font-size: 1.1em;
  padding-top: 2em ;
 padding-left: 2em;
 padding-right: 2em;
 display: flex;
 justify-content: center;

  }
  img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  #image2{
    position: relative;
   
  }
  #image2>h1{
    font-size: var(--titre);
    position: absolute;
    top: 35%;
    left: 35%;
    
  }
  .container1>h2{
    margin-top: 5%;
    font-size:1.5em;
    margin-bottom: 3%;
  }
  .etape{
    display: flex;
   gap:5%;
    padding-top: 2.5rem;
    width: var(--max-width);
  }
  button{
    background: var(--bg);
    border:1px solid rgb(162, 160, 160);
    color: var(--blanc);
    font-size: 18px;
    padding: 16px;
    border-radius: var(--radius);
    transition-delay: 0.1s;

  }
  button:hover{
background: var(--violet);
color: black;
border: transparent;
cursor: pointer;

  }
  .card_etape{
    margin-top: 48px;
   width: var(--max-width);
   color:var(--blanc) ;
   background: var(--bg);
   font-size: 1.1em;
   width: var(--max-width);
  height: 351px;
  left: 90px;
  top: 507px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 5px 8px 12px 2px #6870E0;
  border-radius: 45px;
  display: flex;
  padding: 60px;
  gap: 13%;
  background: linear-gradient(269.9deg, rgba(104, 112, 223, 0.54) 42.63%, rgba(162, 180, 147, 0) 101.4%);  }
  .card_etape1{
    width: 50%;
  }
  .card_etape1>li{
    padding-top:25px ;
    padding-left:20px ;
    line-height: 45px;
    lighting-color: red;

  }
  .card_etape2>:nth-child(2){
    padding-top: 30%;
    padding-left:10% ;
    font-size: 25px;

  }
  @media only screen and (max-width: 1024px) {
  .card_1{
  width:87%;
  height:55vh;
  margin-left:2%;
  }
  .card_2{
    margin-left:2%;
    width:87%;
  }
  img{
    width: 1100px;
  }
  .container1>h2{
    margin-left: 2%;
  }
  .etape{
    margin-left: 2%;
    width: 90%;
  }
  .card_etape{
   margin-left: 2%;
    width:95%;
  }

    
}
@media only screen and (max-width: 412px){

}

  
  
  
  
  
  </style>