<template>
  <div
    class="card"
    v-for="formations in formation"
    :key="formations.id"
    @click="redirect(formations.nom)"
  >
    <div class="face face1">
      <div class="content">
        <span class="stars"></span>
        <h2 class="specia">{{ formations.nom }}</h2>
        <p class="specia">{{ formations.description }}</p>
        <p class="lien">voir plus ...</p>
      </div>
    </div>
    <div class="face face2">
      <img
        :src="getImage(formations.image)"
        :alt="`logo de ${formations.nom}`"
      />
    </div>
  </div>
</template>

<script>
import { getImage } from "@/lib/getImage";
export default {
  name: "card",
  props: ["formation"],
  data() {
    return {};
  },
  methods: {
    getImage: getImage,
    redirect(nom) {
      console.log(nom);
      this.$router.push(`/formations/${nom}`);
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  width: 300px;
  height: 320px;
  margin: 0 auto;
  background: var(--bg2);
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}
.card .face {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.face.face1 {
  box-sizing: border-box;
  padding: 20px;
}

.card .face.face1 h2 {
  margin: 0;
  padding: 0;
}

.card .face.face1 .specia {
  background-color: var(--blanc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  padding-bottom: 20px;
}

.card .face.face2 {
  transition: 0.5s;
}
.card .face.face2 img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-size: cover;
}
.card .face.face2 h2 {
  margin: 0;
  padding: 0;
  font-size: 10em;
  color: var(--blanc);
  transition: 0.5s;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.card:hover .face.face2 {
  height: 0px;
}
.lien {
  font-size: 11px;
  padding-left: 20px;
  cursor: pointer;
}
</style>
