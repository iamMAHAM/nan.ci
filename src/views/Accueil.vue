<template>
  <div>
    <headerComponent/>
    <corpsComponent/>
  </div>
</template>

<script>
import headerComponent from "../components/Accueil/header.vue";
import corpsComponent from "../components/Accueil/corps.vue";
export default {
  name: 'Accueil',
  components:{
    headerComponent,
    corpsComponent
  }
}
</script>
