<template>
    <!-- in vue 2.x you need wrap these buttons in a div -->
    <i class="fas fa-arrow-right" @click="$emit('prev')"></i>
    <i class="fas fa-arrow-left" @click="$emit('next')"></i>
    <!-- <i class="carousel-control cleft material-symbols-outlined" @click="$emit('prev')">arrow_back_ios</i> -->
    <!-- <i class="carousel-control cright material-symbols-outlined" @click="$emit('next')">arrow_forward_ios</i> -->
  </template>
  
  <script>
  export default {
    emits: ["prev", "next"], // vue v3
  };
  </script>
  <style scoped>
  .carousel-control {
    opacity: 0;
    padding: 1rem;
    font-size: 25px;
    border: none;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: calc(50% - 25px);
    color: var(--bg);
    background: var(--blanc);
    cursor: pointer;
  }
 .fas{
    position: absolute;
    font-weight: 900;
    font-size: 40px;
    color: var(--blanc);
    top: 40%;
    background-color: var(--bg);
  
    background-color:   #13151b72;
    margin: 40px;
    border-radius: 50%;
    padding: 10px;

 }
 .fa-arrow-right{
    right: 0;
 }
  </style>