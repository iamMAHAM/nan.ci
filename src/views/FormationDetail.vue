<template>
  <Header :slides="slides" :textes="textes" :titres="titles" :height="60"/>
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
        <p>Quelques projet realisés avec les technologies {{ spec }}</p>
      </div>
      <div class="item">
        <img
          v-for="img in formation?.image1"
          :src="getImage(`formations/specialite/${spec}/${img}`)"
          alt="">
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
        getImage: getImage
    },
    mounted() {
      console.log(this.specialite)
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
          .catch((error) => {
            console.log(error);
        });
    },
    components: { Header },
    computed: {
      digital(){
        console.log(this.specialite === 'multimedia')
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

.container,
.container1 {
  width: var(--max-width);
  background: var(--bg);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.container2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg2);
  width: 100%;
  height: 200px;
  gap: 2rem;
  justify-content: center;
  margin: 1.5rem auto;
}

.text>p {
  font-size: 35px;
}

.item {
  gap: 15%;
  display: flex;
  justify-content: center;
}

.item>img {
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
  overflow-y: scroll;
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
  width: 100%;
  height: 400px;
  object-fit: cover;
}

#image2 {
  position: relative;
  max-width: var(--max-width);
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

.container1>h2 {
  margin: 20px 0;
}

.etape {
  justify-content: center;
  display: flex;
  gap: 3%;
  width: var(--max-width);
  overflow: scroll;
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

.card_etape {
  margin: 2.3rem 0;
  height: 250px;
  color: var(--blanc);
  background: var(--bg);
  width: var(--max-width);
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
    width: 87%;
    height: 55vh;
    margin-left: 6%;
  }

  .card_2 {
    margin-left: 6%;
    width: 87%;
  }

  img {
    width: var(--max-width);
  }

  .container1>h2 {
    margin-left: 4%;
  }

  .etape {
    margin-left: 4%;
    width: 90%;
  }

  .card_etape {
    margin-left: 2%;
    width: 95%;
  }
}

@media only screen and (max-width: 768px) {
  .card_2 {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8%;
  }

  .box {
    height: 38vh;
  }

  img {
    width: var(--max-width);
    height: 30vh;
  }

  #image2>h1 {
    font-size: var(--titre);
    width: max-content;
    position: absolute;
    top: 24%;
    transform: translate(18%);
  }
}
</style>