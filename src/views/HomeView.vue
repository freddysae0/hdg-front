<template>
  <div>
    <v-carousel
      cycle
      height="400"
      interval="5s"
      hide-delimiter-background
      show-arrows-on-hover
      hide-delimiters
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.src"
      ></v-carousel-item>
    </v-carousel>

    <v-row>
      <v-col> <h3>sdsdsd</h3></v-col>

      <v-col> <h2>asdasfasf</h2> </v-col>
    </v-row>
  </div>
</template>

<script>
import slide1 from "../assets/slide/slide1.jpg";
import slide2 from "../assets/slide/slide2.jpg";
import slide3 from "../assets/slide/slide3.jpg";
import slide4 from "../assets/slide/slide4.jpg";
export default {
  name: "HomeView",

  components: {},
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
