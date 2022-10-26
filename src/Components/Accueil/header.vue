<template>
  <div>
    
    <div class="Acc-hed">
        <carousel/>
        <!-- <img src="@/assets/ImagesAccueil/nan1.jpg" alt=""> -->
        <navbarComponent/>
    </div>
  </div>

</template>

<script>
import carousel from '@/components/Accueil/banner/carousel.vue'
import navbarComponent from "../Accueil/navbar.vue";
export default {
    name:'headerComponent', 
    components:{
        navbarComponent,
        carousel
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
   
}
</script>

<style scoped>
 .Acc-hed img{
    width: 100%;
    height: 1200px;
    object-fit: cover;

}  
</style>