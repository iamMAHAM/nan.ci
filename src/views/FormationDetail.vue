<template>


  <div class="container1">
    
    <div  class='card_1'>
        <h2>javascript</h2>
        <p>
  JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les technologies HTML et CSS, JavaScript est parfois considéré comme l'une des technologies cœur du World Wide Web3. Une grande majorité des sites web l'utilisent4, et la majorité des navigateurs web disposent d'un moteur JavaScript5 dédié pour l'interpréter, indépendamment des considérations de sécurité qui peuvent se poser le cas échéant.
  </p>
    </div>
  
    <div class="card_2">
      <div class="box">
          <h2>Node js</h2>
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
   <h2>Consulter le programme de notre formation, etape par etape</h2>
   <div class='etape'>
    <div class="etape1"><h2>etape1</h2></div>
    <div class="etape2"><h2>etape2</h2></div>
    <div class="etape3"><h2>etape3</h2></div>
    <div class="etape4"><h2>etape4</h2></div>
    <div class="etape5"><h2>etape5</h2></div>
    <div class="etape6"><h2>etape6</h2></div>
    <div class="etape7"><h2>etape7</h2></div>
    <div class="etape8"><h2>etape8</h2></div>
   </div>
  <div card_etape>
    <div class='card_etape1'>
    <h2>Dans ce module ce que vpous apprendrez,les bases du langage javascript,entre autres:</h2>
     <p>Qu'es ce que le javascript, les variables,</p>
     <p>les conditions, les structure itéractives </p>
     <p>les types de variables, les fonctions, les objets</p>
    </div>
    <div class="card_etape2" >
      <h2>ce que vous allez realiser en pratique</h2>
      <p>Javascript basics</p>
  
    </div>
  
  </div>
  
  
  
    
  </template>
  
  <script>
  export default {
  
  }
  </script >
  
  <style scoped>
  
  .container1{
   width: var(--max-width); 
   background: var(--bg);
   margin: 0 auto;
   
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
  height: 351px;
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
 padding-left: 3em;
 padding-right: 3em;
 display: flex;
 justify-content: center;

  }

  
  
  
  
  
  </style>