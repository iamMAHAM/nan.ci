<template>
  <div>
    <Header :slides="slides" :textes="textes" :titres="titres" :height="60"/>
    <div class="naniens-container">
      <div class="nanien-head">
        <h1>NOS CERTIFIÉS <img src="@/assets/naniens/certificate.svg" alt="image de certificat"></h1> 
      </div>

      <div class="naniens-informations">
        <p>
          Vous trouverez ici la liste de nos certifiés. En cliquant sur le card ou l’un de leur réseau, vous verrez plus d’informations sur le NaNien.
          N’hésitez pas à nous contacter si vous avez des missions pour nos développeurs internes ( NaN Business ).
        </p>

        <div class="naniens-searcher">
          <div class="nsl">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" role="search" placeholder="rechercher un nom ..." v-model="control.name">
          </div>
          <div class="nsl">
            <i class="fa-solid fa-filter"></i>
            <select name="speciality" v-model="control.spec">
              <option value="" selected="true">Filtre</option>
              <option value="speciality">Spécialité</option>´
              <option value="promotion">Promotion</option>
            </select>
          </div>
          <div class="nsl" style="border-right: none" v-if="showFs">
            <i class="fa-solid fa-sort"></i>
            <select name="speciality" v-if="filter" v-model="control.speciality">
              <option value="" selected="true">choisir la spécialité</option>
              <option value="javascript">Javascript</option>´
              <option value="python">Python</option>
              <option value="C#">C#</option>
              <option value="flutter">Flutter</option>
              <option value="PHP">PHP</option>
              <option value="front-end">Front end</option>
              <option value="reseau-voip">Reseau Voip</option>
              <option value="multimedia">Multimédia</option>
            </select>
            <select name="promotion" v-model="control.promotion" v-else>
              <option value="" selected="true">numero de la promotion</option>
              <option :value="1.18">1.18</option>
              <option :value="2.19">2.19</option>
              <option :value="3.20">3.20</option>
              <option :value="4.21">4.21</option>
              <option :value="5.22">5.22</option>
            </select>
          </div>
          <div class="nsl" style="border-right: none" v-else="showFs">
            <i class="fa-solid fa-square-xmark"
              @click="control = {name: '', spec: '', speciality: '', promotion: ''}"
              style="cursor: pointer;"
            ></i>
            <input type="text" placeholder="Aucun filtre selectionné" disabled>
          </div>
        </div>
      </div>
      <div class="naniens-cards">
        <Loader v-if="load" :height="100" :width="100"/>
        <Card
          v-else
          :specs="specialities"
          v-for="info in toDisplayed"
          :key="info.id"
          :info="info"
        />
      </div>

      <div>
        <Pagination :itemToShow="itemToShow" :total="filtered.length" @page="paginate" :isFilter="isFilter"/>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Naniens/Card.vue';
import Pagination from '@/components/Naniens/Pagination.vue';
import { specialities } from '@/lib/specialities';
import Loader from '@/components/Global/Loader.vue';
import Header from '@/components/Accueil/header.vue';
export default {
  name: 'naniens',
  components: {
    Card,
    Pagination,
    Loader,
    Header
  },
  data(){
    return {
      control:{
        name: '',
        spec: '',
        speciality: '',
        promotion: ''
      },
      slides:[
          "global/naniens-0.jpeg",
          "global/naniens-3.jpeg",
      ],
      textes: [      
          `Découvrez nos certifiés`,
          'Un réseau de parrain qualifiés'
      ],
      titres: [
          'Les Certifiés de NaN',
          'La Famille NaN',
      ],
      cards: [],
      itemToShow: 9,
      page: 1,
      isFilter: false,
      specialities: specialities,
      load: true
    }
  },
  methods: {
    paginate(number){
      this.page = number
    }
  },
  mounted(){
    fetch('http://192.168.88.15:3001/api/naniens')
    .then(res => res.json())
    .then(data => {
      this.cards = [...data.data]
      this.load = false
    })

  },
  computed: {
    showFs(){
      return this.control.spec
    },
    filter(){
      return this.control.spec === 'speciality'
    },
    filtered(){
      if (this.control.spec && (this.control.promotion || this.control.speciality)) this.isFilter = true
      else this.isFilter = false
      return this.cards.filter(
        c =>
          c.fullName.toLocaleLowerCase().includes(this.control.name.toLocaleLowerCase())
          && String(c.generation).toLowerCase().includes(String(this.control.promotion).toLocaleLowerCase())
          && c.speciality.toLocaleLowerCase().includes(this.control.speciality.toLocaleLowerCase())
      )
    },
    toDisplayed(){
      return this.filtered.filter((c, index) => {
        const left = this.itemToShow * this.page - this.itemToShow //left interval born
        const right = this.itemToShow * this.page - 1 // right interval born
        const inter = [left, right] // interval simulator
        return index >= inter[0] && index <= inter[1]
      })
    }
  }
}
</script>
<style>
  .naniens-container{
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nanien-head{
    text-align: center;
  }

  .nanien-head img{
    display: inline;
    width: 100px;
    height: 80px;
    vertical-align: middle;
  }

  .naniens-informations {
    padding: 20px;
  }

  .naniens-informations p{
    margin: 10px;
  }

  .naniens-searcher{
    justify-content: center;
    display: flex;
    width: 100%;
    border-radius: var(--radius);
    height: 60px;
    margin-top: 50px;
    background-color: var(--blanc);
    align-items: center;
  }

  .naniens-searcher div{
    text-align: center;
    font-size: 20px;
    width: 33%;
    vertical-align: middle;
    border-right: .5px solid var(--bg2);
  }

  .naniens-searcher div :nth-child(2){
    background: none;
    outline: none;
    border: none;
    font-size: 18px;
    margin: 5px;
    padding: 10px;
  }

  .naniens-searcher i{
    color: var(--bg2);
  }

  .naniens-cards{
    margin-top: 50px;
    max-height: 1000px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
  }

  .nsl select {
    width: calc(100% - 50px);
    font-size: 18px;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px){
    .naniens-cards{
      min-height: 1000px;
      height: auto;
    }
  }

  @media screen and (max-width: 1013px){
    .naniens-cards .card-container{
      margin: 10px;
    }
  }

  @media screen and (max-width: 768px){
    .naniens-searcher{
      flex-direction: column;
      height: auto;
      margin: 20px auto;
      width: 80%;
    }

    .naniens-searcher div {
      align-items: center;
      width: 100%;
      border-bottom: .2px solid black;
    }

    .nsl select{
      width: 207.5px;
    }
  }

</style>