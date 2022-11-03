<template>
  <div class="index-container">
    <StudentCard />
    <Parcours />
  </div>
</template>
<script>

import StudentCard from './Card.vue';
import Parcours from './Parcours.vue'

export default {
  name: 'index',
  components:{
    StudentCard,
    Parcours
  }
}
</script>
<style>
.index-container{
  text-align: center;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
}

</style>