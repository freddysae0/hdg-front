<template>
  <v-app-bar color="black" app dark absolute height="80px">
    <div class="d-flex align-center">
      <router-link to="/"
        ><v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../assets/icon.png"
          transition="scale-transition"
          width="90"
      /></router-link>

      <router-link class="withOutStyle" to="/"
        ><h1>Hunting Dragons</h1></router-link
      >
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: {
    app: Object,
  },
  data: () => ({
    items: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
  }),
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Amatic+SC);
.withOutStyle {
  text-decoration: none;
}

h1 {
  font-family: "Amatic SC";
  color: rgb(255, 250, 248);
}
</style>
