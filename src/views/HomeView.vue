<template>
  <div>
    <div class="textOfSlides">
      <h2>HDG</h2>
    </div>
    <div class="shadowOfSlides"></div>
    <v-carousel
      cycle
      height="95vh"
      interval="5s"
      hide-delimiter-background
      show-arrows-on-hover
      hide-delimiters
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
      </v-carousel-item>
    </v-carousel>

    <v-row class="containerr">
      <v-col>
        <div class="text">
          <p class="width-text">
            Dragons, an equally powerful and evil race have conquered all their
            world, establishing their supremacy and enslaving every other race
            and killing those who resisted. His whole world was taken over by
            them and their leader Bahamut a Phase Dragon started the incursion
            to another world thus opening a portal to another dimension and
            beginning the conquest and destruction of a new land.
          </p>
        </div>
      </v-col>

      <v-col>
        <div class="d-flex justify-center">
          <img class="text-img" src="../assets/others/dragon1.png" alt="" />
        </div>
      </v-col>
    </v-row>

    <v-row class="container1">
      <v-col>
        <div class="d-flex justify-center">
          <img class="text-img1" src="../assets/others/human1.png" alt="" />
        </div>
      </v-col>

      <v-col>
        <div class="text">
          <p class="width-text1">
            The first victims were humans, a race advanced in warfare and
            technology, but lacking in magic and unity. Little by little the
            kingdoms of the continent fell, from great to small, hundreds of
            thousands died, others submitted and became slaves and others fled.
            A great exodus of humans began the journey by sea to another
            continent known as "The Node". A place avoided by humans until now,
            it had been a refuge for every known magical creature.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="container2">
      <v-col>
        <div class="text">
          <p class="width-text2">
            The arrival of humans brought great tragedy to The Node and the
            guardians of the earth thus created an alliance to face the threat
            of another world. Humans were taught to master magic and they shared
            their knowledge of science. Thus factions were created in charge of
            defending the territories of the continent.
          </p>
        </div>
      </v-col>

      <v-col>
        <div class="d-flex justify-center">
          <img class="text-img2" src="../assets/others/vampire1.png" alt="" />
        </div>
      </v-col>
    </v-row>

    <v-row class="racesCards">
      <h1>Races in The Node:</h1>
      <RacesCards></RacesCards>
    </v-row>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&family=Kavivanar&family=Metrophobic&display=swap");

.racesCards {
  background: linear-gradient(180deg, rgb(53, 45, 45), rgb(0, 0, 0, 0.2));
  margin-top: 60px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  justify-content: center;

  font-family: "Metrophobic";
  color: white;
}
.container1 {
  /* idéntico a rotateZ(45deg); */

  transform: rotate(-4deg);

  position: relative;
  padding-right: 100px;
  padding-left: 100px;
  right: 50px;
  width: 130%;
  background-color: rgb(255, 255, 255);
  color: black;
}

.container2 {
  padding-top: 100px;
  padding-bottom: 50px;
}

.width-text {
  margin-left: 13%;
  min-width: 80%;
  padding-left: 5%;
  padding-right: 5%;
  width: 600px;
  color: white;
}

.width-text1 {
  min-width: 80%;
  padding-left: 5%;
  padding-bottom: 60px;

  width: 600px;
  position: relative;
  right: 30%;
  transform: rotate(4deg);

  color: rgb(0, 0, 0);
}

.width-text2 {
  margin-left: 13%;

  min-width: 80%;
  padding-left: 5%;
  padding-right: 5%;
  width: 600px;
  position: relative;

  color: rgb(255, 255, 255);
}
.text-img {
  width: 1000px;
  min-width: 400px;
}
.text-img1 {
  margin-right: 30%;
  width: 600px;
  min-width: 400px;
}
.text-img2 {
  margin-left: 30px;
  width: 300px;
  min-width: 250px;
}
.text {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 16%;
  padding-left: 7%;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  margin-top: 30px;
}

p {
  min-width: 600px;
  font-family: "Amatic SC";
}

h2 {
  font-size: 20vh;
  color: rgb(255, 255, 255);
  padding: 0;
  margin: 0;
}

.shadowOfSlides {
  background: linear-gradient(0deg, rgb(0, 0, 0), rgb(0, 0, 0, 0.2));
  position: absolute;
  height: 97vh;
  width: 100%;
  z-index: 4;
  top: 0;
  left: 0;
}
.textOfSlides {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 90vh;
  width: 100%;
  z-index: 5;
  top: 0;
  left: 0;
}

@media only screen and (max-width: 1113px) {
  .width-text1 {
    margin-left: 68%;
    margin-right: 30%;
  }
}
@media only screen and (max-width: 802px) {
  .text-img1 {
    margin-right: 10%;
    width: 70%;
    min-width: 325px;
  }
  .width-text1 {
    min-width: 115%;
    margin-right: 30%;

    margin-left: 70%;
  }
}

@media only screen and (max-width: 600px) {
  .container1 {
    padding-left: 120px;
    min-width: 500px;
  }
}
</style>

<script>
import slide1 from "../assets/slide/slide1.jpg";
import slide2 from "../assets/slide/slide2.jpg";
import slide3 from "../assets/slide/slide3.jpg";
import slide4 from "../assets/slide/slide4.jpg";
import RacesCards from "@/components/RacesCards.vue";
export default {
  name: "HomeView",

  components: { RacesCards },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        { src: slide1 },
        { src: slide2 },
        { src: slide3 },
        { src: slide4 },
      ],
    };
  },
};
</script>
