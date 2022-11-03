<template>
 
    <div class="table basic">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">FR</span>
            <span class="price">26 000</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">

<li>
  <span class="list-name">Accès à NaN 1 jour par Mois (Battles Day)</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Plateforme E-Learning</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Plateformes d'exercices</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Battle / Hackathon</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Parrains virtuels</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Parrains presentiels</span>
  <span class="icon cross"><i class="fas fa-times"></i></span>
</li>
<li>
  <span class="list-name">Live coding</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Certificat dévellopeur junior</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Stage offert</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>


</ul>
      <div class="btn" @click="redirect"><button>Inscription</button></div>
    </div> 

    <div class="table premium">
      <div class="ribbon"><span>Recommander</span></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">FR</span>
            <span class="price">50 000</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">

        <li>
          <span class="list-name">Accès illimité à NaN</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Plateforme E-Learning</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Plateformes d'exercices</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Battle / Hackathon</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Parrains virtuels</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
        <li>
          <span class="list-name">Parrains presentiels</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Live coding</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Certificat dévellopeur junior</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Stage offert</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>

        
      </ul>
      <div class="btn"  @click="redirect"><button>Inscription</button></div>
    </div>

    <div class="table ultimate">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">FR</span>
            <span class="price">30 000</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">

<li>
  <span class="list-name">Accès à NaN tous les Samedis</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Plateforme E-Learning</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Plateformes d'exercices</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Battle / Hackathon</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Parrains virtuels</span>
  <span class="icon cross"><i class="fas fa-times"></i></span>
</li>
<li>
  <span class="list-name">Parrains presentiels</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Live coding</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Certificat dévellopeur junior</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
  <span class="list-name">Stage offert</span>
  <span class="icon check"><i class="fas fa-check"></i></span>
</li>


</ul>
      <div class="btn"  @click="redirect"><button>Inscription</button>
      
      </div>
    </div>


 
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    redirect(){
      window.location.href = 'https://classe.nan.ci/';
    }
  },

}
</script >

<style scoped>

/* table debut */
.table{
  background: var(--blanc);
  padding: 20px 20px;
  position: relative;
  width: 100%;
  max-width: 330px;
  margin: 0 5px;
  box-shadow: 0 15px 60px rgb(0 0 0 / 50%);
}
.table .price-section{
  display: flex;
  justify-content: center;
}
.table .price-area{
  height: 120px;
  width: 120px;
  border-radius: 50%;
  padding: 2px;
}
.price-area .inner-area{
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 3px solid var(--blanc);
  line-height: 117px;
  text-align: center;
  color: var(--blanc);
  position: relative;
}
.price-area .inner-area .text{
  font-size: 25px;
  font-weight: 400;
  position: absolute;
  top: 35px;
  left: 36px;
}
.price-area .inner-area .price{
  font-size: 26px;
}
.table .package-name{
  width: 100%;
  height: 2px;
  margin: 35px 0;
  position: relative;
}
.table .package-name::before{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 25px;
  font-weight: 500;
  background: var(--blanc);
  padding: 0 15px;
  transform: translate(-50%, -50%);
}
.table .features li{
  margin-bottom: 15px;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.features li .list-name{
  font-size: 17px;
  font-weight: 400;
}
.features li .icon{
  font-size: 15px;
}
.features li .icon.check{
  color: #2db94d;
}
.features li .icon.cross{
  color: #cd3241;
}
.table .btn{
  width: 100%;
  display: flex;
  margin-top: 35px;
  justify-content: center;
}
.table .btn button{
  width: 80%;
  height: 50px;
  color: var(--blanc);
  font-size: 20px;
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.table .btn button:hover{
  border-radius: 5px;
}
.basic .features li::selection{
  background: #ffd861;
}
.basic ::selection,
.basic .price-area,
.basic .inner-area{
  background: #ffd861;
}
.basic .btn button{
  border: 2px solid #ffd861;
  background: var(--blanc);
  color: #ffd861;
}
.basic .btn button:hover{
  background: #ffd861;
  color: var(--blanc);
}
.premium ::selection,
.premium .price-area,
.premium .inner-area,
.premium .btn button{
  background: #a26bfa;
}
.premium .btn button:hover{
  background: #833af8;
}
.ultimate ::selection,
.ultimate .price-area,
.ultimate .inner-area{
  background: #43ef8b;
}
.ultimate .btn button{
  border: 2px solid #43ef8b;
  color: #43ef8b;
  background: var(--blanc);
}
.ultimate .btn button:hover{
  background: #43ef8b;
  color: var(--blanc);
}
.basic .package-name{
  background: #ffecb3;
}
.premium .package-name{
  background: #d0b3ff;
}
.ultimate .package-name{
  background: #baf8d4;
}
.basic .package-name::before{
  content: "E-NaN";
}
.premium .package-name::before{
  content: "Presentiel";
  font-size: 24px;
}
.ultimate .package-name::before{
  content: "Travailleurs";
  font-size: 24px;
}
@media (max-width: 1065px) {
  .table{
    margin-bottom: 40px;
  }
}
@media (max-width: 725px) {
 .table{
    width: 100%;
  }
}
::selection{
  color: var(--blanc);
}
.table .ribbon{
  width: 150px;
  height: 150px;
  position: absolute;
  top: -10px;
  left: -10px;
  overflow: hidden;
}
.table .ribbon::before,
.table .ribbon::after{
  position: absolute;
  content: "";
  z-index: -1;
  display: block;
  border: 7px solid #4606ac;
  border-top-color: transparent;
  border-left-color: transparent;
}
.table .ribbon::before{
  top: 0px;
  right: 15px;
}
.table .ribbon::after{
  bottom: 15px;
  left: 0px;
}
.table .ribbon span{
  position: absolute;
  top: 30px;
  right: 0;
  transform: rotate(-45deg);
  width: 200px;
  background: #a26bfa;
  padding: 10px 0;
  color: var(--blanc);
  text-align: center;
  font-size: 17px;
  text-transform: uppercase;
  box-shadow: 0 5px 10px rgba(0,0,0,0.12);
}


/* table fin */

</style>