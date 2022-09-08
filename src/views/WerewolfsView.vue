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
      <h2>Werewolf</h2>
      <div class="text fontAmatic">
        <v-card dark width="80%" max-width="1000px">
          <v-card-title class="sizeTitle text-h5">
            «The herd makes us strong»</v-card-title
          >
          <v-card-text class="subtitle-1">
            Our code is old and simple: Respect life and take only what you
            need. Defend yours and they will defend you. He who fights alone
            dies alone, but the pack survives. Our joy is pure: the frenzy of
            the chase, the howling at night, the warmth of your siblings, the
            pup joining the pack. There is no other better life. Young Wolf:
            Run, fight, howl, hunt, serve, love and grow. Grow soon, because
            they are coming. Our instinct told us. A great evil is approaching.
            We've known since the exiles arrived. Selfish humans, full of hatred
            and lawsuits. Despite having nothing in common with them, we accept
            them for the good of the pack. From them we learned about metals and
            machines, and we gave them our strength and senses. The alliance of
            the races was created and the factions took positions. Then the
            dragons arrived. But we had grown strong and defended ourselves. In
            the end, the pack survives.
          </v-card-text>
        </v-card>
      </div>

      <div class="container1">
        <h3>Werewolf Clases</h3>
        <!-- <HumanInitialStatsGraphic></HumanInitialStatsGraphic> -->
        <ClasesCards race="werewolf"></ClasesCards>
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
