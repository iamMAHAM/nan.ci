<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="80" />
    <Corps />
  </div>
</template>

<script>
import Header from "../components/Accueil/header.vue";
import Corps from "../components/Accueil/corps.vue";
export default {
  name: 'Accueil',
  data() {
        return {
            slides:[
                "ImagesAccueil/im2.jpg",
                "ImagesAccueil/im3.jpg",
                "ImagesAccueil/im4.jpg",
                "ImagesAccueil/im6.jpg",
               
            ],
            textes: [      
                ` Travailler avec le sourire et sans stress, c'est sourire à l'avenir`,
                'Un environnement motivant et inspirant',
                'Coder pour devenir des professionnelles en programmation',
                '',
                

            ],
            titres: [
               'Une Pédagogie inspirée de 42',
               'Un cadre agréable',
               'Apprendre le code ',
               'NaN forme des professionnelles',
            ]
        }
    },
  components:{
    Header,
    Corps
  }
}
</script>
