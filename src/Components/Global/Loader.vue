<template>
  <div class="loader">
    <img src="@/assets/ImagesAccueil/logoN.png" alt="logo de nan" class="rounded">
  </div>
</template>
<script>
export default {
  name: 'loader',

}
</script>
<style scoped>
  .rounded {
    -webkit-animation: rounded 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
    animation: rounded 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
  }

  div.loader{
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
  }

  @-webkit-keyframes rounded {
    0% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(-180deg);
              transform: rotateY(-180deg);
    }
  }
  @keyframes rounded {
    0% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(-180deg);
              transform: rotateY(-180deg);
    }
  }

</style>