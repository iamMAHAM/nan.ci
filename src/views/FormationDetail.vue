<template>
  <Header :slides="slides" :textes="textes" :titres="titles" :height="60"/>
  <div class="f-main-container">
    <h1 align=center>PLUS D'INFORMATIONS SUR {{ specialite?.toUpperCase() }}</h1>
    <div class="container">
      <div  class='card_1'>
        <h2>{{ formation.nom }} ?</h2>
        <p>{{ formation.contenu }}</p>
      </div>
      <div class="card_2">
        <div class="box">
          <h2>{{formation.nom2}} </h2>
          <p>{{formation.contenu2}}</p>
        </div>
        <div class="box">
          <h2>{{formation.nom3}}</h2>
          <p>{{formation.contenu3}}</p>
        </div>
      </div>
    </div>
    <div id="image2">
      <img  src="@/assets/formations/binary.jpeg">
      <h1>Ce que vous apprendrez à NaN</h1>
    </div>
    <div class="container1">
      <h2>Consulter le programme de notre formation, étape par étape</h2>
      <div class='etape'>
        <button
          v-for="titre in titres"
          :key="titre"
          :title="JSON.stringify(formation.etapes[titre])"
          @click="changeData"
          >
        {{ formatTitle(titre)}}
        </button>
      </div>
      <div class='card_etape'>
        <div class='cards'>
          <p>CE QUE VOUS VEREZ DANS CE MODULE</p>
          <div class="liss">
            <li
              v-for="point in current?.points"
              :key="point"
              >
              {{ point }}
            </li>
          </div>
        </div>
        <div class="cards" >
          <p>MODULE</p>
          <div class="lis">{{ current?.titre}}</div>
        </div>
      </div>
      <div class="container2" v-if="!digital">
        <div class="text">
          <h1>Quelques projet realisés avec les technologies {{ spec }}</h1>
        </div>
        <div class="item">
          <a
            v-for="img in formation?.image1"
            :href="link(img)"
            target="_blank"
          >
            <img
              :src="getImage(`formations/specialite/${spec}/${img}`)"
              :alt="`image de ${img}`"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Accueil/header.vue'
import { getImage } from '@/lib/getImage';
export default {
    props: ["specialite"],
    data() {
        return {
            formation: "",
            titres: [],
            current: {},
            slides:[
              `naniens/${this.specialite?.toLowerCase()}.png`
            ],
            textes: [      
              `Plus de detail sur la formation en ${this.specialite}`,
            ],
            titles: [
              'Apprendre plus'
            ],
        };
    },
    methods: {
        changeData(e) {
            this.current = JSON.parse(e.target.title);
            console.dir((this.current));
        },
        formatTitle(titre=""){
          if (titre.split(' ').length > 2){
            return titre.split(' ')[0]
          }
          return titre
        },
        getImage: getImage,
        link(name=""){
          return `https://${name.replace('svg', 'com')}`
        }
    },
    mounted() {
        fetch(`http://192.168.88.15:3001/api/specialities/${this.specialite}`)
            .then(res => res.json())
            .then(data => {
              console.log(data.data);
              this.formation = data.data;
              const vals = Object.entries(data.data.etapes);
              vals.forEach(val => {
                  this.titres.push(val[0]);
                  // console.log("titre : ", val[0], "value :  ", val[1]);
              });
              this.current = vals[0][1]
        })
          .catch((e) => {
            console.log(e);
        });
    },
    components: { Header },
    computed: {
      digital(){
        const tch = this.specialite?.toLowerCase()
        return tch === 'reseau-voip' || tch === 'multimedia'
      },
      spec(){
        return this.specialite?.toLowerCase()
      }
    }
}
</script >

<style scoped>

.f-main-container{
  margin: 0 auto;
  max-width: var(--max-width);
  background: var(--bg);
  /* overflow: ; */
}

.container,
.container1 {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.container2 {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg2);
  border-radius: var(--radius);
  width: 100%;
  gap: 2rem;
  justify-content: center;
  margin: 1.5rem auto;
}

h1{
  text-align: center;
}

.item {
  gap: 5%;
  display: flex;
  flex-wrap: wrap;
  min-width: 400px;
  justify-content: center;
}

.item img{
  background: var(--blanc);
  height: 70px;
  width: 70px;
  border-radius: 30%;
}

.box,
.card_1 {
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: .7rem auto;
  align-items: center;
  justify-content: center;
  color: var(--blanc);
  background: var(--bg);
  width: 100%;
  height: 300px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 6px 5px 12px 1px var(--violet);
  border-radius: var(--radius);
}

.card_1,
.card_2{
  width: 100%;
}

.cards{
  height: 100%;
  position: relative;
  padding: .7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
}

.lis{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.liss{
  position: relative;
  flex-direction: column;
  /* justify-content: center; */
  display: flex;
  height: 200px;
  overflow-y: auto;
}

li{
  padding: .2rem;
  margin: .3rem;
}
.card_2 {
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
}

h2{
  color: var(--blanc);
  padding: .5rem;
}
.box {
  width: 45%;
  height: 500px;
  border-radius: var(--radius);
}

.box>h2 {
  text-align: center;
}

p {
  font-size: 1rem;
  line-height: 25px;
  text-align: justify;
}

img {
  margin: 0 auto;
  width: 100%;
  height: 400px;
  object-fit: cover;
}

#image2 {
  position: relative;
  margin: 0 auto;
  border-radius: var(--radius);
  overflow: hidden;
}

#image2>h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* width */
::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--blanc);
  border-radius: var(--radius);
}
.container1>h2 {
  margin: 20px 0;
}

.etape {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3%;
  /* overflow-x: scroll; */
}

button {
  width: 100px;
  background: var(--bg);
  border: 1px solid rgb(162, 160, 160);
  color: var(--blanc);
  font-size: 17;
  padding: .8rem;
  border-radius: var(--radius);
  transition-delay: 0.1s;

}

button:hover {
  background: var(--violet);
  color: black;
  border: transparent;
  cursor: pointer;

}

.etape button{
    margin: .2rem;
}

.card_etape {
  margin: 2.3rem 0;
  height: 250px;
  color: var(--blanc);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 6px 5px 12px 1px var(--violet);
  border-radius: var(--radius);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: linear-gradient(269.9deg, rgba(104, 112, 223, 0.54) 42.63%, rgba(162, 180, 147, 0) 101.4%);
}


@media only screen and (max-width: 1024px) {
  .card_1 {
    height: max-content;
    width: 90%;
  }


  .container2 h1{
    padding: .5rem;
  }

  .card_2 {
    width: 90%;
    flex-direction: column;
  }

  #image2{
    width: 90%;
  }
  .card_2 .box{
    width: 100%;
    height: max-content;
  }

  .container1{
    margin: 0 auto;
    width: 90%;
  }

  .card_etape .cards{
    width: 100%;
    height: 200px;
    /* overflow-y: scroll; */
  }

  .cards:nth-child(2){
    border-top: .1px solid var(--blanc);
  }

  .card_etape{
    height: auto;
    flex-wrap: unset;
    flex-direction: column;
  }
}

@media only screen and (max-width: 768px) {
  .container2{
    padding: 1rem;
  }

  .item img{
    width: 50px;
    height: 50px;
  }
}
</style>