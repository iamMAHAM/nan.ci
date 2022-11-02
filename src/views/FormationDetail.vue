<template>


  <div class="container1">
    
    <div  class='card_1'>
        <h2>{{formation.nom}} </h2>
        
        <p>{{formation.contenu}}</p>
    </div>
  
    <div class="card_2">
      <div class="box">
          <h2>{{formation.nom2}} </h2>
          <p>{{formation.contenu2}}</p>
      </div>
      <div class="box">
           <h2>{{formation.nom3}}</h2>
           <p>{{formation.contenu3}}</p>
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
    <button
      v-for="titre in titres"
      :key="titre"
      :title="JSON.stringify(formation.etapes[titre])"
      @click="changeData"
    >
      {{ titre}}
    </button>
   
   </div>
  <div class='card_etape'>
    <div class='card_etape1'>
      <p>Dans ce module ce que vpous apprendrez,les bases du langage javascript,entre autres:</p>
      <li
        v-for="point in current?.points"
        :key="point"
      >
        {{ point }}
      </li>
      <!-- <li>Qu'es ce que le javascript, les variables,</li> 
      <li>Qu'es ce que le javascript, les variables,</li> 
      <li>Qu'es ce que le javascript, les variables,</li>  -->
    </div>
    <div class="card_etape2" >
      <p>ce que vous allez realiser en pratique</p>
      <p>{{ current?.titre}}</p>
  
    </div>
    
  </div>
</div>
  
  
    
  </template>
  
  <script>
  export default {
  props:["specialite"],
    data() {
      return {
       formation:"",
       titres:[],
       current: {}
      }
    },
    methods:{
      changeData(e){
        this.current = JSON.parse(e.target.title)
        console.dir((this.current))
      }
    },

    mounted() {
      fetch(`http://192.168.88.15:3001/api/specialities/${this.specialite}`)
      .then(res => res.json())
      .then(data => {
        console.log("vklnrkier")
        console.log(data.data.etapes)
        this.formation= data.data

        const vals  = Object.entries(data.data.etapes)
        vals.forEach(val => {
          console.log(val)
            this.titres.push(val[0])
            console.log('titre : ', val[0], 'value :  ', val[1])
        })
      })
      .catch((error) =>{
        console.log(error)
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