<template>
  <div
    class="loader"
    :style="{
        width: width + 'px',
        height: height + 'px',
        background: bg
    }"
  >
    <img
      src="@/assets/ImagesAccueil/logoN.png"
      alt="logo de nan"
      class="rounded"
    >
  </div>
</template>
<script>
export default {
  name: 'loader',
  props: ['width', 'height', 'bg']
}
</script>
<style>
  .rounded {
    -webkit-animation: rounded 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
    animation: rounded 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
  }

  div.loader{
    margin: 10px auto;
    display: flex;
    width: max-content;
    z-index: 999;
    justify-content: center;
    align-items: center;
  }

  div.loader img{
    width: 100%;
    height: 100%;
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