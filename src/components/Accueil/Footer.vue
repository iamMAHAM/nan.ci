<template>
    <div class="corps-footer" >
      <div class="corps-footer-logo" >
        <a href="" class="logo" >
          <img src="@/assets/ImagesAccueil/logoN.png" >
          NaN Digital Academy
        </a>
        </div>
      <div class="corps-footer-menu" >
        <nav >
          <ul class="menu" >
            <li><router-link to="/" class="Acc-lien current">Accueil</router-link></li>
            <li><router-link to="/formations" class="Acc-lien">Nos Formations</router-link></li>
            <li><router-link to="/admission" class="Acc-lien">Admission</router-link></li>
            <li><router-link to="/naniens" class="Acc-lien">Naniens</router-link></li>
            <li><router-link to="/parent" class="Acc-lien">Parent</router-link></li>
            <li><router-link to="/apropos" class="Acc-lien">A propos</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="corps-footer-reseau" >
        <div class="corps-footer-reseau-content">
         <a href="https://www.facebook.com/nandigitalacademy" target="_blank" style="color: #1977f2"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.youtube.com/channel/UCWB0VDT_tMZ-xOkvjFvlUnw" target="_blank" style="color: red"><i class="fab fa-youtube-square" ></i></a>
        <a href="https://api.whatsapp.com/send/?phone=2250789252529&amp;text&amp;type=phone_number&amp;app_absent=0" style="color: #02c100;" target="_blank">
          <i class="fab fa-whatsapp-square"></i>
        </a>
        <a href="https://discord.com/invite/dHKn7G29XZ" style="color: var(--violet);" target="_blank"><i class="fab fa-discord" ></i></a>
        <a href="https://www.linkedin.com/school/nan-digital-academy" style="color: #0b65c2;" target="_blank"><i class="fab fa-linkedin" ></i></a>
        </div>

      </div>
      <div class="corps-footer-text" >
        <p >© 2022 Tous droits réservés, NaN Business</p>
      </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
  
.corps-footer {
  max-width: 100%;
  /* border: 1px solid yellow;  */
  height: 300px;
  margin: 30px auto;
  border-radius: 10px;
  background-color: var(--bg2);
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.corps-footer-logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  color: var(--blanc);
}

.corps-footer-logo img {
  height: 60px;
  width: 60px;
  margin-right: 10px;
}

.corps-footer-menu ul {
  list-style-type: none;
  display: flex;
}

.corps-footer-menu ul li a {
  text-decoration: none;
  margin-right: 40px;
  color: var(--blanc);
  font-weight: 500;
}

.corps-footer-menu ul li a:hover {
  color: var(--violet);
}
.corps-footer-reseau{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
}
.corps-footer-reseau-content{
  height: 100%;
  width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.corps-footer-reseau a {
  background-color: var(--blanc);
  height: 40px;
  width: 40px;
  /* margin-right: 30px; */
  padding: 20px ;
  border-radius: 10px;
  position: relative;
}

.corps-footer-reseau i {
  /* color: var(--violet); */
  font-size: 30px;
  width: 100%;
  height: 100%;
      top: 5px;
    left: 7px;
    position: absolute;
}
.fa-discord{
  left: 1px !important;
}

.corps-footer-text p:hover {
  color: var(--violet)
}
.corps-footer-text{
  text-align: center;
  padding: 10px;
}

@media (max-width: 685px) {
  .corps-footer {
    height: auto;
    padding:10px;
  }
  .corps-footer-logo a{
    font-size: 24px;
  }
  .corps-footer-menu ul {
    flex-direction: column;
    align-items: center;
  }
  .corps-footer-menu ul li a{
    margin-right: 0;
  }
  .corps-footer-reseau a{
    margin: 0 5px;
  }
}
</style>