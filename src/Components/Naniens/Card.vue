<template>
  <div class="card-container">
    <div class="user-card front" @click="flip">
      <div class="user-top">
        <div class="tt">
          <span class="tl">
            <i class="fa-regular fa-thumbs-up"></i>
            <span class="nb-likes">5k</span>
          </span>
          <span class="status"
            :style="{
              backgroundColor: info.isBusy ? 'var(--rouge)' : 'var(--vert)'
            }"
          >
            {{ info.isBusy ? 'BUSY' : 'FREE'}}
          </span>
        </div>
      </div>

      <div class="user-center">
        <div class="ct">
          <img :src="info.profilUrl">
          <span class="fullname">{{ info.fullName?.toUpperCase() }}</span>
        </div>

        <div class="spec-logo">
          <span class="spec">
            {{
              specs.devs.includes(info.speciality.toLowerCase())
                ? 'Développeur ' + info.speciality
                : info.speciality === 'multimedia'
                  ? 'Digital marketeur'
                  : 'Spécialisé en reseau voip'
            }}
          </span>
          <img :src="getImage(`${info.speciality}`)" alt="image de spécialité">
        </div>
      </div>

      <div class="user-bottom">
        <div class="user-icones">
          <a :href="info.linkedinUrl" target="_blank"><img src="@/assets/naniens/linkedin.png" alt="image de linkedin"></a>
          <a :href="info.githubUrl" target="_blank"><i class="fa-brands fa-github"></i></a>
          <a :href="info.portfolioUrl" target="_blank"><i class="fa-regular fa-address-card"></i></a>
        </div>
      </div>
    </div>
    <div class="user-card back">
      <div class="user-top back" style="background:none">
        <p>GÉNÉRATION :  {{ info.generation }}</p>
        <p>COMPÉTENCES</p>
      </div>
      <div class="skills">
        <div class="skill">
          <span>Front-End : </span>
          <div class="simages">
            <img
              v-for="img in info.skills.frontEnd"
              :src="getImage(img)"
              :alt="`maitrise de ${img}`"
            >
          </div>
        </div>
        <div class="skill">
          <span>Back-End : </span>
          <div class="simages">
            <img
              v-for="img in info.skills.backEnd"
              :src="getImage(img)"
              :alt="`maitrise de ${img}`"
            >
          </div>
        </div>
        <div class="skill">
          <span>Database : </span>
          <div class="simages">
            <img
              v-for="img in info.skills.databases"
              :src="getImage(img)"
              :alt="`maitrise de ${img}`"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: ['info', 'specs'],
  methods:{
    getImage(name){
      try{
        return require(`@/assets/naniens/${name.toLowerCase()}.png`)
      } catch (e){
        if (e instanceof Error){
          // alert(`aucune image trouvé avec le nom : ${name}`)
          return require('@/assets/naniens/no.png')
        }
      }
    },
    flip(e){
      const target = e.target
      const parent = target.closest('.card-container')

      if (['A', 'IMG'].includes(target.tagName)){
        return
      }
      parent.classList.add('active')
      parent.addEventListener('mouseleave', () => {
        parent.classList.remove('active')
      })
    }
  }
})
</script>
<style>

  .card-container{
    width: 300px;
    height: 300px;
    position: relative;
  }

  .card-container .user-card.back {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  .card-container .user-card.front {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  .card-container.active:hover .user-card.back {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  .card-container.active:hover .user-card.front {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }


  .user-card{
    overflow: hidden;
    width: 300px;
    height: 300px;
    border-radius: 8px;
    background-color: var(--bg2);
  }

  .user-card .user-top{
    position: relative;
    height: 110px;
    background-image: url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2526&q=80");
    /* border-bottom: 1px solid white; */
    background-size: cover;
    background-repeat: no-repeat;
  }

  .user-card .user-top.back p{
    text-align: center;
  }

  .user-card.front,
  .user-card.back{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .user-card.back{
    position: absolute;
    top: 0;
    left: 0;
  }

  .tt{
    align-items: center;
    height: 30px;
    justify-content: space-between;
    display: flex;
    padding: 5px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .user-top i{
    cursor: pointer;
    color: var(--vert);
    font-size: 25px;
  }

  .user-top .status{
    margin-right: 10px;
    padding: 3px;
    text-align: center;
    vertical-align: middle;
    font-size: 15px;
    border-radius: 5px;
    color: var(--blanc);
    background-color: var(--vert);
  }

  .user-card .user-center{
    height: 140px;
  }

  .user-card .user-bottom{
    /* border-top: 1px solid white; */
    height: 50px;
  }

  .user-icones {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-icones i{
    overflow: hidden;
    font-size: 32px;
    margin: 5px;
    color: var(--violet);
  }

  .nb-likes{
    font-size: 20px;
    margin-left: 5px;
    color: var(--blanc);
  }

  .user-icones img{
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .user-icones a:nth-child(2) i{
    border-radius: 50%;
    color: var(--noir);
    background-color: var(--blanc);
  }

  .user-center{
    position: relative;
  }

  .user-center .ct img{
    transform: translateY(-40%);
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;
    border-radius: 50%;
  }

  .ct{
    display: flex;
    height: 62px;
    gap: 5%;
    justify-content: space-between;
  }

  .ct .fullname{
    font-size: 18px;
    width: max-content;
    height: max-content;
    color: var(--blanc);
  }

  .spec-logo{
    display: flex;
    justify-content: center;
    height: 78px;
    color: var(--blanc);
    font-size: 22px;
    align-items: center;
  }

  .spec-logo img {
    height: 25px;
    width: 25px;
    margin-left: 5px;
    color: var(--js);
  }

  .user-card.back{
    color: var(--blanc);
  }

  .user-card.back p{
    font-size: 20px;
    padding: 5px;
    margin: 5px;
  }

  .skills{
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .skill{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skill span{
    margin: 0 8px;
    font-size: 18px;
  }

  .simages{
    text-align: center;
    overflow: hidden;
    width: 180px;
    height: 44px;
  }

  .simages img{
    width: 40px;
    height: 40px;
  }

  
</style>