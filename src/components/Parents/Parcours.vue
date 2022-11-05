<template>
  <div class="body">
    <h1>PARCOURS DU NANIEN</h1>
    <p>
      Cliquez sur l'un des points en blanc pour voir les resultats du mois
    </p>
    <ol>
      <div
        class="parc"
        v-for="month in months"
      >
        <span v-if="month === currentMonth">
          <i class="fa-solid fa-person-walking"></i>
        </span>
        <li
          @click="showInfo(month)"
          :class="currentMonth === month ? 'active' : ''"
        ></li>
        <span>{{ month.slice(0, 3) }}</span>
      </div>
    </ol>
    <Loader v-if="load" :height="200" :width="200"/>
    <div v-else class="props">
      <h2>RESULTAT DU MOIS</h2>
      <PetudiantPoints :point-info="currentInfo" :month="month"/>
      <h2>PROJET DU MOIS</h2>
      <ProjetEt :projet-info="currentInfo.project"/>
      <div class="error" v-if="error">
        Une Erreur est survenue vérifiez votre connexion internet.
      </div>
    </div>
  </div>
</template>
<script>
import PetudiantPoints from './PetudiantPoints.vue'
import ProjetEt from './ProjetEt.vue';
import Loader from '../Global/Loader.vue';

export default {
    name: "Parcours",
    props: ['matricule'],
    created(){
      this.currentMonth = this.months[new Date().getMonth()]
      this.showInfo(this.currentMonth)
    },
    data(){
      return {
        currentInfo: {},
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        load: false,
        currentMonth: '',
        month: '',
        error: false
      }
    },
    methods: {
      showInfo(month){
        this.load = true
        fetch(`/api/getStudentMonthResults/${month}`, {
          method: 'GET',
          headers: {'auth': this.matricule}
        })
        .then(res=>res.json())
        .then(data=>{
          console.log('data', data)
          this.currentInfo = {...data.data}
          console.log(this.currentInfo)
          this.month = month
          this.load = false
        })
        .catch(e=>{
          console.log(e)
          this.error = true
          this.load = false
        })
      }
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
  margin-bottom: 50px;
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
  flex-wrap: wrap;
  max-width: 800px;
  justify-content: space-between;
  position: relative;
}
/* ol:after {
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
} */
li {
  list-style-type: none;
  position: relative;
  cursor: pointer;
}

.fa-person-walking{
  color: var(--vert);
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
  min-width: 50px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.props{
  max-width: 800%;
  width: 70%;
}

</style>