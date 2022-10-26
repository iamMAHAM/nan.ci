<template>
  <div>
    <div class="naniens-container">
      <Card :info="info"/>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Naniens/Card.vue';
export default {
  name: 'naniens',
  components: {
    Card
  },
  data(){
    return {
      info: {
        fullName: 'KABORE ABDUL MAHAMOUDOU',
        speciality: 'javascript',
        profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
        linkedinUrl: 'https://linkedin.com',
        githubUrl: 'https://github.com',
        portfolioUrl: 'https://me.com',
        generation: 5.22,
        isBusy: '',
        skills: {
          frontEnd: ['html', 'vue', 'react'],
          backEnd: ['express', 'node'],
          databases: ['mongo', 'mysql']
        }
      },
    }
  }
}
</script>
<style>
  
</style>