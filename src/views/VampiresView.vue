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
      <h2>Vampires</h2>
      <div class="text fontAmatic">
        <v-card dark width="80%" max-width="1000px">
          <v-card-title class="sizeTitle text-h5">
            «We do not kneel»</v-card-title
          >
          <v-card-text class="subtitle-1">
            In our memories were prophecies. The arrival of foreigners and their
            so-called science did not take us by surprise. Knowledge housed for
            millennia in our books, ignored by those who judge and fear us. We
            don't care, how could we care, we are the link between past, present
            and future, we are eternal. The Alliance of the races decided to
            accept these rotten blood bags that call themselves humans. Who we
            have known since before the Blood War. Insidious beings, greedy,
            plague carriers. If it weren't for the fact that the threat they
            portend is much greater, we wouldn't hesitate to kick them out, just
            as they kicked out so many of our people. For now we have a common
            enemy, one who dares to look down on us, with no respect for The
            Order or the knowledge it harbours, puffed up in their thirst for
            power. They will know us, and they will also fear us. We will pledge
            our power to the Alliance, and every dragon will know that VAMPIRES
            DO NOT KNEEL!!</v-card-text
          >
        </v-card>
      </div>

      <div class="container1">
        <h3>Vampire Clases</h3>
        <!-- <HumanInitialStatsGraphic></HumanInitialStatsGraphic> -->
        <ClasesCards race="vampire"></ClasesCards>
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
