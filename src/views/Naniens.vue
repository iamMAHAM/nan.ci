<template>
  <div>
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
            <i class="fa-solid fa-square-xmark"></i>
            <input type="text" placeholder="Aucun filtre selectionné" disabled>
          </div>
        </div>
      </div>

      <div class="naniens-cards">
        <Card
          v-for="info in toDisplayed"
          :info="info"
        />
      </div>

      <div>
        <Pagination :itemToShow="itemToShow" :total="filtered.length" @page='paginate'/>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Naniens/Card.vue';
import Pagination from '@/components/Naniens/Pagination.vue';
export default {
  name: 'naniens',
  components: {
    Card,
    Pagination
  },
  data(){
    return {
      info: {
        fullName: 'KABORE ABDUL MAHAMOUDOU',
        speciality: 'javascript',
        profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
        linkedinUrl: 'https://linkedin.com',
        githubUrl: 'https://github.com',
        portfolioUrl: 'https://me.com',
        generation: 5.22,
        isBusy: false,
        skills: {
          frontEnd: ['html', 'vue', 'react'],
          backEnd: ['express', 'node'],
          databases: ['mongo', 'mysql']
        }
      },
      control:{
        name: '',
        spec: '',
        speciality: '',
        promotion: ''
      },
      cards: [
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'python',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: true,
          skills: {
            frontEnd: ['html', 'angular'],
            backEnd: ['flask', 'node'],
            databases: ['mysql', 'postgresql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'php',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
        {
          fullName: 'KABORE ABDUL MAHAMOUDOU',
          speciality: 'javascript',
          profilUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          linkedinUrl: 'https://linkedin.com',
          githubUrl: 'https://github.com',
          portfolioUrl: 'https://me.com',
          generation: 5.22,
          isBusy: '',
          skills: {
            frontEnd: ['html', 'vue', 'react'],
            backEnd: ['express', 'node'],
            databases: ['mongo', 'mysql']
          }
        },
      ],
      itemToShow: 10,
      page: 1,
    }
  },
  methods: {
    paginate(number){
      this.page = number
      console.log(this.page)
    }
  },
  computed: {
    showFs(){
      return this.control.spec
    },
    filter(){
      return this.control.spec === 'speciality'
    },
    filtered(){
      return this.cards.filter(
        c =>
          c.fullName.toLocaleLowerCase().includes(this.control.name.toLocaleLowerCase())
          && String(c.generation).toLowerCase().includes(String(this.control.promotion).toLocaleLowerCase())
          && c.speciality.toLocaleLowerCase().includes(this.control.speciality.toLocaleLowerCase())
      )
    },
    toDisplayed(){
      console.log(this.filtered.length)
      return this.filtered.filter((c, index) => index >= (this.itemToShow * this.page - this.itemToShow) && index < this.itemToShow * this.page - 1)
    }
  },
  watch: {
    control: {
      handler() {
        console.log(this.control)
      },
      deep: true
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
    font-size: 20px;
    padding: 20px;
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
    height: 1000px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
  }

  select {
    width: calc(100% - 50px);
    cursor: pointer;
  }

</style>