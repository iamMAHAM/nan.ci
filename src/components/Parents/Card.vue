<template>
  <div class="Etudiants_infos1">
    <span
      class="close"
      @click="logout"
    >
      Se déconnecter
    </span>
    <span
      class="close active"
      @click="logout"
    >
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
    </span>
    <h1>ÉTUDIANT</h1>
    <div class="e-container">
      <legend>
        <img
          :src="avatar"
          loading="lazy"
          decoding="async"
        >
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
          <p>{{ user.login || 'valeur non définie'}}</p>
          <p>{{ user.email }}</p>
          <p>{{ user.phone }}</p>
          <p>{{ user.speciality.name}}</p>
          <p>{{ promotion }}</p>
          <p>{{ formation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getImage } from '@/lib/getImage'

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
    },
    avatar(){
      return this.user.avatar
        ? this.user.avatar
        : getImage('global/avatar.svg')
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

.close.active{
  display: none;
}

legend{
  height: 150px;
}
legend>img{
  width: 100%;
  height: 100%;
  border-radius: var(--radius);
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

@media screen and (max-width: 880px){
  .e-container{
    padding: 0;
  }

  .close{
    display: none;
  }

  .close.active{
    display: block;
  }
}

@media screen and (max-width: 600px){
  .libel{
    display: none;
  }

  .card_infos{
    width: 100%;
  }
}
</style>