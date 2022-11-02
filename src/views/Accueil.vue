<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="920" />
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
            // slides:[
            //     "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
            //     "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
            //     "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
            //     "https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
            // ],
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
