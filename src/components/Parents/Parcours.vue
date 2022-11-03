<template>
  <div class="body">
    <h1>PARCOURS DU NANIEN</h1>
    <ol>
      <div
        class="parc"
        v-for="month in months"
      >
        <span><i class="fa-solid fa-person-walking"></i></span>
        <li
          @click="showInfo(month)"
          :class="currentMonth === month ? 'active' : ''"
        ></li>
        <span>{{ month }}</span>
      </div>
    </ol>
    <Loader v-if="load"/>
    <div v-else style="max-width: 800px;">
      <h2>RESULTAT DU MOIS</h2>
      <PetudiantPoints :point-info="currentInfo.points"/>
      <h2>PROJET DU MOIS</h2>
      <ProjetEt :projet-info="currentInfo.projet"/>
    </div>
  </div>
</template>
<script>
import PetudiantPoints from './PetudiantPoints.vue'
import ProjetEt from './ProjetEt.vue';
import Loader from '../Global/Loader.vue';

export default {
    name: "Parcours",
    data(){
      return {
        currentInfo: {},
        months: ['mois 1', 'mois 2', 'mois 3', 'mois 4', 'mois 5', 'mois 6', 'mois 7', 'mois 8', 'mois 9'],
        load: true,
        currentMonth: 'mois 2'
      }
    },
    methods: {
      showInfo(month){
        console.log(month)
        // fetch(`/getInfo?month=${month}`)
        // .then(res=>res.json())
        // .then(data=>{
        //   console.log(data)
        // })
      }
    },
    mounted(){
      this.currentInfo = {
        projet: {
          theme: 'Santé',
          note: 7,
          rang: 2
        },
        points: {
          quizzPassed: 11,
          totalQuizsPercent: 927,
          totalQuizsSeconds: 567,
          totalQuizsPoints: 11.5,
          Total: 11.5,
          rang: 20
        }
      }
      this.load = false
    },
    setup() {
      document.addEventListener('DOMContentLoaded', () => {
        const list = document.querySelector("ol");
        const items = list.querySelectorAll("li");
        const click = (e) => {
            let target = e.target;
            if (target.nodeName === "SPAN")
                target = e.target.parentNode;
            if (target.nodeName !== "LI")
                return;
            items.forEach(item => item.classList.remove("active"));
            target.classList.add("active");
        };
        list.addEventListener('click', click);
      });
    },
    components: { PetudiantPoints, ProjetEt, Loader }
}
</script>
<style scoped>

h2{
  color: var(--blanc);
  margin: 20px;
  font-size: 20px;
}
.body {
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: var(--bg2);
}

ol, li {
  margin: 0;
  padding: 0;
  color: var(--blanc);
  font-family: verdana;
  font-size: 14px;
}
ol {
  display: flex;
  width: 800px;
  justify-content: space-between;
  position: relative;
}
ol:after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--blanc);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  z-index: -1;
}
li {
  list-style-type: none;
  position: relative;
  cursor: pointer;
}

li:after {
  z-index: 999;
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--blanc);
  border: 2px solid var(--blanc);
  transition: background-color 0.2s ease;
}
li:hover:after {
  background-color: var(--vert);
}

li.active:after{
  background-color: var(--vert);
}
li.active:after {
  background-color: #222;
}
/* span {
  position: absolute;
  top: calc(100% + 20px);
  left: 50%;
  transform: translate(-50%, 0);
  display: inline-block;
  text-align: center;
  text-align: center;
  width: 100px;
} */
.parc{
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>