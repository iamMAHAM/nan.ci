<template>
  <div class="Etudiant_infos_plus">
        <div class="infos_plus1">
            <img src="../assets/ImagesParents/jeshoots-com-9n1USijYJZ4-unsplash.jpg" alt="">
            <h1>Janvier</h1>
        </div>
        <div class="infos_plus1">
          <div class="infos_data"><p>quizs passed :<span>11/11</span></p></div>
           <div class="infos_data"> <p>totalQuizsPercent :<span>939.17</span></p></div>
            <div class="infos_data"> <p>totalQuizsSeconds :<span>567</span></p></div>
             <div class="infos_data"><p>totalQuizsPoints :<span>11.5</span></p></div>
              <div class="infos_data"><p>Total points :<span>11.5</span></p></div>
            <div class="infos_data"><p>Rank :<span>10ème</span></p></div>
        </div>
    </div>
   
    
</template>

<script>
export default {

}
</script>

<style scoped>
 .Etudiant_infos_plus{
  background-color: var(--blanc);
  position: relative;
  z-index: 1;
  margin: 32px auto;
  max-width: 800px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  padding: 8px 10px;
  font-size: 16px;
  border: none;
  box-shadow: 0 10px 35px rgba(50,50,93,.1),0 2px 15px rgba(0,0,0,.07);
  border-radius:10px ;
}
.infos_plus1{
    width: 400px;
    height: 300px;
    margin: 10px 70px;
   color: black;
}
.infos_plus1>img{
    width: 300px;
    height: 260px;
    box-shadow: 0 10px 35px rgba(50,50,93,.1),0 2px 15px rgba(0,0,0,.07);
}
.infos_plus1>h1{
    position: absolute;
    color: aliceblue;
    left: 25%;
    top: 45%;
    transform: translate(-50%,-50%);
    font-size: var(--titre);
}
.infos_plus1 .infos_data{
  box-shadow: 0 10px 35px rgba(50,50,93,.1),0 2px 15px rgba(0,0,0,.07);
   padding: 1px 1px;
   width: 280px;
}
p{
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  color: black;
  
}


</style>