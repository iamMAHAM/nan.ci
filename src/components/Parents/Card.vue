<template>
  <div class="Etudiants_infos1">
    <span
      class="close"
      @click="logout"
    >
      Se déconnecter
    </span>
    <h1>INFORMATIONS DE L’ETUDIANT</h1>
    <fieldset class="e-container">
      <legend>
        <img :src="user.avatar">
      </legend>
      <div class="card_infos">
        <div class="libel">
          <p>Nom et prenoms</p>
          <p>E-mail</p>
          <p>Télephone</p>
          <p>Spécialité</p>
          <p>Promotion</p>
          <p>Formation</p>
        </div>
        <div class="values">
          <p>{{ user.login}}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.phone }}</p>
          <p>{{ user.speciality.name}}</p>
          <p>{{ promotion }}</p>
          <p>{{ formation }}</p>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'studentCard',
  props: ['user'],
  computed: {
    promotion(){
      return this.user.matricule.split('_')[1].split('-')[0]
    },
    formation(){
      return this.user.status === 'realtime'
        ? 'présentiel'
        : 'en ligne '
    }
  },
  methods: {
    logout(){
      sessionStorage.clear()
      window.location.href = '/parent'
    }
  }
}
</script>

<style scoped>

.Etudiants_infos1{
  position: relative;
  background: var(--bg2);
}
.e-container{
  display: flex;
  padding: 50px;
  border: none;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: var(--bg2);
}

.close{
  padding: 10px;
  background-color: var(--violet);
  border-radius: var(--radius);
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--blanc);
}

legend{
  width: 200px;
  height: 200px;
  border: 1px solid white;
  text-align: center;
  border-radius: 60px;
  overflow: hidden;
}

legend>img{
  width: 230px;
  height: 195px;
  border-radius: 20px;
  margin: 0px auto;

}
.card_infos{
  display: flex;
  justify-content: space-around;
  width: 80%;
}

.card_infos div{
  text-align:left;
}
.card_infos p{
  font-size: 20px;
  padding: 10px;
}

@media screen and (max-width: 559px){
  .e-container{
    padding: 0;
  }
}
</style>