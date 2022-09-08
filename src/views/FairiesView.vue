<template>
  <div>
    <div class="back">
      <div class="container">
        <v-img
          src="../assets/others/human5.png"
          width="15%"
          max-width="300px"
        ></v-img>
        <v-img
          src="../assets/others/human3.png"
          width="46%"
          max-width="750px"
        ></v-img>
        <v-img
          src="../assets/others/human2.png"
          width="8%"
          max-width="180px"
        ></v-img>
        <v-img
          src="../assets/others/human4.png"
          width="22%"
          max-width="350px"
        ></v-img>
      </div>
    </div>
    <div class="page">
      <h2>HumanS</h2>
      <div class="text fontAmatic">
        <v-card dark width="80%" max-width="1000px">
          <v-card-title class="sizeTitle text-h5">
            «We are survivors»</v-card-title
          >
          <v-card-text class="subtitle-1">
            Like a curtain the sky opened above our heads. Stunned we listen to
            the order given by that imposing creature: "Go, kill and conquer!".
            Then they arrived. Vile beings from another world descended upon our
            land, breathing fire and laying waste to everything in their path.
            Alarms were raised, word spread and the battle began. The human
            kingdoms stood ready to meet the threat, but there was little we
            could do with our divided forces. Our spears and swords shattered
            against their stony scales, our arrows fell from their wings, every
            war machine destroyed in moments by a sweep of their tails, and our
            armor was no match for their claws and flames. Heroes, monarchs and
            generals, all succumbed to one. In a short time a cry marked terror
            among men: Dragon!!! Our home had fallen, and our options reduced to
            death, slavery, or exile. Thousands of us crossed the sea to another
            continent, until now avoided by humans. We reach new shores as
            harbingers of the end of the world. Races, only known in old stories
            made pacts with us. Creatures brimming with magic, they would teach
            us their ancient arts and we would give them our science. Thus, an
            alliance was formed and factions arose from each territory of the
            continent in order to protect it. It wouldn't be long before the
            dragons crossed the sea, hoping to repeat history. But this time we
            would be waiting for them</v-card-text
          >
        </v-card>
      </div>

      <div class="container1">
        <h3>Human Clases</h3>
        <!-- <HumanInitialStatsGraphic></HumanInitialStatsGraphic> -->
        <ClasesCards race="fairy"></ClasesCards>
      </div>
    </div>
  </div>
</template>

<script>
import ClasesCards from "@/components/ClasesCards.vue";
// import HumanInitialStatsGraphic from "../components/HumanInitialStatsGraphic.vue";
export default { components: { ClasesCards } };
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Kavivanar&family=Metrophobic&display=swap");
h2 {
  color: white;
  text-align: center;
  font-family: "Amatic SC";
  font-size: 15rem !important;
}

h3 {
  color: white;
  text-align: center;
  font-family: "Amatic SC";
  font-size: 5rem !important;
}

@media screen and (max-width: 700px) {
  h2 {
    font-size: 5rem !important;
  }
  h3 {
    font-size: 2rem !important;
  }
}
.page {
  background: linear-gradient(
    0deg,
    rgb(255, 255, 255, 0.1),
    rgba(0, 0, 0, 0.3)
  );
}
.back {
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(rgb(255, 255, 255, 0.5), rgba(0, 0, 0, 1)),
    url("../assets/others/humans-town.jpg");
  background-position: center;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.container1 {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
}
.text {
  z-index: 99;

  width: 100%;
  font-family: "Amatic SC";
  font-size: larger;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
