<template>

  <div class="parents_contenaire"> 
    <form class="sous_cadre_parents_id">
      <h1>PORTAIL PARENT</h1>
      <div class="parents_id_input">
        <input type="text" placeholder="code parent" class="saisie" v-model="parentCode">
        <input type="text" placeholder="Matricule de l'Étudiant" class="saisie" v-model="studentMat">
        <p class="error" v-if="error">code parent ou matricule étudiant absent</p>
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
export default {
  name: 'Auth',
  data(){
    return {
      parentCode: '',
      studentMat: '',
      error: false
    }
  },
  methods: {
    login(){
      if (!this.parentCode || !this.studentMat){
        this.error = true
        return
      }
      this.$emit('logged', {name: 'ok', prenom: 'ahahahah'})
      // fetch(`/user?parentcode=${this.parentCode}?studentmat=${this.studentMat}`)
      // .then(res => res.json())
      // .then(data => {
      //   this.$emit('login', data)
      // })
    }
  }
}
</script>

<style scoped>

.error{
  color: var(--rouge);
  font-size: medium;
}
.parents_contenaire{
  min-height: 80vh;
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