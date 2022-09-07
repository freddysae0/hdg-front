<template>
  <v-footer app color="black" dark padless absolute z-index="4">
    <v-card flat tile class="lighten-1 white--text text-center fullWidth">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
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

      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
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
