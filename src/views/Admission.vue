<template>
  <Header :slides="slides" :textes="textes" :titres="titres" :height="60" />
  <div>
    <div class="head">
      <h1>MODE D'ADMISSION</h1>
    </div>
    <div class="admission">
      <div class="card card1">
        <div class="inscription option">
          <div class="etape">
            <p>1</p>
          </div>
          <h3>Inscription et frais</h3>
          <p>Inscription via ce lien:</p>
          <a href=" https://concours.nan.ci/auth/register">
            https://concours.nan.ci/auth/register</a
          >
          <p>droit de participation: 10.000fr</p>
        </div>
      </div>
      <div class="fleche1">
        <img src="@/assets/images/n2.png" alt="" />
      </div>

      <div class="card card2">
        <div class="concours option">
          <div class="etape">
            <p>2</p>
          </div>
          <h3>Concours en ligne</h3>
          <p>
            Après l'inscription, la sélection commence par un concours en
            ligne,tranquillement sur un ordinateur disposant d'une bonne
            connexion internet. la date du concours est fixé à partir de :
          </p>
          <div class="cardText">
            <div>
              <p>Décembre:</p>
              <p>Juin:</p>
            </div>
            <div>
              <p>1ère rentrée</p>
              <p>2ème rentrée</p>
            </div>
          </div>

          <p></p>
        </div>
      </div>
      <div class="fleche2">
        <img src="@/assets/images/n1.png" alt="" />
      </div>
      <div class="card card3">
        <div class="choix option">
          <div class="etape">
            <p>3</p>
          </div>
          <h3>Choix du parcours</h3>
          <p>
            Une fois la compétition validé, il est temps de choisir un parcours.
            Chez NaN, nous avons 2 types de parcours dont :
          </p>
          <div class="cardText">
            <div>
              <p
                @click="$router.push({ path: '/formations', hash: '#abonner' })"
                style="cursor: pointer"
              >
                En présentie:
              </p>
              <p
                @click="$router.push({ path: '/formations', hash: '#abonner' })"
                style="cursor: pointer"
              >
                En ligne:
              </p>
            </div>
            <div>
              <p>160 places</p>
              <p>360 places</p>
            </div>
          </div>
        </div>
      </div>
      <div class="fleche1">
        <img src="@/assets/images/n2.png" alt="" />
      </div>
      <div class="card card4">
        <div class="specialite option">
          <div class="etape">
            <p>4</p>
          </div>
          <h3>Choix de spécialité</h3>
          <p>Ensuite vous pouvez choisir différentes specialites :</p>
          <div class="image">
            <div class="image1">
              <div @click="$router.push(`/formations/JavaScript`)">
                <img src="@/assets/formations/js1.png" alt="" />
              </div>
              <div @click="$router.push(`/formations/PHP`)">
                <img src="@/assets/formations/php01.png" alt="" />
              </div>
              <div @click="$router.push(`/formations/Python`)">
                <img src="@/assets/formations/py1.png" alt="" />
              </div>
            </div>
            <div class="image1">
              <div @click="$router.push(`/formations/Flutter`)">
                <img src="@/assets/formations/flutter.png" alt="" />
              </div>
              <div @click="$router.push(`/formations/Reseau-voip`)">
                <img src="@/assets/formations/voip.png" alt="" />
              </div>
              <div @click="$router.push(`/formations/Multimedia`)">
                <img src="@/assets/formations/mmx.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fleche1">
        <img src="@/assets/images/n2.png" alt="" />
      </div>
      <div class="card card5">
        <div class="piscine option">
          <div class="etape">
            <p>5</p>
          </div>
          <h3>La piscine de NaN</h3>
          <p>
            La Piscine de NaN est un test de niveau d'un mois en conditions
            réelles dans nos locaux, ou un test en ligne à temps plein.
          </p>
        </div>
      </div>
      <div class="fleche2">
        <img src="@/assets/images/n1.png" alt="" />
      </div>
      <div class="card card6">
        <div class="rentrer option">
          <div class="etape">
            <p>5</p>
          </div>
          <h3>La rentrée de NaN</h3>
          <p>En fin vient la Rentrée . A NaN nous avons 2 entrée qui sont:</p>
          <div class="cardText">
            <div>
              <p>Janvier: </p>
              <p>Juillet: </p>
            </div>
            <div>
              <p>1ère rentrée</p>
              <p>2ère rentrée</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="offre">
      <p>Offre special</p>
      <p>Deux mois de cours gratuit</p>
      <p>pour tous les participants au concours !</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Accueil/header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      slides: [
        "inform.jpeg",
        "ImagesAccueil/im3.jpg",
        "ImagesAccueil/im4.jpg",
        "ImagesAccueil/im6.jpg",
      ],
      textes: [
        ` la motivation reste toujours source du coder`,
        "Un environnement motivant et inspirant",
        "Coder pour devenir des professionnelles en programmation",
        "",
      ],
      titres: [
        "Apprendre l ' avenir",
        "Un cadre agréable",
        "Apprendre le code ",
        "NaN forme des professionnelles",
      ],
    };
  },
};
</script>

<style scoped>
.head {
  text-align: center;
}
.admission {
  max-width: 1140px;
  margin: 0 auto;
  background-color: var(--bg2);
  padding: 30px 10px;
  border-radius: 10px;
}
.card {
  width: 100%;
  height: 200px;
}
.card1 , .card4 {
  display: flex;
  justify-content: center;
}
.option {
  position: relative;
  color: var(--blanc);
  border-radius: 10px;
  background-color: var(--bg);
  border: 1px solid var(--violet);
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
}
.cardText {
  display: flex;
}
.inscription a{
  color: var(--violet);
  text-decoration: none;
}
.inscription a:hover{
  font-weight: bold;
font-style: oblique;
}
/* .inscription:hover {
  background-color: var(--violet);
  color: var(--bg);
  border: 1px solid var(--blanc);
} */
.etape {
  height: 40px;
  border: 1px solid var(--violet);
  position: absolute;
  top: -28px;
  width: 40px;
  text-align: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: var(--violet);
}
.fleche1 {
  display: flex;
  justify-content: center;
}

.fleche1 img {
  transform: rotate(87deg);
}

.fleche2 {
  display: flex;
  justify-content: space-around;
}
.fleche2 img {
  transform: rotate(272deg);
}
.card2 {
  display: flex;
}

.concours,
.choix,
.piscine,
.specialite p {
  text-align: center;
  padding: 5px;
  font-size: 18px;
}

.card3 {
  display: flex;
  justify-content: flex-end;
}

.specialite .image {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
}
.specialite .image .image1 {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.specialite .image div {
  width: 60px;
  border-radius: 5px;
  cursor: pointer;
}
.specialite .image div img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.card5 {
  display: flex;
}
.piscine {
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.card6 {
  display: flex;
  justify-content: flex-end;
}
.rentrer {
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.offre {
  max-width: 1140px;
  margin: 30px auto;
  background-color: var(--bg2);
  text-align: center;
  padding: 10px;
}
@media (max-width: 768px) {
  .card{
    justify-content: center;
  }

}

@media (max-width: 450px) {
  .specialite .image {
    flex-direction: column;
    height: auto;
  }
  .specialite .image .image1 {
    margin-bottom: 10px;
  }

  .specialite .image div {
    width: 40px;
  }
 .option p {
    font-size: 16px;
  }
}
</style>
