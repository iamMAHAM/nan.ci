<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components:{
    
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@100;200;300;400;800&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,100&family=Roboto:ital,wght@0,100;0,300;0,400;0,900;1,100;1,900&display=swap');

  :root{
    --violet: #6870E0;
    --blanc: #fff;
    --bg: #1E2029;
    --bg2: #262935;
    --noir: #000;
    --max-width:1140px;
  }

  body{
    font-family: 'Roboto', sans-serif;
    background: var(--bg);
  }
</style>