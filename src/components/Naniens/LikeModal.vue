<template>
  <div class="mod">
    <div class="center">
      <span
        class="close"
        @click="$emit('close')"
      >
        x
      </span>
      <h1>LIKE</h1>
      <p>Entrez votre addresse email pour liker .</p>
      <p>rappel : Vous ne pouvez aimer un profil deux fois.</p>
      <div class="sender">
        <input type="email" placeholder="entrez votre addresse email" v-model="email">
        <Loader :height="32" :width="32" v-if="load"/>
        <i class="fa-regular fa-thumbs-up" @click="like" :disabled="!email" v-else></i>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from '../Global/Loader.vue';

export default {
    components: { Loader },
    props: ['datas'],
    data(){
      return {
        load: false,
        email: ''
      }
    },
    methods: {
      like(){
        const [userEmail, likers] = [...this.datas]
        if (!this.email || !userEmail) return
        else if (likers.includes(this.email)){
          alert('vote déjà pris en compte pour ce utilisateur')
        }else{
          this.load = true
          fetch('http://192.168.88.15:3001/api/naniens/like', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
              userEmail: userEmail,
              email: this.email
            })
          })
          .then(res => res.json())
          .then(data => {
            data.status
              ? this.$emit('close')
              : alert(data.message)
            this.load = false
          })
          .catch(e => {
            this.load = false
            console.log(e)
          })
        }
      }
    }
}
</script>
<style scoped>
  .mod{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 999;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  input[type='email']{
    outline-color: var(--violet);
    padding: .8rem;
    font-size: 1.3rem;
    border-radius: var(--radius);
    width: 90%;
  }

  .center{
    position: relative;
    border-radius: var(--radius);
    text-align: center;
    padding: 1.3rem;
    background: var(--blanc);
  }

  h1{
    padding: .5rem;
    margin: .5rem;
  }

  .center p, .center h1, .center input, .center i{
    color: var(--bg2);
  }

  .sender{
    display: flex;
    align-items: center;
    margin: .4rem 0;
  }

  .center p{
    padding: .3rem;
    margin: .2rem;
  }

  i{
    cursor: pointer;
    margin-left: .2rem;
    font-size: 2rem;
  }

  i:hover{
    color: var(--violet);
  }

  .close{
    cursor: pointer;
    position: absolute;
    right: .5rem;
    top: .2rem;
    font-size: 1.5rem;
    color: var(--rouge);
  }
</style>