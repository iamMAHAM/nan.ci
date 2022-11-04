<template>
  <Header :slides="slides" :textes="textes" :titres="titles" :height="60"/>
  <h1 align=center>PLUS D'INFORMATIONS SUR {{ specialite }}</h1>
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
    <h2>Consulter le programme de notre formation, etape par etape</h2>
    <div class='etape'>
      <button
        v-for="titre in titres"
        :key="titre"
        :title="JSON.stringify(formation.etapes[titre])"
        @click="changeData"
        >
      {{ titre}}
      </button>
    </div>
    <div class='card_etape'>
      <div class='card_etape1'>
        <p>Dans ce module ce que vpous apprendrez,les bases du langage javascript,entre autres:</p>
        <li
          v-for="point in current?.points"
          :key="point"
          >
          {{ point }}
        </li>
      </div>
      <div class="card_etape2" >
        <p>ce que vous allez realiser en pratique</p>
        <p>{{ current?.titre}}</p>
      </div>
    </div>
    <div class="container2">
      <div class="text">
        <p>rejoignez un réseau tech mondial</p>
      </div>
      <div class="item">
        <img src="@/assets/formations/py1.png" alt="">
        <img src="@/assets/formations/py1.png" alt="">
        <img src="@/assets/formations/py1.png" alt="">
        <img src="@/assets/formations/py1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Accueil/header.vue'

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
        }
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
        })
            .catch((error) => {
            console.log(error);
        });
    },
    components: { Header }
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
  background-color: var(--bg2);
  margin-top: 5%;
  border-radius: 9px;
  border: none;


}

.text {
  padding-top: 8%;
  padding-left: 25%;
  padding-bottom: 5%;
}

.text>p {
  font-size: 35px;
}

.item {
  gap: 15%;
  display: flex;
  margin: 0 auto;
  width: 200px;
  justify-content: center;
}

.item>img {


  height: 70px;
  width: 70px;
  border-radius: 30%;
  border: 1px solid black;


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

.card_2 {
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
}

h2{
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

}

#image2>h1 {
  font-size: var(--titre);
  position: absolute;
  top: 35%;
  left: 35%;

}

.container1>h2 {
  margin-top: 5%;
  font-size: 1.5em;
  margin-bottom: 3%;
}

.etape {
  display: flex;
  gap: 3%;
  padding-top: 2.5rem;
  width: var(--max-width);
  overflow: scroll;
}

button {
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
  margin-top: 48px;
  width: var(--max-width);
  color: var(--blanc);
  background: var(--bg);
  font-size: 1.1em;
  width: var(--max-width);
  height: 351px;
  left: 90px;
  top: 507px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  box-shadow: 6px 5px 12px 1px #6870E0;
  border-radius: 45px;
  display: flex;
  padding: 60px;
  gap: 13%;
  background: linear-gradient(269.9deg, rgba(104, 112, 223, 0.54) 42.63%, rgba(162, 180, 147, 0) 101.4%);
}

.card_etape1 {
  width: 50%;
}

.card_etape1>li {
  padding-top: 25px;
  padding-left: 20px;
  line-height: 45px;
  lighting-color: red;

}

.card_etape2>:nth-child(2) {
  padding-top: 30%;
  padding-left: 10%;
  font-size: 25px;

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