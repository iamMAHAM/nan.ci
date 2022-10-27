<template>

    
    
    <div>
        <navbarComponent class="Acc-headd"/> 
        <Carousel :slides="slides" :interval="3000" controls indicators class="carou"></Carousel>

    </div>


</template>

<script>
import Carousel from '@/components/Accueil/banner/carousel.vue'
import navbarComponent from "@/components/Accueil/navbar.vue";
export default {
    name:'headerComponent', 
    data() {
        return {
            slides:[
                "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
                "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
                "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
                "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
            ],
            
        }
    },
   
    components:{
        navbarComponent,
        Carousel
    },
    methods: {
        
    },
   
}
</script>

<style scoped>

.Acc-headd{
   
    z-index: 999;
}
.carou{
    height: 920px;
   
}
 .Acc-hed img{
    width: 100%;
    height: 1200px;
    object-fit: cover;

}  
</style>