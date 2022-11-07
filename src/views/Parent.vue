<template>
  <Header :slides="slides" :textes="textes" :titres="titres" :height="60"/>
  <Auth v-if="!isLogged" @logged="displayUser"/>
   <div class="parent_Etudiant" v-else>
    <Index :userInfo="userInfo"/>
   </div>
</template>

<script>
import Auth from '@/components/Parents/Auth.vue'
import Index from '@/components/Parents/Index.vue'
import Header from '@/components/Accueil/header.vue'
export default {
  components: {
    Header,
    Auth,
    Index,
},
  data(){
    return {
      slides:[
          "ImagesParents/etudiantes.jpg",
          "ImagesParents/n321.jpg",
      ],
      textes: [      
          `Consulter la progression de votre enfant`,
          'Voir ses notes et ses projets',
          '',
      ],
      titres: [
          'Espace Parent',
          'Controle',
      ],
      isLogged: false,
      userInfo: {}
    }
  },
  created(){
    const user = JSON.parse(sessionStorage.getItem('nanien'))
    if (user){
      console.log(user)
      this.isLogged = true
      this.userInfo = {...user}
      return
    }
    this.isLogged = false
  },
  methods: {
    displayUser(data){
      sessionStorage.setItem('nanien', JSON.stringify({...data}))
      this.userInfo = {...data}
      this.isLogged = true
    }
  }

}
</script>

<style scoped>
.parent_Etudiant{
  position: relative;
   background-color: var(--bg);
   width: 100%;
   min-height: 100vh;
   height: auto;
   object-fit: cover;  
}
</style>