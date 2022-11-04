<template>
  <Loader v-if="load"/>
  <div class="parents_contenaire"> 
    <form class="sous_cadre_parents_id">
      <h1>PORTAIL PARENT</h1>
      <div class="parents_id_input">
        <input type="text" placeholder="code parent" class="saisie" v-model="parentCode">
        <input type="text" placeholder="Matricule de l'Étudiant" class="saisie" v-model="studentMat">
        <p class="error" v-if="error">Invalid Credential</p>
      </div>
      <button
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
      load: false
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
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            codeparent: this.parentCode,
            confirmation: this.studentMat
          })
        })
        .then(res => res.json())
        .then(data => {
          console.log("data", data);
          if (data.status) {
            this.$emit('logged', data.data);
          } else this.error = true;
          this.load = false;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  components: {
    Loader
  }
}
</script>

<style scoped>

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
 .btn{
  margin-top: 20px;
  cursor: pointer;
  text-transform: uppercase;
  width: 200px;
  padding: 10px;
  border-radius: var(--radius);
  background-color: var(--violet);
  color: var(--blanc);
 }
</style>