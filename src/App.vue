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
    --vert: #00ec64;
    --rouge: #EC0000;
    --respon: hsl(240deg 7% 97% / 60%);
    --lnblue: #0b65c2;
    --jaune: #f7e017;
    --max-width: 1140px;
    --titre: 35px;
    --paragraphe: 18px;
    --radius: 8px;
    --shadow-small: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
   --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Roboto', sans-serif;
    background: var(--bg);
  }

  p{
    font-size: var(--paragraphe);
    letter-spacing: .5px;
    color: var(--blanc);
  }

  h1{
    color: var(--blanc);
    padding: 20px;
    font-size: var(--titre);
    margin: 20px 0;
  }
</style>