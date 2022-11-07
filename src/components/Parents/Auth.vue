<template>
  <div class="parents_contenaire"> 
    <form class="sous_cadre_parents_id">
      <h1>PORTAIL PARENT</h1>
      <div class="parents_id_input">
        <input type="text" placeholder="code parent" class="saisie" v-model="parentCode">
        <input type="text" placeholder="Matricule de l'Étudiant" class="saisie" v-model="studentMat">
        <p class="error" v-if="error">{{ message}}</p>
      </div>
      <Loader v-if="load" :height="50" :width="50" :bg="'var(--bg2)'"/>
      <button
        v-else
        type="submit"
        class="btn"
        @click.prevent="login"
      >
        Connexion
      </button>
    </form>
  </div>
</template>

<script>
import Loader from '../Global/Loader.vue';
export default {
  name: "Auth",
  emits: ['logged'],
  data() {
    return {
      parentCode: "",
      studentMat: "",
      error: false,
      load: false,
      message: ''
    };
  },
  methods: {
    login() {
      if (!this.parentCode && this.parentCode !== this.studentMat) {
        this.error = true;
        return;
      }
      this.load = true
      fetch("/api/getStudentInfo", {
          method: "POST",
          mode: 'cors',
          headers: {
            "content-type": "application/json",
            "user-agent": "web - nan.ci headers"
          },
          body: JSON.stringify({
            codeparent: this.parentCode,
            confirmation: this.studentMat
          })
        })
        .then(res => res.json())
        .then(data => {
          if (data.status) {
            this.$emit('logged', data.data);
          } else this.showError(3000, data.message)
          this.load = false;
        })
        .catch(e => {
          this.load = false
          this.showError(3000, 'Une erreur est survenue réesayer plus tard !')
        });
    },
    showError(time=0, message=''){
      this.error = true
      setTimeout(()=>{
        this.error = false
        this.message = message
      }, time)
    }
  },
  components: {
    Loader
  }
}
</script>

<style>

.error{
  color: var(--rouge);
  font-size: medium;
}
.parents_contenaire{
  height: 40vh;
  margin: 0 auto;
  background-color: var(--bg);
  max-width: var(--max-width);
 }

 .sous_cadre_parents_id{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 350px;
  border-radius: var(--radius);
  margin: 100px auto;
  background-color: var(--bg2);
 }

 .sous_cadre_parents_id .parents_id_input{
    width: 80%;
    text-align: center;
    margin: 0 auto;
 }

 .parents_id_input .saisie{
  width: 70%;
  margin: 10px auto;
  border-radius: var(--radius);
  font-size: 20px;
  padding: 10px;
  outline: none;
 }
 .parents_contenaire .btn{
  border: none;
  margin-top: 20px;
  cursor: pointer;
  padding: 10px;
  font-size: 1.3rem;
  border-radius: var(--radius);
  background-color: var(--violet);
  font-weight: 400;
  color: var(--blanc);
 }

 @media screen and (max-width: 946px){
  .sous_cadre_parents_id{
    width: 70%;
  }

  .Etudiant_infos_plus{
    flex-direction: column;
  }

  .infos_plus1:nth-child(2){
    width: 100% !important;
  }

 }
 @media screen and (max-width: 551px){
  .sous_cadre_parents_id{
    width: 85%;
  }

  .props{
    width: 100% !important;
  }

  .parents_id_input .saisie{
    font-size: 18px;
    padding: 8px;
    width: 100%;
  }

  h1{
    font-size: 1.8rem;
    padding: 5px;
  }
 }
</style>