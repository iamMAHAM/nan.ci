<template>  
    <div>
        <Carousel
          :slides="slides"
          :interval="5000"
          :textes="textes"
          :titres="titres"
          indicators
          class="carou"
          :style="{
            height: height + 'vh'
          }"
        />
    </div>
</template>

<script>
import Carousel from '@/components/Accueil/banner/carousel.vue'
import navbarComponent from "@/components/Accueil/navbar.vue";
export default {
    name:'headerComponent',
    props: ['slides', 'textes', 'titres', 'height'],
    components:{
        navbarComponent,
        Carousel
    },
    methods: {
        
    },
   
}
</script>

<style>

.Acc-headd{
    z-index: 999;
}
.carou{
    object-fit: cover;
}

  
</style>