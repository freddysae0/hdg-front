<template>
  <v-footer app color="black" dark padless absolute z-index="4">
    <v-card flat tile class="lighten-1 white--text text-center fullWidth">
      <v-card-text>
        <v-btn v-for="icon in social" :key="icon" class="mx-4 white--text" icon>
          <a :href="icon.src"
            ><v-icon color="white" size="24px">
              {{ icon.icon }}
            </v-icon></a
          >
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        {{ footerText }} {{ author }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Hunting Dragons Game</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    app: Object,
  },
  data() {
    return {
      footerText: "Designed and developed by ",
      author: "Freddy Javier Saez Avila",

      social: [
        {
          src: "https://www.facebook.com/freddy.saez.18",
          icon: "mdi-facebook",
        },
        {
          src: "https://twitter.com/freddy_awa",
          icon: "mdi-twitter",
        },
        {
          src: "https://www.linkedin.com/in/freddy-saez-03b261242/",
          icon: "mdi-linkedin",
        },
        {
          src: "https://www.instagram.com/photographer_verum/",
          icon: "mdi-instagram",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.fullWidth {
  min-width: 100%;
}
</style>
