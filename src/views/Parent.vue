<template>
  <Header :slides="slides" :textes="textes" :titres="titres" :height="60"/>
   <Parents_idn />
   <div class="parent_Etudiant">
     <ParentEtudiant />
     <parent-parcours />
   </div>
   

</template>

<script>
import Parents_idn from '@/components/componentParent/Parents_idn.vue'
import ParentParcours from '@/components/componentParent/ParentParcours.vue'
import ParentEtudiant from '@/components/componentParent/ParentEtudiant.vue'
import Header from '@/components/Accueil/header.vue'
export default {
  components: { Parents_idn, ParentEtudiant, ParentParcours, ParentEtudiant, Header },
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
    }
  }

}
</script>

<style scoped>
.parent_Etudiant{
  position: relative;
   background-color: var(--bg);
   width: 100%;
   height: 100vh;
   object-fit: cover;  
}
</style>