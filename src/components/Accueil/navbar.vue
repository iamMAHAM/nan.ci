<template>
    <nav class="Acc-nav">
        <div class="container-nav">
          <a href="" class="logo"><img src="@/assets/ImagesAccueil/logoN.png" alt=""></a>
          <ul class="Acc-menu">
            <li><router-link to="/" class="Acc-lien">Accueil</router-link></li>
            <li><router-link to="/formations" class="Acc-lien">Nos Formations</router-link></li>
            <li><router-link to="/admission" class="Acc-lien">Admission</router-link></li>
            <li><router-link to="/naniens" class="Acc-lien">Naniens</router-link></li>
            <li><router-link to="/parent" class="Acc-lien">Parent</router-link></li>
            <li><router-link to="/apropos" class="Acc-lien">A propos</router-link></li>
            <div class="Acc-cadenas">
              <a href="https://classe.nan.ci" class="Acc-boutton" target="_blank">
                <i class="fas fa-lock"></i>Accés aux Cours
              </a>
            </div>
          </ul>
          <div class="Acc-cadenas">
            <a href="https://classe.nan.ci" class="Acc-boutton" target="_blank">
              <i class="fas fa-lock"></i>Accés aux Cours
            </a>
          </div>
          <div class="burger">
            <div class="line1"></div>
            <div class="line1"></div>
            <div class="line1"></div>
          </div>
        </div>
    </nav>  
</template>

<script>
export default {
    name:'NavBar',
    data(){
        return{

        }
    },methods: {
        
    },
    setup(){
      document.addEventListener('DOMContentLoaded',()=>{
        const scrolle = document.querySelector(".Acc-nav");
        const burger = document.querySelector('.burger')
        const Navmenu = document.querySelector('.Acc-menu')

        window.addEventListener('scroll', () => {
          if (window.scrollY >= 50) {
            scrolle.classList.add('Acc-nav_active');
          }else {
            scrolle.classList.remove('Acc-nav_active');
          }
        })
        burger.addEventListener('click',() =>{
          burger.classList.toggle("burger-active")
          Navmenu.classList.toggle("Acc-menu-active")
        })
      })
    }

}
</script>

<style>

.Acc-nav {
    /* background-color: #222222; */
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: all 0.3s ease-in-out;
   
}
.Acc-nav_active{
    /* background-color:var(--noir); */
    background-color:var(--blanc);
    transition: 0.5s ease-in;
    box-shadow: var(--shadow-medium);
}


.Acc-menu >.Acc-cadenas {
  display: none;
}
.Acc-nav.Acc-nav_active .Acc-menu >.Acc-cadenas{
  display: block;
}

.Acc-nav.Acc-nav_active .container-nav > .Acc-cadenas{
  display: none;
}

.container-nav{
    margin: 0 auto;
    max-width: var(--max-width);
}
.logo img{
    height: 50px;
    width: 50px;
    border: none;
}

.Acc-nav .container-nav{
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    transition: all 0.3s ease-in-out;
}
.Acc-nav .container-nav ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style-type: none;
}

.Acc-nav a {
    color: var(--blanc); 
    padding: 7px 15px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
}
.Acc-nav_active a{
    color:var(--bg2);

}
.Acc-nav a::before{
    content: '';
    position:absolute;
    width: 100%;
    height: 2px;
    background: var(--noir);
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;

}
.Acc-nav.active {
    background-color: var(--blanc);;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.Acc-nav.active a {
    color: var(--noir);
}

.Acc-nav.active .container-nav {
padding: 10px 0;
}

.Acc-lien:hover{
    color: var(--violet);
     
}
.Acc-cadenas i{
    margin-right: 15px;
}
.Acc-boutton{
    height: 45px;
    background: var(--violet);;
    border-radius: 6px;
    color: var(--blanc);
    font-weight: bold;
}
.Acc-nav_active .Acc-boutton{
    color: var(--blanc);
}
.Acc-boutton:hover{
    color: var(--blanc);
    font-weight: bold;
}
.burger{
    margin-top: 5px;
    cursor: pointer;
    display: none;
}
.burger div{
    width: 25px;
    height: 5px;
    margin: 5px;
    background-color: var(--blanc);

}
.Acc-nav_active .burger div{
    background-color: var(--bg2);
}
@media (max-width:768px) {
    .burger{
        margin-top: -3px;
        display: block;
        margin-right: 42px;
    } 
    .burger.burger-active .line1:nth-child(2){
        opacity: 0;
    }
    .burger.burger-active .line1:nth-child(1){
        transform: translateY(10px) rotate(45deg);
    }
    .burger.burger-active .line1:nth-child(3){
        transform: translateY(-9px) rotate(-45deg);
    }
    .Acc-menu{
        position: fixed;
        left: 0px;
        top:-100% ;
        gap: 6;
        display: flex;
        flex-direction: column;
        background-color:var(--respon);
        width: 100%;
        text-align: center;
        transition:  0.3s;
        margin-top: 108px;
    }
    .Acc-nav_active .Acc-menu{
        position: fixed;
        left: 0px;
        top:-100% ;
        gap: 6;
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 1);
        width: 100%;
        text-align: center;
        transition:  0.3s;
        margin-top: 108px;
        /* color: var(--bg2); */


    }
    li{
        margin: 16px 0;
    }
    .Acc-menu.Acc-menu.Acc-menu-active{
        top: 0; 
    }
     
    
}


</style>