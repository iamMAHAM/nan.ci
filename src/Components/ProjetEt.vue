<template>
    
    <div class="casse">
      <div class="casse1">
        <h2> 📂 - Santé</h2>
      </div>
       <div class="casse1">
         <h2><span>3/</span>10</h2>
       </div>
        <div class="casse1">
          <h2><span>13</span>ème/90</h2>
        </div>
         <div class="casse1">
           <h2>Janvier</h2>
         </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.casse{
  width: 100%;
  border: 1px solid black;
  height: 200px;
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
}
.casse .casse1{
border: 1px solid black;
width: 220px;
height: 100px;
margin: auto auto;
}
.casse1>h2{
  text-align: center;
  margin: 30px auto;
}
</style>