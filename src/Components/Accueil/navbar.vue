<template>
   
    <nav class="Acc-nav">
        <div class="container-nav">
            <a href="" class="logo"><img src="@/assets/ImagesAccueil/logoN.png" alt=""></a>
            <ul>
                <li><a href="" class="Acc-lien current">Accueil</a></li>
                <li><a href="" class="Acc-lien">Nos Formations</a></li>
                <li><a href="" class="Acc-lien">Admission</a></li>
                <li><a href="" class="Acc-lien">Naniens</a></li>
                <li><a href="" class="Acc-lien">Parent</a></li>
                <li><a href="" class="Acc-lien">A propos</a></li>
            </ul>
            <a href="" class="Acc-boutton">Accés aux Cours</a>
        </div>
    </nav>

    
</template>

<script>
export default {
    name:'navbarComponent',
    data(){
        return{

        }
    },methods: {
        
    },
    setup(){
        window.addEventListener("load",()=>{
            const scrolle = document.querySelector(".Acc-nav"); 
            window.addEventListener('scroll', () => {
                    if (window.scrollY >= 50) {
                        scrolle.classList.add('Acc-nav_active');
                    } else {
                        scrolle.classList.remove('Acc-nav_active');
                    }
                })
        })
    }

}
</script>

<style scoped>

.Acc-nav {
    /* background-color: #222222; */
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: all 0.3s ease-in-out;
}
.Acc-nav_active{
    background-color:var(--noir);
    transition: 0.5s ease-in;
    box-shadow: var(--shadow-medium);
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

a.current{
    color: var(--violet);
}
.Acc-lien:hover{
    color: var(--violet);
     
}
.Acc-boutton{
    height: 38px;
    background: var(--violet);;
    border-radius: 6px;
    color: var(--blanc);
}
.Acc-boutton:hover{
    color: var(--blanc)
}


</style>